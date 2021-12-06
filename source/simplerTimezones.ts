import timezones from './data-for-code/timezones';
import moment from 'moment-timezone';

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

  guessLocale = () => {
    return moment.tz.guess();
  };

  guessTimezone = () => {
    return timezones.find((timezone) =>
      timezone['locales'].includes(this.guessLocale())
    );
  };
}

export default SimplerTimezones;
