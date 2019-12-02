
import { BindingEngine } from 'aurelia-framework';
import { RosterModel } from '../resources/models/roster-model';

export class NewTeam {
  static inject() {
    return [BindingEngine, RosterModel];
  }

  constructor(bindingEngine, rosterModel) {
    this.bindingEngine = bindingEngine;
    this.rosterModel = rosterModel;
    this.factionOptions = this.rosterModel.getFactions();
    this.subFactionOptions = [{ id: -1, label: 'Choose sub faction' }];
    this.selectedFaction = null;

    this.bindingEngine.propertyObserver(this, 'selectedFaction')
      .subscribe(this.onFactionChange.bind(this));
  }

  onFactionChange() {
    this.subFactionOptions = this.rosterModel.getSubfactions(this.selectedFaction.label);
  }

  onSubFactionChange(selectedValue) {
    return;
  }
}
