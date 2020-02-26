class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll('.trigger');
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', e => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }

  toggleTabs(event) {
    // Remove the active class
    this.tabs.forEach(tab => tab.classList.remove('active'));
    // Add class active
    event.target.classList.add('active');
  }

  toggleContent(event) {
    // Remove the active class
    this.container
      .querySelectorAll('.content')
      .forEach(item => item.classList.remove('active'));
    // Add class active
    const selector = event.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.add('active');
  }
}

export { Tabs as default };
