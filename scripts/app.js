'use strict';

let habbits = [];
const HABBIT_KEY = "HABBIT_KEY";
let globalActiveHabbitId;

/* page */
const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    title: document.querySelector('.title'),
    progressPercent: document.querySelector('.progress__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar'),
  },
  content: {
    habbitList: document.querySelector('.habbit__list'),
    nextDay: document.querySelector('.habbit__day')
  },
  popup: {
    index: document.getElementById('popup'),
    iconField: document.querySelector('.popup__form input[name="icon"]')
  }
}
/* utils */
function loadData() {
  const habbitsString = localStorage.getItem(HABBIT_KEY);
  const habbitsArray = JSON.parse(habbitsString);
  if(Array.isArray(habbitsArray)) {
    habbits = habbitsArray;
  }
}

function saveData() {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

function resetForm(form, fields) {
  for (const field of fields) {
    form[field].value = '';
  }
}

function validateAndGetFormData(form, fields) {
  const formData = new FormData(form);
  const res = {};
  for (const field of fields) {
    const fieldValue = formData.get(field);
    form[field].classList.remove('error');
    if (!fieldValue) {
      form[field].classList.add('error');
    }
    res[field] = fieldValue;
  }
  let isValid = true;
  for (const field of fields) {
    if (!res[field]) {
      isValid = false;
    }
  }
  if (!isValid) {
    return;
  }
  return res;
}

/* rerender */
function rerenderMenu(activeHabbit) {
  for (const habbit of habbits) {
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
    if (!existed) {
      // создание
      const element = document.createElement('button');
      element.setAttribute('menu-habbit-id', habbit.id);
      element.classList.add('menu__item');
      element.addEventListener('click', () => rerender(habbit.id));
      element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}">`;
      if (activeHabbit.id === habbit.id) {
        element.classList.add('menu__item--active');
      }
      page.menu.appendChild(element);

      continue;
    }
    if (activeHabbit.id === habbit.id) {
      existed.classList.add('menu__item--active');
    } else {
      existed.classList.remove('menu__item--active');
    }
  }
}

function rerenderHeader(activeHabbit) {
  page.header.title.innerHTML = activeHabbit.name;
  const progress = activeHabbit.days.length / activeHabbit.target > 1
    ? 100
    : activeHabbit.days.length / activeHabbit.target * 100;
  page.header.progressPercent.innerText = progress.toFixed(0) + '%';
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
}

function rerenderContent(activeHabbit) {
  page.content.habbitList.innerHTML = '';
  const days = activeHabbit.days;
  for (const day of days) {
    const habbit = document.createElement('div');
    habbit.classList.add('habbit');
    habbit.innerHTML = `<div class="habbit__day">День ${days.indexOf(day) + 1}</div>
            <div class="habbit__content">
              <div class="habbit__comment">${day.comment}</div>
              <button class="habbit__delete" onclick="removeDay(${days.indexOf(day)})">
                <img src="./images/trashbin.svg" alt="Удалить">
              </button>
            </div>`;
    page.content.habbitList.appendChild(habbit);
  }
  page.content.nextDay.innerText = `День ${days.length + 1}`
}

function rerender(activeHabbitId) {
  globalActiveHabbitId = activeHabbitId;
  const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId)
  if (!activeHabbit) {
    return;
  }
  document.location.replace(document.location.pathname + '#' + activeHabbitId);
  rerenderMenu(activeHabbit);
  rerenderHeader(activeHabbit);
  rerenderContent(activeHabbit);
}

/* work with days */
function addDays(event) {
  event.preventDefault();
  const data = validateAndGetFormData(event.target, ['comment']);
  if (!data) {
    return;
  }
  habbits = habbits.map(habbit => {
    if (habbit.id === globalActiveHabbitId) {
      return {
        ...habbit,
        days: habbit.days.concat([{ comment: data.comment }])
      };
    }
    return habbit;
  });
  resetForm(event.target, ['comment']);
  rerender(globalActiveHabbitId);
  saveData();
}

function removeDay(dayIndex) {
  habbits = habbits.map(habbit => {
    if(habbit.id === globalActiveHabbitId) {
      habbit.days.splice(dayIndex, 1);
      return {
        ...habbit
      };
    }
    return habbit;
  });
  rerender(globalActiveHabbitId);
  saveData();
}

/* popup */

function togglePopup() {
  if (page.popup.index.classList.contains('cover--hidden')) {
    page.popup.index.classList.remove('cover--hidden');
  } else {
    page.popup.index.classList.add('cover--hidden');
  }
}

/* work with habbits */

function setIcon(context, icon) {
  page.popup.iconField.value = icon;
  const activeIcon = document.querySelector('.icon.icon--active');
  activeIcon.classList.remove('icon--active');
  context.classList.add('icon--active');
}

function addHabbits(event) {
  event.preventDefault();
  const form = event.target;
  // const data = new FormData(form);
  // const name = data.get('name');
  // const target = data.get('target');
  // const icon = data.get('icon');
  // for (const input of form.querySelectorAll('.input')) {
  //   input.classList.remove('error');
  // }

  // if (!name) {
  //   form['name'].classList.add('error');
  //   return;
  // }
  // if (!target || isNaN(Number(target)) || Number(target) === 0) {
  //   form['target'].classList.add('error');
  //   return;
  // }
  const data = validateAndGetFormData(event.target, ['name', 'icon', 'target']);

  if (!data) {
    return
  }

  const maxId  = habbits.reduce((acc, habbit) => acc > habbit.id ? acc : habbit.id, 0);
  const newHabbit = {
      id: maxId + 1,
      icon: data.icon,
      name: data.name,
      target: data.target,
      days: []
   };
  habbits.push(newHabbit);
  resetForm(event.target, ['name', 'target']);
  togglePopup();
  // saveData();
  rerender(maxId + 1);
}

/* init */
(() =>  {
  loadData();
  const hashId = Number(document.location.hash.replace('#', ''));
  const urlHabbit = habbits.find(habbit => habbit.id === hashId);
  if (urlHabbit) {
    rerender(urlHabbit.id);
  } else {
    rerender(habbits[0].id);
  }
})();