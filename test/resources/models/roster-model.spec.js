import { RosterModel } from 'resources/models/roster-model';

describe('the RosterModel class', () => {
  let rosterModel;

  beforeEach(() => {
    rosterModel = new RosterModel();
  });

  describe('getUnitByName function', () => {
    it('return the correct unit', () => {
      const unit = rosterModel.getUnitByName('Tyranids', 'Termagant');
      expect(unit.name).toBe('Termagant');
    });

    it('return a copoy of the unit', () => {
      const unit1 = rosterModel.getUnitByName('Tyranids', 'Termagant');
      const unit2 = rosterModel.getUnitByName('Tyranids', 'Termagant');
      const expectedName = unit2.name;
      unit1.name = 'Test Name';
      expect(unit2.name).toBe(expectedName);
    });
  });

  describe('getRoster', () => {
    it('throws an error when no roster found', () => {
      expect(rosterModel.getRoster.bind(rosterModel)).toThrowError();
    });

    it('return a copy of the roster array', () => {
      const roster1 = rosterModel.getRoster('Tyranids');
      const roster2 = rosterModel.getRoster('Tyranids');
      const expectedName = roster2[0].name;
      roster1[0].name = 'Test Name';
      expect(roster2[0].name).toBe(expectedName);
    });

    it('does no alter the data objects', () => {
      const roster = rosterModel.getRoster('Tyranids');
      roster[0].name = 'Test Name';
      const originalObject = rosterModel.roster.Tyranids[0];
      expect(originalObject.name).toBe('Termagant');
    });
  });
});
