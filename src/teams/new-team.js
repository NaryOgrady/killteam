
import { BindingEngine } from 'aurelia-framework';
import { appConfig } from '../resources/config';

export class NewTeam {
  static inject() {
    return [BindingEngine];
  }

  constructor(bindingEngine) {
    this.bindingEngine = bindingEngine;
    this.factionOptions = appConfig.factions;
    this.subFactionOptions = [{ id: -1, label: 'Choose sub faction' }];
    this.selectedFaction = null;

    this.bindingEngine.propertyObserver(this, 'selectedFaction')
      .subscribe(this.onFactionChange.bind(this));
  }

  onFactionChange() {
    this.subFactionOptions = appConfig.subFactions[this.selectedFaction.label];
  }

  onSubFactionChange(selectedValue) {
    return 0;
  }
}
