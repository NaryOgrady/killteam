import { BindingEngine, bindable } from 'aurelia-framework';
import { appConfig } from '../../resources/config';

export class Roster {
  @bindable faction;

  static inject() {
    return [BindingEngine];
  }

  constructor(bindingEngine) {
    this.bindingEngine = bindingEngine;
    this.roster = [];

    this.bindingEngine.propertyObserver(this, 'faction')
      .subscribe(this.onFactionChange.bind(this));
  }

  onFactionChange() {
    this.roster = appConfig.roster[this.faction.label];
  }
}
