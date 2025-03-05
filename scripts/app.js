'use strict';

let habbits = [];
const HABBIT_KEY = "HABBIT_KEY";

/* page */
const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    title: document.querySelector('.title'),
    progressPercent: document.querySelector('.progress__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar'),
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
  if (!activeHabbit) {
    return;
  }
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
  if (!activeHabbit) {
    return
  }
  page.header.title.innerHTML = activeHabbit.name;
  const progress = activeHabbit.days.length / activeHabbit.target > 1
    ? 100
    : activeHabbit.days.length / activeHabbit.target * 100;
  page.header.progressPercent.innerText = progress.toFixed(0) + '%';
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
}

function rerender(activeHabbitId) {
  const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId)
  rerenderMenu(activeHabbit);
  rerenderHeader(activeHabbit);
}

/* init */
(() =>  {
  loadData();
  rerender(1);
})();

console.log(habbits);