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

    it('throws an error when no roster found', () => {
      expect(rosterModel.getRoster.bind(rosterModel)).toThrowError();
    });
  });
});
