import timezones from './data-for-code/timezones';

interface Options {
  showMoreTimezones?: boolean;
}

class SimplerTimezones {
  showMoreTimezones?: boolean;

  constructor(options: Options) {
    const { showMoreTimezones } = options;
    this.showMoreTimezones = showMoreTimezones;
  }

  getTimezones = () => {
    if (this.showMoreTimezones) {
      return timezones;
    }
    return timezones.filter((timezone) => timezone.show_by_default);
  };

  guessTimezone = () => {};
}

export default SimplerTimezones;
