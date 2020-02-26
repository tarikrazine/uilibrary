import './main.scss';
import Tooltip from './uilibrary/js/tooltip';
import Collapse from './uilibrary/js/collapse';
import Tabs from './uilibrary/js/tabs';
import Toast from './uilibrary/js/toast';

// Create a tooltip
const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(tooltip => {
  const instance = new Tooltip(tooltip);

  instance.init();
});

// Create a Collapse
const collapses = document.querySelectorAll('.collapse');

collapses.forEach(collapse => {
  const instance = new Collapse(collapse);

  instance.init();
});

// Create Tabs
const tabs = new Tabs(document.querySelector('.tabs'));

tabs.init();

// Create Toast
const toast = new Toast();

toast.init();

const button = document.querySelector('.toast-trigger');

button.addEventListener('click', e => {
  e.preventDefault();

  toast.show(button.getAttribute('data-message'));
});
