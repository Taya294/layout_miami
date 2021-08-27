'use strict';

const tabs = document.querySelectorAll('.tabs__link');

for (const tab of tabs) {
  tab.onclick = selectTab;
}

function selectTab(event) {
  const tabContents = document.querySelectorAll('.tabs__content');

  for (let tabIndex = 0; tabIndex < tabs.length; tabIndex++) {
    const tab = tabs[tabIndex];
    const tabContent = tabContents[tabIndex];

    if (event.target === tab) {
      tabContent.style.display = '';
    } else {
      tab.classList.remove('tabs__link--active');
      tabContent.style.display = 'none';
    }
  }
  event.target.classList.add('tabs__link--active');
}
