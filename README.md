<p align="center">
  <img src="./source/data-for-humans/simpler.jpg" width="450">
  <br>
  <br>
  <b>SIMPLER TIMEZONES</b>
  <br>
  a zero-dependency package that returns all major timezones,
  <br>
  with tools for guessing the nearest timezone to a user
  <br>
  <br>
  <a href="https://codesandbox.io/s/upbeat-tdd-ferbl?fontsize=14&hidenavigation=1&theme=dark">
    <img src="https://codesandbox.io/static/img/play-codesandbox.svg">
  </a>

</p>

---

## timezones are a mess

the two major problems this library solves are:

1. an official, exhaustive list of timezones is too long, and asking a user to traverse literally hundreds of timezones or locales to select their nearest timezone is a bad user experience
2. guessing a user's timezone via their browser returns one of many hundreds of locales, and connecting a given locale to a reasonable list of timezones takes too much time & custom code

you may want to use this library if:

1. you want to present users with a short, easy-to-read list of major timezones that cover a large majority of humans on earth
2. you want to guess a user's nearest major timezone

you should not use this library if:

1. you require every potential user on planet earth to have their precise timezone represented in your form
2. you care whether your user observes daylight saving time

---

### table of contents

- [usage:](#usage)
  - [default list of timezones (28 in total)](#default-list-of-timezones-28-in-total)
  - [slightly expanded list of timezones (35 in total)](#slightly-expanded-list-of-timezones-35-in-total)
  - [return array of timezones](#return-array-of-timezones)
  - [return a single timezone](#return-a-single-timezone)
  - [guess a user's timezone](#guess-a-users-timezone)
- [simpler timezones](#simpler-timezones)
- [general notes:](#general-notes)
- [a note about daylight saving](#a-note-about-daylight-saving)
- [a note about accuracy](#a-note-about-accuracy)
- [a note on methodology](#a-note-on-methodology)

### usage:

#### default list of timezones (28 in total)

```js
import { SimplerTimezones } from 'simpler-timezones';

const simplerTimezones = new SimplerTimezones();
```

#### slightly expanded list of timezones (35 in total)

```js
import { SimplerTimezones } from 'simpler-timezones';

const simplerTimezones = new SimplerTimezones({ showMoreTimezones: true });
```

#### return array of timezones

```js
simplerTimezones.getTimezones();

//[
//  {
//    name: '[-11:00] Samoa Standard Time (SMST)',
//    token: 'utc-11',
//    show_by_default: true,
//    offset_standard: -1100,
//    primary_locales: ['Pacific/Samoa'],
//    locales: [
//      'Etc/GMT+11',
//      'Pacific/Midway',
// ...
```

#### return a single timezone

```js
simplerTimezones.getTimezone(-800);

//{
//  name: '[-08:00] Pacific Standard Time (PT)',
//  token: 'utc-8',
//  show_by_default: true,
//  offset_standard: -800,
//  primary_locales: [ 'America/Los_Angeles' ],
//  locales: [
//    'America/Ensenada',
// ...
```

#### guess a user's timezone

_note: works on all major browsers (chrome/safari/firefox/edge), doesn't work on internet explorer_

```js
simplerTimezones.guessTimezone();

//{
//  name: '[-08:00] Pacific Standard Time (PT)',
//  token: 'utc-8',
//  show_by_default: true,
//  offset_standard: -800,
//  primary_locales: [ 'America/Los_Angeles' ],
//  locales: [
//    'America/Ensenada',
// ...
```

### simpler timezones

| offset   | name                                 | primary locales                         | shown in default view |
| -------- | ------------------------------------ | --------------------------------------- | --------------------- |
| [-11:00] | Samoa Standard Time (SMST)           | Pacific/Samoa                           | false                 |
| [-10:00] | Hawaiian Standard Time (HAST)        | Pacific/Honolulu                        | true                  |
| [-09:30] | Marquesas Time (MART)                | Pacific/Marquesas                       | false                 |
| [-09:00] | Alaskan Standard Time (AK)           | America/Anchorage                       | true                  |
| [-08:00] | Pacific Standard Time (PT)           | America/Los_Angeles                     | true                  |
| [-07:00] | Mountain Standard Time (MT)          | America/Denver                          | true                  |
| [-06:00] | Central Standard Time (CT)           | America/Chicago                         | true                  |
| [-05:00] | Eastern Standard Time (ET)           | America/New_York                        | true                  |
| [-04:00] | Atlantic Standard Time (AST)         | America/Caracas                         | true                  |
| [-03:30] | Newfoundland Standard Time (NST)     | America/St_Johns                        | false                 |
| [-03:00] | Argentina Standard Time (ART)        | America/Buenos_Aires, America/Sao_Paulo | true                  |
| [-02:00] | South Georgia Time (GST)             | Atlantic/South_Georgia                  | false                 |
| [-01:00] | Cape Verde Standard Time (CVT)       | Atlantic/Azores, Atlantic/Cape_Verde    | true                  |
| [+00:00] | GMT Standard Time (GMT)              | Europe/London                           | true                  |
| [+01:00] | Central European Time (CET)          | Europe/Paris                            | true                  |
| [+02:00] | Egypt Standard Time (EGST)           | Africa/Cairo                            | true                  |
| [+03:00] | Russian Standard Time (MSK)          | Asia/Baghdad, Europe/Moscow             | true                  |
| [+03:30] | Iran Standard Time (IRST)            | Asia/Tehran                             | true                  |
| [+04:00] | Arabian Standard Time (ARBST)        | Asia/Dubai                              | true                  |
| [+04:30] | Afghanistan Standard Time (AFT)      | Asia/Kabul                              | true                  |
| [+05:00] | Pakistan Standard Time (PKT)         | Asia/Karachi                            | true                  |
| [+05:30] | India Standard Time (IST)            | Asia/Kolkata                            | true                  |
| [+05:45] | Nepal Time (NPT)                     | Asia/Kathmandu                          | true                  |
| [+06:00] | Central Asia Standard Time (BTT)     | Asia/Dhaka                              | true                  |
| [+06:30] | Myanmar Time (MMT)                   | Asia/Rangoon                            | true                  |
| [+07:00] | SE Asia Standard Time (THA)          | Asia/Bangkok                            | true                  |
| [+08:00] | China Standard Time (CST)            | Asia/Hong_Kong, Asia/Shanghai           | true                  |
| [+09:00] | Tokyo Standard Time (TST)            | Asia/Tokyo, Asia/Seoul                  | true                  |
| [+09:30] | AUS Central Standard Time (ACST)     | Australia/Adelaide                      | true                  |
| [+10:00] | AUS Eastern Standard Time (AEST)     | Australia/Sydney                        | true                  |
| [+11:00] | Central Pacific Standard Time (SBT)  | Asia/Magadan, Pacific/Guadalcanal       | true                  |
| [+12:00] | New Zealand Standard Time (NZST)     | Pacific/Auckland                        | true                  |
| [+12:45] | Chatham Island Standard Time (CHAST) | Pacific/Chatham                         | false                 |
| [+13:00] | Tonga Standard Time (TOT)            | Pacific/Tongatapu, Pacific/Apia         | false                 |
| [+14:00] | Line Islands Time (LINT)             | Pacific/Kiritimati                      | false                 |

### general notes:

- this library, again, is not exhaustive. it's just practical. it will save most developers lots of time and provide a better user experience for most users. if you are a developer who would not save any time using this library, please use another one. if you are a user who didn't have a better experience because of this library, I'm very sorry.
- you may not agree with the editorial choices (which timezones to exclude, which locales to include, etc), and that's completely expected and valid. please feel free to request updates, or fork and edit to your liking.
- the language in this library and its documentation is neither technical nor precise. for instance, the timezone in this library named "[-05:00] Eastern Standard Time (ET)" is not technically a timezone; it's an offset plus a partial description of one of the timezones within that offset. but this library doesn't care about that sort of precision; it's made for practical usage and to help developers who just need something reasonable, quickly.

### a note about daylight saving

- this library emphatically disregards daylight saving time. a user should pick their timezone based on their standard time, which will also be what this library's timezone guesser will return. if you're thinking to yourself "that's madness, if I'm a user in California (whose standard offset is -08:00), and we're currently observing daylight saving (meaning my offset is currently -07:00), it's totally wrong for me to pick -08:00!", then you should use another library. this library operates under the assumption typical users have no idea whether they are currently IN or OUT OF daylight saving time, and don't know their UTC offsets by heart. this library's reason for existing is this statement: users typically don't care about timezone precision and will instead have a better user experience picking a standard timezone name, with its standard offset, out of a simple, short list of timezones.

### a note about accuracy

here are two examples illustrating why this isn't an accurate timezone library:

1. let's say we might guess, based on a user's built-in browser timezone, that they are located in `America/Phoenix`. technically, there is a timezone specifically for the state of Arizona, in which Phoenix is located, because Arizona is on "Mountain Time" but does not observe daylight saving. however, since we're presenting a reasonable list of timezones, we don't differentiate between "Mountain Time" and "Mountain Time (Arizona)". based on their "standard time" offset, their nearest guess will be Mountain Time, and this library will not assist with selecting Mountain Time (Arizona), nor will it assist with telling you whether the user in Phoenix is currently at offset -6:00 or -7:00. you'll have to use other libraries and methods to do that.
2. let's say you're a person living in Newfoundland, whose offset is -02:30 part of the year and -01:30 for the other. you won't find your timezone on this list unless you've passed the `showMoreTimezones: true` option to it, since some low-population and many unique-offset timezones are not shown by default.

### a note on methodology

choosing a single name for a time offset that spans many countries is inherently an editorial decision with political undertones. choosing which timezones to leave out of the default list is as well. decisions are guided as follows:

- for timezones with multiple areas of large population—for instance, +03:00 including both Moscow and Baghdad—the area with the higher number of internet users is chosen. see: https://en.wikipedia.org/wiki/List_of_countries_by_number_of_Internet_users
- timezones with less than 500,000 total inhabitants are not shown by default, but will appear if the `showMore` option is set to `true`.
- timezones with no recognized permanent population are not included

for more information on source data, please see `./source/data-for-humans`.
