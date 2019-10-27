
export class KtSelect {
  constructor() {
    this.css = 'close';
  }

  handleClick() {
    this.css = this.css === 'close' ? 'open' : 'close';
  }
}
