const data = {
  factions: [
    { id: -1, label: 'Choose faction' },
    { id: 0, label: 'Tyranids' },
    { id: 1, label: 'Adeptus Astartes' }
  ],
  subFactions: {
    Tyranids: [
      { id: -1, label: 'Choose sub faction' },
      { id: 0, label: 'Behemoth' },
      { id: 1, label: 'Kraken' },
      { id: 2, label: 'Leviathan' },
      { id: 3, label: 'Gorgon' },
      { id: 4, label: 'Jormungandr' },
      { id: 5, label: 'Hydra' },
      { id: 6, label: 'Kronos' },
      { id: 7, label: 'No Faction' }
    ],
    'Adeptus Astartes': [
      { id: -1, label: 'Choose sub faction' },
      { id: 0, label: 'Dark Angels' },
      { id: 1, label: 'White Scars' },
      { id: 2, label: 'Space Wolves' },
      { id: 3, label: 'Imperial Fists' },
      { id: 4, label: 'Blood Angels' },
      { id: 5, label: 'Iron Hands' },
      { id: 6, label: 'Ultramarines' },
      { id: 7, label: 'Salamaners' },
      { id: 8, label: 'Raven Guard' },
      { id: 8, label: 'Black Templars' },
      { id: 9, label: 'No Faction' }
    ]
  },
  roster: {
    Tyranids: [
      {
        id: 0,
        name: 'Termagant',
        movement: 6,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 3,
        toughness: 3,
        wounds: 1,
        attacks: 1,
        leadership: 5,
        save: 6,
        max: 0,
        wargear: {
          weaponSlots: [
            {
              selected: 0,
              options: [0, 1, 2]
            }
          ],
          additionalOptions: [3, 4]
        }
      },
      {
        id: 0,
        name: 'Termagant',
        movement: 6,
        weaponSkill: 4,
        ballisticSkill: 4,
        strength: 3,
        toughness: 3,
        wounds: 1,
        attacks: 1,
        leadership: 5,
        save: 6,
        max: 0,
        wargear: {
          weaponSlots: [
            {
              selected: 0,
              options: [0, 1, 2]
            }
          ],
          additionalOptions: [3, 4]
        }
      }
    ]
  },
  wargear: {
    Tyranids: [
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
  }
};

function enhance(dataObject) {
  return target => {
    Object.assign(target.prototype, dataObject);
  };
}

@enhance(data)
export class RosterModel {
  constructor() {
    this.data = data;
  }
}
