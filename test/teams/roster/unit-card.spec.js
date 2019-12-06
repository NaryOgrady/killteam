import { StageComponent, ComponentTester } from 'aurelia-testing';
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

  it('renders all the wargear selects', async () => {
    const selects = document.getElementsByTagName('kt-select');
    expect(selects.length).toBe(unit.wargear.weaponSlots.length);
  });

  it('selects have the correct options', () => {
    const model = component.viewModel;
    const rawOptions = unit.wargear.weaponSlots[0];
    const wargearOptions = wargearModel.getWargear(rawOptions);
    const wargearLabels = model.getWargearOptions(rawOptions);
    expect(wargearLabels[0].id).toBe(-1);
    expect(wargearLabels[0].label).toBe('Select wargear');
    for (let i = 1; i < wargearOptions.length; i++) {
      const option = wargearOptions[i];
      const label = wargearLabels[i + 1];
      expect(option.id).toBe(label.id);
      expect(option.name).toBe(label.label);
    }
  });

  afterEach(() => {
    component.dispose();
  });
});
