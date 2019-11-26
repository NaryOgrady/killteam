import { bindable, inject } from 'aurelia-framework';
import { WargearModel } from '../../resources/models/wargear-model';

@inject(WargearModel)
export class UnitCard {
  @bindable unit;

  constructor(wargearModel) {
    this.wargearModel = wargearModel;
  }

  getWargearOptions() {
    const wargearOptions = this.wargearModel.getWargearOptions(this.unit);
    const wargearOptionLabels = [{ id: -1, label: 'Select wargear...' }];
    for (let i = 0; i < wargearOptions.length; i++) {
      const option = wargearOptions[i];
      const newLabel = {
        id: option.id,
        label: option.name
      };
      wargearOptionLabels.push(newLabel);
    }
    return wargearOptionLabels;
  }
}
