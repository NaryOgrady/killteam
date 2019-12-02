import { StageComponent } from 'aurelia-testing';
import { PLATFORM } from 'aurelia-pal';
import { bootstrap } from 'aurelia-bootstrapper';
import { BindingEngine } from 'aurelia-framework';
import { RosterModel } from 'resources/models/roster-model';

describe('the Roster component', () => {
  let component;
  let rosterModel;

  beforeEach(async () => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('teams/roster/roster'))
      .inView('<roster></roster>');
    await component.create(bootstrap);
    rosterModel = new RosterModel();
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
    model.faction = 0;
    model.onFactionChange();
    expect(model.roster).toEqual(rosterModel.roster.Tyranids);
  });

  it('renders the roster correctly', async () => {
    const model = component.viewModel;
    model.faction = 0;
    model.onFactionChange();
    await component.waitForElement('.unit_card');
    const roster = document.getElementsByClassName('unit_card');
    expect(roster.length).toBe(model.roster.length);
  });

  afterEach(() => {
    component.dispose();
  });
});
