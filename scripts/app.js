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
  rerenderMenu(activeHabbit);
  rerenderHeader(activeHabbit);
  rerenderContent(activeHabbit);
}

/* work with days */
function addDays(event) {
  event.preventDefault();
  const form = event.target
  const data = new FormData(form);
  const comment = data.get('comment');
  form['comment'].classList.remove('error');
  if (!comment) {
    form['comment'].classList.add('error');
  }
  habbits = habbits.map(habbit => {
    if (habbit.id === globalActiveHabbitId) {
      return {
        ...habbit,
        days: habbit.days.concat([{ comment }])
      };
    }
    return habbit;
  });
  form['comment'].value = '';
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

/* init */
(() =>  {
  loadData();
  rerender(1);
})();
