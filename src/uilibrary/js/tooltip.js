class Tooltip {
  constructor(el) {
    this.el = el;
    this.message = el.getAttribute('data-message');
  }

  init() {
    const tip = document.createElement('div');
    tip.classList.add('tip');
    tip.textContent = this.message;
    this.el.appendChild(tip);

    this.el.addEventListener('mouseenter', () => {
      tip.classList.add('active');
    });
    this.el.addEventListener('mouseleave', () => {
      tip.classList.remove('active');
    });
  }
}

export { Tooltip as default };
