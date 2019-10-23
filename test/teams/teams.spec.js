import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { PLATFORM } from 'aurelia-pal';

describe('the Teams component', () => {
  let component;

  beforeEach(async () => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('teams/teams'))
      .inView('<teams></teams>');
    await component.create(bootstrap);
  });

  describe('contains a button', () => {
    it('with the right text', () => {
      const button = document.querySelector('button');
      expect(button.textContent.trim()).toBe('New Team');
    });
  });

  afterEach(() => {
    component.dispose();
  });
});
