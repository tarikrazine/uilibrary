class Toast {
  constructor() {
    this.toast = document.createElement('div');
  }

  init() {
    this.toast.classList.add('toast');
    document.querySelector('body').appendChild(this.toast);
  }

  show(message) {
    this.toast.textContent = message;
    this.toast.classList.add('active');
    setTimeout(() => {
      this.toast.classList.remove('active');
    }, 4000);
  }
}

export { Toast as default };
