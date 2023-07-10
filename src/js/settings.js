export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  static get list() {
    return new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);
  }

  setOption(option, value) {
    const values = Settings.list.get(option);
    if (!values) {
      throw new Error(`Option '${option}' is not available.`);
    }
    if (!values.includes(value)) {
      throw new Error(`The '${option}' option cannot be set to '${value}', valid values are: ${values.join(', ')}.`);
    }
    this.userSettings.set(option, value);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
