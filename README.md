# SIMPLER TIMEZONES

a simpler list of timezones, and tools for reasonably guessing the nearest timezone to a user

### timezones are a mess

the two major problems this library solves are:

1. an official, exhaustive list of timezones is too long, and asking a user to traverse literally hundreds of timezones or locales to select their nearest timezone is a bad user experience
2. guessing a user's timezone via their browser returns one of many hundreds of locales, and connecting a given locale to a reasonable list of timezones takes too much time & custom code

you may want to use this library if:

1. you want to present users with a short, easy-to-read list of major timezones that cover a large majority of humans on earth
2. you want to guess a user's nearest major timezone

you should not use this library if:

1. you require every potential user on planet earth to have their precise timezone represented in your form
2. you care whether your user observes daylight saving time

notes:

- this library, again, is not exhaustive. it's just practical. it will save most developers lots of time and provide a better user experience for most users. if you are a developer who would not save any time using this library, please use another one. if you are a user who didn't have a better experience because of this library, I'm very sorry.
- you may not agree with the editorial choices (which timezones to exclude, which locales to include, etc), and that's completely expected and valid. please feel free to request updates, or fork and edit to your liking.
- the language in this library and its documentation is neither technical nor precise. for instance, the timezone in this library named "[-05:00] Eastern Standard Time (ET)" is not technically a timezone; it's an offset plus a partial description of one of the timezones within that offset. but this library doesn't care about that sort of precision; it's made for practical usage and to help developers who just need something reasonable, quickly.

a note about daylight saving:

- this library emphatically disregards daylight saving time. a user should pick their timezone based on their standard time, which will also be what this library's timezone guesser will return. if you're thinking to yourself "that's madness, if I'm a user in California (whose standard offset is -08:00), and we're currently observing daylight saving (meaning my offset is currently -07:00), it's totally wrong for me to pick -08:00!", then you should use another library. this library operates under the assumption typical users have no idea whether they are currently IN or OUT OF daylight saving time, and don't know their UTC offsets by heart. this library's reason for existing is this statement: users typically don't care about timezone precision and will instead have a better user experience picking a standard timezone name, with its standard offset, out of a simple, short list of timezones.

here are two examples illustrating why this isn't an accurate timezone library:

- let's say we might guess, based on a user's built-in browser timezone, that they are located in `America/Phoenix`. technically, there is a timezone specifically for the state of Arizona, in which Phoenix is located, because Arizona is on "Mountain Time" but does not observe daylight saving. however, since we're presenting a reasonable list of timezones, we don't differentiate between "Mountain Time" and "Mountain Time (Arizona)". based on their "standard time" offset, their nearest guess will be Mountain Time, and this library will not assist with selecting Mountain Time (Arizona), nor will it assist with telling you whether the user in Phoenix is currently at offset -6:00 or -7:00. you'll have to use other libraries and methods to do that.
- let's say you're a person living in Newfoundland, whose offset is -02:30 part of the year and -01:30 for the other. you won't find your timezone on this list unless you've passed the `showMoreTimezones: true` option to it, since some low-population and many unique-offset timezones are not shown by default.

### methodology

choosing a single name for a time offset that spans many countries is inherently an editorial decision with political undertones. choosing which timezones to leave out of the default list is as well. decisions are guided as follows:

- for timezones with multiple areas of large population—for instance, +03:00 including both Moscow and Baghdad—the area with the higher number of internet users is chosen. see: https://en.wikipedia.org/wiki/List_of_countries_by_number_of_Internet_users
- timezones with less than 500,000 total inhabitants are not shown by default, but will appear if the `showMore` option is set to `true`.
- timezones with no recognized permanent population are not included

for more information on source data, please see `./source/data-for-humans`.
