import { StageComponent } from 'aurelia-testing';
import { PLATFORM } from 'aurelia-pal';
import { bootstrap } from 'aurelia-bootstrapper';
import { RosterModel } from 'resources/models/roster-model';
import { WargearModel } from 'resources/models/wargear-model';

describe('Unit Card component', () => {
  let component;
  const rosterModel = new RosterModel();
  const wargearModel = new WargearModel();
  const unit = rosterModel.getUnitByName('Tyranids', 'Termagant');

  beforeEach(async () => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('teams/roster/unit-card'))
      .inView('<unit-card unit.bind="unit"></unit-card>')
      .boundTo({ unit });
    await component.create(bootstrap);
  });

  it('has the correct model', () => {
    const model = component.viewModel;

    expect(model.unit.name).toBe(unit.name);
  });

  it('renders the wargear options select', () => {
    const wargearSelect = document.getElementsByTagName('kt-select');

    expect(wargearSelect.length).toBe(unit.wargear.weaponSlots.length);
  });

  it('getWargearOptions return the correct collection', () => {
    const model = component.viewModel;
    const wargearOptions = wargearModel.getWargearOptions(unit);
    const expectedOptionLabels = [];
    for (let i = 0; i < wargearOptions.length; i++) {
      const option = wargearOptions[i];
      const newLabel = {
        id: option.id,
        label: option.name
      };
      expectedOptionLabels.push(newLabel);
    }
    model.setWargearOptions();

    expect(expectedOptionLabels).toEqual(model.wargearOptionLabels);
  });

  afterEach(() => {
    component.dispose();
  });
});
