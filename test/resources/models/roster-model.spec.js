import { RosterModel } from 'resources/models/roster-model';

describe('the Roster Model', () => {
  let rosterModel;

  beforeEach(() => {
    rosterModel = new RosterModel();
  });

  it('has all data properties', () => {
    expect(rosterModel.factions).toBeDefined();
    expect(rosterModel.subFactions).toBeDefined();
    expect(rosterModel.roster).toBeDefined();
    expect(rosterModel.wargear).toBeDefined();
  });

  it('getUnitByName return the correct unit', () => {
    const expectedUnit = rosterModel.roster.Tyranids
      .find(unit => unit.name === 'Termagant');

    expect(expectedUnit).toBe(rosterModel.getUnitByName('Tyranids', 'Termagant'));
  });
});
