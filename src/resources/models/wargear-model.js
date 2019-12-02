import { enhance } from '../utils/decorators';

const data = {
  wargear: [
    {
      id: 0,
      name: 'Fleshborer',
      range: 12,
      type: 'Assault 1',
      strength: 4,
      ap: 0,
      damage: 1,
      abilities: null
    },
    {
      id: 1,
      name: 'Devourer',
      range: 18,
      type: 'Assault 3',
      strength: 4,
      ap: 0,
      damage: 1,
      abilities: null
    },
    {
      id: 2,
      name: 'Spinefist',
      range: 12,
      type: 'Pistol *',
      strength: 3,
      ap: 0,
      damage: 1,
      abilities: 'When a model fires this weapon, it makes a number of shots equal to its Attacks characteristic.'
    },
    {
      id: 3,
      name: 'Adrenal Glands',
      abilities: 'If a model has adrenal glands, add 1" to the distance it can move when it Advances or charges.'
    },
    {
      id: 4,
      name: 'Toxin Sacs',
      abilities: 'Any wound rolls of 6+ in the Fight phase for a model with toxin sacs cause 1 additional damage.'
    }
  ]
};

@enhance(data)
export class WargearModel {
  getWargearOptions(rawOptions) {
    const wargearOptions = [];
    for (let i = 0; i < rawOptions.length; i++) {
      const wargearIndex = rawOptions[i];
      const wargear = this.wargear.find(element => element.id === wargearIndex);
      wargearOptions.push(wargear);
    }
    return wargearOptions;
  }
}
