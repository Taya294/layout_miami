'use strict';

const sidebar = document.querySelector('.sidebar');

const popUp = document.querySelector('.pop-up');
const popUpToggler = document.querySelector('#card1');

popUpToggler.addEventListener('click', () => {
  popUp.classList.toggle('pop-up--active');
  sidebar.classList.toggle('sidebar-active');
});

const popUpClose = document.querySelector('.pop-up__close');

const popUpCloseCallBack = () => {
  popUp.classList.toggle('pop-up--active');
};

popUpClose.addEventListener('click', popUpCloseCallBack);

const tabs = document.querySelectorAll('.tabs__link');

for (const tab of tabs) {
  tab.onclick = selectTab;
}

function selectTab(event) {
  for (const tab of tabs) {
    if (event.target !== tab) {
      tab.classList.remove('tabs__link--active');
    }
  }
  event.target.classList.remove('tabs__link--active');
}
