import { bindable, bindingMode } from 'aurelia-framework';

export class KtSelect {
  @bindable collection;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) selectedValue;
  css = 'close';

  bind() {
    if (!this.collection || this.collection.length === 0) {
      throw new Error('Invalid collection passed to kt-select');
    }
  }

  handleClick(id) {
    this.css = this.css === 'close' ? 'open' : 'close';
    if (id !== -1) {
      if (!this.selectedValue) {
        this.collection.shift();
      }
      this.selectedValue = id;
      const selectedElement = this.collection.find(element => element.id === id);
      const selectedIndex = this.collection.indexOf(selectedElement);
      if (selectedIndex > 0) {
        this.collection.splice(selectedIndex, 1);
        this.collection.unshift(this.selectedValue);
      }
    }
  }
}
