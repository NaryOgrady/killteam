import { StageComponent } from 'aurelia-testing';
import { PLATFORM } from 'aurelia-pal';
import { bootstrap } from 'aurelia-bootstrapper';
import { appConfig } from 'resources/config';

describe('Unit Card component', () => {
  let component;
  const unit = appConfig.roster.Tyranids[0];

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
});
