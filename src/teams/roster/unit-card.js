import { bindable, inject } from 'aurelia-framework';
import { WargearModel } from '../../resources/models/wargear-model';

@inject(WargearModel)
export class UnitCard {
  @bindable unit;

  constructor(wargearModel) {
    this.wargearModel = wargearModel;
    this.wargearOptions = [];
    this.wargearOptionLabels = [];
  }

  bind() {
    this.setWargearOptions();
  }

  setWargearOptions() {
    this.wargearOptions = this.wargearModel.getWargearOptions(this.unit);
    for (let i = 0; i < this.wargearOptions.length; i++) {
      const option = this.wargearOptions[i];
      const newLabel = {
        id: option.id,
        label: option.name
      };
      this.wargearOptionLabels.push(newLabel);
    }
  }
}
