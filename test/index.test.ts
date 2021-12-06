import { SimplerTimezones } from '../source/index';

test('it exists', () => {
  expect(new SimplerTimezones()).toBeInstanceOf(SimplerTimezones);
});

test('it gets timezones', () => {
  const timezones = new SimplerTimezones();
  expect(timezones.getTimezones()).toBeInstanceOf(Array);
  expect(timezones.getTimezones().length).toBeGreaterThan(0);
});

test('it returns more timezones when you ask for more', () => {
  const timezonesDefault = new SimplerTimezones();
  const defaultLength = timezonesDefault.getTimezones().length;

  const timezonesMore = new SimplerTimezones({ showMoreTimezones: true });
  const moreLength = timezonesMore.getTimezones().length;

  expect(moreLength).toBeGreaterThan(defaultLength);
});

test('it returns a timezone if you ask for an existent offset', () => {
  const timezones = new SimplerTimezones();
  const timezone = timezones.getTimezone(-800);
  expect(timezone?.offset_standard).toBe(-800);
});

test('it returns null if you ask for a non-existent offset', () => {
  const timezones = new SimplerTimezones();
  const timezone = timezones.getTimezone(-8000);
  expect(timezone?.offset_standard).toBeUndefined();
});
