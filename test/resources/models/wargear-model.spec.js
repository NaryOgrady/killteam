import { WargearModel } from 'resources/models/wargear-model';
import { RosterModel } from 'resources/models/roster-model';

describe('the Wargear Model', () => {
  const wargearModel = new WargearModel();
  const rosterModel = new RosterModel();

  it('has all the data properties', () => {
    expect(wargearModel.wargear).toBeDefined();
  });

  it('getWargearOptions returns the correct collection', () => {
    const unit = rosterModel.getUnitByName('Tyranids', 'Termagant');
    const faction = unit.keywords[0];
    const wargearOptionsList = unit.wargear.weaponSlots[0].options;
    const expectedWargear = [];
    for (let i = 0; i < wargearOptionsList.length; i++) {
      const wargearIndex = wargearOptionsList[i];
      const wargear = wargearModel.wargear[faction].find(element => element.id === wargearIndex);
      expectedWargear.push(wargear);
    }

    expect(expectedWargear).toEqual(wargearModel.getWargearOptions(unit));
  });
});
