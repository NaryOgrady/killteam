import { StageComponent } from 'aurelia-testing';
import { PLATFORM } from 'aurelia-pal';
import { bootstrap } from 'aurelia-bootstrapper';
import { appConfig } from 'resources/config';

function mockComponent() {
  const component = StageComponent
    .withResources(PLATFORM.moduleName('teams/new-team'))
    .inView('<new-team></new-team>');
  return component;
}

describe('the NewTeam component', () => {
  let component;

  beforeEach(async () => {
    component = mockComponent();
    await component.create(bootstrap);
  });

  it('renders correctly', () => {
    const factionNameInput = document.getElementById('kt-faction-name');
    const factionSelect = document.getElementById('kt-faction-select');
    const subFactionSelect = document.getElementById('kt-subfaction-select');
    expect(factionNameInput).not.toBe(null);
    expect(factionSelect).not.toBe(null);
    expect(subFactionSelect).not.toBe(null);
  });

  it('has the correct view model', () => {
    const model = component.viewModel;
    expect(typeof model.onFactionChange).toBe('function');
    expect(typeof model.onSubFactionChange).toBe('function');
    expect(model.factionOptions).toEqual(appConfig.factions);
    expect(Array.isArray(model.subFactionOptions)).toBe(true);
    expect(model.selectedFaction).toBeDefined();
    expect(model.bindingEngine).toBeDefined();
  });

  it('onFactionChange loads the correct sub faction options', () => {
    const model = component.viewModel;
    model.selectedFaction = { id: 0, label: 'Tyranids' };
    model.onFactionChange();
    expect(model.subFactionOptions).toEqual(appConfig.subFactions.Tyranids);
  });

  afterEach(() => {
    component.dispose();
  });
});
