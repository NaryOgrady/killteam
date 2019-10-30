import { PLATFORM } from 'aurelia-pal';

export const appConfig = {
  title: 'Killteam Manager',
  routes: [
    {
      route: ['', 'teams'], name: 'teams', moduleId: PLATFORM.moduleName('teams/teams'), nav: true, title: 'Teams', settings: { icon: 'address-book-o' }
    },
    {
      route: 'tactics', name: 'tactics', moduleId: PLATFORM.moduleName('tactics/tactics'), nav: true, title: 'Tactics', settings: { icon: 'cogs' }
    },
    {
      route: 'datasheets', name: 'datasheets', moduleId: PLATFORM.moduleName('tactics/tactics'), nav: true, title: 'Data Sheets', settings: { icon: 'address-card-o' }
    },
    {
      route: 'teams/new', name: 'new-team', moduleId: PLATFORM.moduleName('teams/new-team'), nav: false, title: 'New Team'
    }
  ],
  factions: [
    { id: -1, label: 'Choose faction' },
    { id: 0, label: 'Tyranids' },
    { id: 1, label: 'Adeptus Astartes' }
  ],
  subFactions: {
    Tyranids: [
      { id: -1, label: 'Choose sub faction'},
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
  }
};
