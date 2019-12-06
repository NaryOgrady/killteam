import { bindable, inject } from 'aurelia-framework';
import { WargearModel } from '../../resources/models/wargear-model';

@inject(WargearModel)
export class UnitCard {
  @bindable unit;

  constructor(wargearModel) {
    this.wargearModel = wargearModel;
  }

  getWargearOptions(rawOptions) {
    const wargearOptions = this.wargearModel.getWargear(rawOptions);
    const wargearLabels = wargearOptions.map(opt => ({ id: opt.id, label: opt.name }));
    wargearLabels.unshift({ id: -1, label: 'Select wargear' });
    return wargearLabels;
  }
}
