import { BindingEngine, bindable } from 'aurelia-framework';
import { RosterModel } from '../../resources/models/roster-model';

export class Roster {
  @bindable faction;

  static inject() {
    return [BindingEngine, RosterModel];
  }

  constructor(bindingEngine, rosterModel) {
    this.bindingEngine = bindingEngine;
    this.rosterModel = rosterModel;
    this.roster = [];

    this.bindingEngine.propertyObserver(this, 'faction')
      .subscribe(this.onFactionChange.bind(this));
  }

  onFactionChange() {
    this.roster = this.rosterModel.getRoster(this.faction.label);
  }
}
