import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { PLATFORM } from 'aurelia-pal';

describe('the Home component', () => {
  let component;

  beforeEach(async () => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('home/home'))
      .inView('<home></home>');
    await component.create(bootstrap);
  });

  it('should render the correct header', () => {
    const travelHeader = document.querySelector('h3');
    expect(travelHeader.innerHTML).toBe('Travel Simulator');
  });

  describe('contains a button', () => {
    it('with the right text', () => {
      const travelButton = document.querySelector('button');
      expect(travelButton.innerHTML).toBe('Generate Travel');
    });
  });

  afterEach(() => {
    component.dispose();
  });
});
