import { RosterModel } from 'resources/models/roster-model';

describe('the Roster Model', () => {
  it('has all data properties', () => {
    const obj1 = new RosterModel();
    expect(obj1.factions).toBeDefined();
    expect(obj1.subFactions).toBeDefined();
    expect(obj1.roster).toBeDefined();
    expect(obj1.wargear).toBeDefined();
  });
});
