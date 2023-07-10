import Settings from '../settings';

test('User options should overlap with default options', () => {
  const config = new Settings();
  config.setOption('music', 'off');
  config.setOption('difficulty', 'hard');
  expect(config.settings).toEqual(new Map([
    ['theme', 'dark'],
    ['music', 'off'],
    ['difficulty', 'hard'],
  ]));
});

test('If the option with the specified name is not available, this will result in an error.', () => {
  const settings = new Settings();
  function setOption() {
    settings.setOption('color', 'white');
  }
  expect(setOption).toThrow();
});

test('Each option has a list of values, if the set value does not exist in this list, it will lead to an error.', () => {
  const settings = new Settings();
  function setOptionValue() {
    settings.setOption('theme', 'beautiful');
  }
  expect(setOptionValue).toThrow();
});
