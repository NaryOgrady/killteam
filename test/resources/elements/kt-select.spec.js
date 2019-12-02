import { StageComponent } from 'aurelia-testing';
import { PLATFORM } from 'aurelia-pal';
import { bootstrap } from 'aurelia-bootstrapper';
import { appConfig } from 'resources/config';

function mockComponent() {
  const component = StageComponent
    .withResources(PLATFORM.moduleName('resources/elements/kt-select'))
    .inView('<kt-select selected-value.bind="selectedValue" collection.bind="collection" on-change.bind="onChange"></kt-select>');
  return component;
}

describe('the KtSelect component', () => {
  const originalCollection = appConfig.factions;
  let component;
  let collection = [];
  const selectedValue = '';
  const onChange = jest.fn();

  beforeEach(async () => {
    component = mockComponent();
    collection = originalCollection.slice();
    component.boundTo({ collection, onChange, selectedValue });
    await component.create(bootstrap);
  });

  it('has the correct model', () => {
    const model = component.viewModel;
    expect(model.collection).not.toBeUndefined();
    expect(model.css).toBe('close');
    expect(model.selectedValue).not.toBeUndefined();
  });

  it('creates all the options and displays the correct default option', () => {
    const options = document.getElementsByClassName('select-option');
    for (let i = 0; i < collection.length; i++) {
      const label = options[i].innerHTML.trim();
      expect(label).toEqual(collection[i].label);
    }
  });

  it('opens when first clicked', () => {
    const model = component.viewModel;
    model.handleClick(1);
    expect(model.css).toBe('open');
  });

  it('close when clicked again', () => {
    const model = component.viewModel;
    model.css = 'open';
    model.handleClick(1);
    expect(model.css).toBe('close');
  });

  describe('handleClick method', () => {
    it('selects the correct value', () => {
      const model = component.viewModel;
      const expectedValue = collection.find(element => element.id === 1);
      model.handleClick(1);
      expect(model.selectedValue).toEqual(expectedValue.id);
    });

    it('removes the default option', () => {
      const model = component.viewModel;
      model.handleClick(1);
      expect(model.collection.length).toBe(originalCollection.length - 1);
    });

    it('moves the selected options to the top of the list', () => {
      const model = component.viewModel;
      const expectedValue = collection.find(element => element.id === 1);
      model.handleClick(1);
      expect(model.collection[0]).toEqual(expectedValue.id);
    });
  });

  it('rise an exception when missing the on change biding', async () => {
    const incorrectComponent = mockComponent();
    incorrectComponent.boundTo({ collection, onChange: undefined });
    await incorrectComponent.manuallyHandleLifecycle().create(bootstrap);
    const model = incorrectComponent.viewModel;
    await expect(model.bind.bind(model))
      .toThrowError('Invalid collection passed to kt-select');
    incorrectComponent.dispose();
  });

  afterEach(() => {
    component.dispose();
  });
});
