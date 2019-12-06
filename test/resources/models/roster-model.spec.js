import { RosterModel } from 'resources/models/roster-model';
import { WargearModel } from 'resources/models/wargear-model'

describe('the RosterModel class', () => {
  let rosterModel;
  let wargearModel;
  let roster;

  beforeEach(() => {
    rosterModel = new RosterModel();
    wargearModel = new WargearModel();
    roster = rosterModel.getRoster('Tyranids');
  });

  describe('getUnitByName function', () => {
    it('return the correct unit', () => {
      const unit = rosterModel.getUnitByName('Tyranids', 'Termagant');
      expect(unit.name).toBe('Termagant');
    });

    it('return a copy of the unit', () => {
      const unit1 = rosterModel.getUnitByName('Tyranids', 'Termagant');
      const unit2 = rosterModel.getUnitByName('Tyranids', 'Termagant');
      const expectedName = unit2.name;
      unit1.name = 'Test Name';
      expect(unit2.name).toBe(expectedName);
    });
  });

  describe('getRoster', () => {
    it('throws an error when no roster found', () => {
      expect(rosterModel.getRoster.bind(rosterModel)).toThrowError('No faction found');
      // expect(false).toBe(true);
    });

    it('return a copy of the roster array', () => {
      const roster1 = rosterModel.getRoster('Tyranids');
      const roster2 = rosterModel.getRoster('Tyranids');
      const expectedName = roster2[0].name;
      roster1[0].name = 'Test Name';
      expect(roster2[0].name).toBe(expectedName);
    });

    it('does no alter the data objects', () => {
      roster[0].name = 'Test Name';
      const originalUnit = rosterModel.roster.Tyranids[0];
      expect(originalUnit.name).toBe('Termagant');
    });

    it('inserts the correct wargear options', () => {
      for (let i = 0; i < roster.length; i++) {
        const unit = roster[0];
        const expectedWargear = wargearModel.wargear[0];
        expect(unit.wargear.weaponSlots[0].selected).toBe(expectedWargear);
      }
    });
  });
});
