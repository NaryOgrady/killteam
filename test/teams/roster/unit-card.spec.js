import { StageComponent } from 'aurelia-testing';
import { PLATFORM } from 'aurelia-pal';
import { bootstrap } from 'aurelia-bootstrapper';
import { RosterModel } from 'resources/models/roster-model';

describe('Unit Card component', () => {
  let component;
  const rosterModel = new RosterModel();
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

  afterEach(() => {
    component.dispose();
  });
  // TODO: test wargear select render
});
