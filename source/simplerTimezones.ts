import timezones from './data-for-code/timezones';

interface Options {
  showMoreTimezones?: boolean;
}

class SimplerTimezones {
  showMoreTimezones?: boolean;

  constructor(options?: Options) {
    this.showMoreTimezones = options?.showMoreTimezones;
  }

  getTimezone = (offset: number) => {
    return timezones.find((timezone) => timezone.offset_standard === offset);
  };

  getTimezones = () => {
    if (this.showMoreTimezones) {
      return timezones;
    }
    return timezones.filter((timezone) => timezone.show_by_default);
  };

  guessLocale = () => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch (e) {
      console.log('Browser does not support timezone detection');
      return '';
    }
  };

  guessTimezone = () => {
    return timezones.find((timezone) =>
      timezone['locales'].includes(this.guessLocale())
    );
  };
}

export default SimplerTimezones;
