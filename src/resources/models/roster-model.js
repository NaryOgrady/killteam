import { enhance } from '../utils/decorators';
import { WargearModel } from './wargear-model';


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
        },
        keywords: ['Tyranids']
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
        },
        keywords: ['Tyranids']
      }
    ]
  }
};

@enhance(data)
export class RosterModel {
  constructor() {
    this.wargearModel = new WargearModel();
  }

  getUnitByName(faction, unitName) {
    const roster = this.roster[faction];
    return roster.find(unit => unit.name === unitName);
  }

  getRoster(factionIndex) {
    const faction = this.factions.find(element => element.id === factionIndex);
    const roster = this.roster[faction.label];
    if (!roster) {
      throw new Error('No faction found');
    }
    return roster;
  }

  getFactions() {
    return this.factions;
  }

  getSubfactions(faction) {
    return this.subFactions[faction];
  }
}
