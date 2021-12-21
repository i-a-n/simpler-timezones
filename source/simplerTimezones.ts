import timezones from './data-for-code/timezones';

interface Options {
  showMoreTimezones?: boolean;
}

class SimplerTimezones {
  simplerTimezones: typeof timezones;

  constructor(options?: Options) {
    this.simplerTimezones = options?.showMoreTimezones
      ? timezones
      : timezones.filter((timezone) => timezone.show_by_default);
  }

  getTimezone = (offset: number) => {
    return this.simplerTimezones.find(
      (timezone) => timezone.offset_standard === offset
    );
  };

  getTimezones = () => {
    return this.simplerTimezones;
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
    return this.simplerTimezones.find((timezone) =>
      timezone['locales'].includes(this.guessLocale())
    );
  };
}

export default SimplerTimezones;
