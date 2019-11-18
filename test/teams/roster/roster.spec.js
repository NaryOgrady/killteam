import { StageComponent } from 'aurelia-testing';
import { PLATFORM } from 'aurelia-pal';
import { bootstrap } from 'aurelia-bootstrapper';
import { BindingEngine } from 'aurelia-framework';
import { appConfig } from 'resources/config';

describe('the Roster component', () => {
  let component;

  beforeEach(async () => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('teams/roster/roster'))
      .inView('<roster></roster>');
    await component.create(bootstrap);
  });

  it('has the correct view model', () => {
    const model = component.viewModel;
    expect(model.bindingEngine).toBeInstanceOf(BindingEngine);
    expect(Array.isArray(model.roster)).toBe(true);
    expect(model.faction).toBe(null);
    expect(typeof model.onFactionChange).toBe('function');
  });

  it('loads the correct roster on faction change', () => {
    const model = component.viewModel;
    model.faction = { id: 0, label: 'Tyranids' };
    model.onFactionChange();
    expect(model.roster).toEqual(appConfig.roster.Tyranids);
  });

  it('renders the roster correctly', async () => {
    const model = component.viewModel;
    model.faction = { id: 0, label: 'Tyranids' };
    model.onFactionChange();
    await component.waitForElement('.unit_card');
    const roster = document.getElementsByClassName('unit_card');
    expect(roster.length).toBe(model.roster.length);
  });

  afterEach(() => {
    component.dispose();
  });
});
