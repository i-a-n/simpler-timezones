export interface Timezone {
  name: string;
  token: string;
  show_by_default: boolean;
  offset_standard: number;
  primary_locales: string[];
  locales: string[];
}

const timezones: Timezone[] = [
  {
    name: '[-11:00] Samoa Standard Time (SMST)',
    token: 'utc-11',
    show_by_default: false,
    offset_standard: -1100,
    primary_locales: ['Pacific/Samoa'],
    locales: [
      'Etc/GMT+11',
      'Pacific/Midway',
      'Pacific/Niue',
      'Pacific/Pago_Pago',
      'Pacific/Samoa',
      'US/Samoa',
    ],
  },
  {
    name: '[-10:00] Hawaiian Standard Time (HAST)',
    token: 'utc-10',
    show_by_default: true,
    offset_standard: -1000,
    primary_locales: ['Pacific/Honolulu'],
    locales: [
      'America/Adak',
      'America/Atka',
      'Etc/GMT+10',
      'HST',
      'Pacific/Honolulu',
      'Pacific/Johnston',
      'Pacific/Rarotonga',
      'Pacific/Tahiti',
      'US/Aleutian',
      'US/Hawaii',
    ],
  },
  {
    name: '[-09:30] Marquesas Time (MART)',
    token: 'utc-930',
    show_by_default: false,
    offset_standard: -930,
    primary_locales: ['Pacific/Marquesas'],
    locales: ['Pacific/Marquesas'],
  },
  {
    name: '[-09:00] Alaskan Standard Time (AK)',
    token: 'utc-9',
    show_by_default: true,
    offset_standard: -900,
    primary_locales: ['America/Anchorage'],
    locales: [
      'America/Anchorage',
      'America/Juneau',
      'America/Metlakatla',
      'America/Nome',
      'America/Sitka',
      'America/Yakutat',
      'Etc/GMT+9',
      'Pacific/Gambier',
      'US/Alaska',
    ],
  },
  {
    name: '[-08:00] Pacific Standard Time (PT)',
    token: 'utc-8',
    show_by_default: true,
    offset_standard: -800,
    primary_locales: ['America/Los_Angeles'],
    locales: [
      'America/Ensenada',
      'America/Los_Angeles',
      'America/Santa_Isabel',
      'America/Tijuana',
      'America/Vancouver',
      'Canada/Pacific',
      'Etc/GMT+8',
      'Mexico/BajaNorte',
      'Pacific/Pitcairn',
      'PST8PDT',
      'US/Pacific',
    ],
  },
  {
    name: '[-07:00] Mountain Standard Time (MT)',
    token: 'utc-7',
    show_by_default: true,
    offset_standard: -700,
    primary_locales: ['America/Denver'],
    locales: [
      'America/Boise',
      'America/Cambridge_Bay',
      'America/Chihuahua',
      'America/Creston',
      'America/Dawson',
      'America/Dawson_Creek',
      'America/Denver',
      'America/Edmonton',
      'America/Fort_Nelson',
      'America/Hermosillo',
      'America/Inuvik',
      'America/Mazatlan',
      'America/Ojinaga',
      'America/Phoenix',
      'America/Shiprock',
      'America/Whitehorse',
      'America/Yellowknife',
      'Canada/Mountain',
      'Canada/Yukon',
      'Etc/GMT+7',
      'Mexico/BajaSur',
      'MST',
      'MST7MDT',
      'Navajo',
      'US/Arizona',
      'US/Mountain',
    ],
  },
  {
    name: '[-06:00] Central Standard Time (CT)',
    token: 'utc-6',
    show_by_default: true,
    offset_standard: -600,
    primary_locales: ['America/Chicago'],
    locales: [
      'America/Bahia_Banderas',
      'America/Belize',
      'America/Chicago',
      'America/Costa_Rica',
      'America/El_Salvador',
      'America/Guatemala',
      'America/Indiana/Knox',
      'America/Indiana/Tell_City',
      'America/Knox_IN',
      'America/Managua',
      'America/Matamoros',
      'America/Menominee',
      'America/Merida',
      'America/Mexico_City',
      'America/Monterrey',
      'America/North_Dakota/Beulah',
      'America/North_Dakota/Center',
      'America/North_Dakota/New_Salem',
      'America/Rainy_River',
      'America/Rankin_Inlet',
      'America/Regina',
      'America/Resolute',
      'America/Swift_Current',
      'America/Tegucigalpa',
      'America/Winnipeg',
      'Canada/Central',
      'Canada/Saskatchewan',
      'Chile/EasterIsland',
      'CST6CDT',
      'Etc/GMT+6',
      'Mexico/General',
      'Pacific/Easter',
      'Pacific/Galapagos',
      'US/Central',
      'US/Indiana-Starke',
    ],
  },
  {
    name: '[-05:00] Eastern Standard Time (ET)',
    token: 'utc-5',
    show_by_default: true,
    offset_standard: -500,
    primary_locales: ['America/New_York'],
    locales: [
      'America/Atikokan',
      'America/Bogota',
      'America/Cancun',
      'America/Cayman',
      'America/Coral_Harbour',
      'America/Detroit',
      'America/Eirunepe',
      'America/Fort_Wayne',
      'America/Grand_Turk',
      'America/Guayaquil',
      'America/Havana',
      'America/Indiana/Indianapolis',
      'America/Indiana/Marengo',
      'America/Indiana/Petersburg',
      'America/Indiana/Vevay',
      'America/Indiana/Vincennes',
      'America/Indiana/Winamac',
      'America/Indianapolis',
      'America/Iqaluit',
      'America/Jamaica',
      'America/Kentucky/Louisville',
      'America/Kentucky/Monticello',
      'America/Lima',
      'America/Louisville',
      'America/Montreal',
      'America/Nassau',
      'America/New_York',
      'America/Nipigon',
      'America/Panama',
      'America/Pangnirtung',
      'America/Port-au-Prince',
      'America/Porto_Acre',
      'America/Rio_Branco',
      'America/Thunder_Bay',
      'America/Toronto',
      'Brazil/Acre',
      'Canada/Eastern',
      'Cuba',
      'EST',
      'EST5EDT',
      'Etc/GMT+5',
      'Jamaica',
      'US/East-Indiana',
      'US/Eastern',
      'US/Michigan',
    ],
  },
  {
    name: '[-04:00] Atlantic Standard Time (AST)',
    token: 'utc-4',
    show_by_default: true,
    offset_standard: -400,
    primary_locales: ['America/Caracas'],
    locales: [
      'America/Anguilla',
      'America/Antigua',
      'America/Aruba',
      'America/Asuncion',
      'America/Barbados',
      'America/Blanc-Sablon',
      'America/Boa_Vista',
      'America/Campo_Grande',
      'America/Caracas',
      'America/Cuiaba',
      'America/Curacao',
      'America/Dominica',
      'America/Glace_Bay',
      'America/Goose_Bay',
      'America/Grenada',
      'America/Guadeloupe',
      'America/Guyana',
      'America/Halifax',
      'America/Kralendijk',
      'America/La_Paz',
      'America/Lower_Princes',
      'America/Manaus',
      'America/Marigot',
      'America/Martinique',
      'America/Moncton',
      'America/Montserrat',
      'America/Port_of_Spain',
      'America/Porto_Velho',
      'America/Puerto_Rico',
      'America/Santiago',
      'America/Santo_Domingo',
      'America/St_Barthelemy',
      'America/St_Kitts',
      'America/St_Lucia',
      'America/St_Thomas',
      'America/St_Vincent',
      'America/Thule',
      'America/Tortola',
      'America/Virgin',
      'Atlantic/Bermuda',
      'Brazil/West',
      'Canada/Atlantic',
      'Chile/Continental',
      'Etc/GMT+4',
    ],
  },
  {
    name: '[-03:30] Newfoundland Standard Time (NST)',
    token: 'utc-330',
    show_by_default: false,
    offset_standard: -330,
    primary_locales: ['America/St_Johns'],
    locales: ['America/St_Johns', 'Canada/Newfoundland'],
  },
  {
    name: '[-03:00] Argentina Standard Time (ART)',
    token: 'utc-3',
    show_by_default: true,
    offset_standard: -300,
    primary_locales: ['America/Buenos_Aires', 'America/Sao_Paulo'],
    locales: [
      'America/Araguaina',
      'America/Argentina/Buenos_Aires',
      'America/Argentina/Catamarca',
      'America/Argentina/ComodRivadavia',
      'America/Argentina/Cordoba',
      'America/Argentina/Jujuy',
      'America/Argentina/La_Rioja',
      'America/Argentina/Mendoza',
      'America/Argentina/Rio_Gallegos',
      'America/Argentina/Salta',
      'America/Argentina/San_Juan',
      'America/Argentina/San_Luis',
      'America/Argentina/Tucuman',
      'America/Argentina/Ushuaia',
      'America/Bahia',
      'America/Belem',
      'America/Buenos_Aires',
      'America/Catamarca',
      'America/Cayenne',
      'America/Cordoba',
      'America/Fortaleza',
      'America/Godthab',
      'America/Jujuy',
      'America/Maceio',
      'America/Mendoza',
      'America/Miquelon',
      'America/Montevideo',
      'America/Nuuk',
      'America/Paramaribo',
      'America/Punta_Arenas',
      'America/Recife',
      'America/Rosario',
      'America/Santarem',
      'America/Sao_Paulo',
      'Antarctica/Palmer',
      'Antarctica/Rothera',
      'Atlantic/Stanley',
      'Brazil/East',
      'Etc/GMT+3',
    ],
  },
  {
    name: '[-02:00] South Georgia Time (GST)',
    token: 'utc-2',
    show_by_default: false,
    offset_standard: -200,
    primary_locales: ['Atlantic/South_Georgia'],
    locales: [
      'America/Noronha',
      'Atlantic/South_Georgia',
      'Brazil/DeNoronha',
      'Etc/GMT+2',
    ],
  },
  {
    name: '[-01:00] Cape Verde Standard Time (CVT)',
    token: 'utc-1',
    show_by_default: true,
    offset_standard: -100,
    primary_locales: ['Atlantic/Azores', 'Atlantic/Cape_Verde'],
    locales: [
      'America/Scoresbysund',
      'Atlantic/Azores',
      'Atlantic/Cape_Verde',
      'Etc/GMT+1',
    ],
  },
  {
    name: '[+00:00] GMT Standard Time (GMT)',
    token: 'utc-0',
    show_by_default: true,
    offset_standard: 0,
    primary_locales: ['Europe/London'],
    locales: [
      'Africa/Abidjan',
      'Africa/Accra',
      'Africa/Bamako',
      'Africa/Banjul',
      'Africa/Bissau',
      'Africa/Conakry',
      'Africa/Dakar',
      'Africa/Freetown',
      'Africa/Lome',
      'Africa/Monrovia',
      'Africa/Nouakchott',
      'Africa/Ouagadougou',
      'Africa/Sao_Tome',
      'Africa/Timbuktu',
      'America/Danmarkshavn',
      'Antarctica/Troll',
      'Atlantic/Canary',
      'Atlantic/Faeroe',
      'Atlantic/Faroe',
      'Atlantic/Madeira',
      'Atlantic/Reykjavik',
      'Atlantic/St_Helena',
      'Etc/GMT',
      'Etc/GMT-0',
      'Etc/GMT+0',
      'Etc/GMT0',
      'Etc/Greenwich',
      'Etc/UCT',
      'Etc/Universal',
      'Etc/UTC',
      'Etc/Zulu',
      'Europe/Belfast',
      'Europe/Guernsey',
      'Europe/Isle_of_Man',
      'Europe/Jersey',
      'Europe/Lisbon',
      'Europe/London',
      'Factory',
      'GB',
      'GB-Eire',
      'GMT',
      'GMT-0',
      'GMT+0',
      'GMT0',
      'Greenwich',
      'Iceland',
      'Portugal',
      'UCT',
      'Universal',
      'UTC',
      'WET',
      'Zulu',
    ],
  },
  {
    name: '[+01:00] Central European Time (CET)',
    token: 'utc+1',
    show_by_default: true,
    offset_standard: 100,
    primary_locales: ['Europe/Paris'],
    locales: [
      'Africa/Algiers',
      'Africa/Bangui',
      'Africa/Brazzaville',
      'Africa/Casablanca',
      'Africa/Ceuta',
      'Africa/Douala',
      'Africa/El_Aaiun',
      'Africa/Kinshasa',
      'Africa/Lagos',
      'Africa/Libreville',
      'Africa/Luanda',
      'Africa/Malabo',
      'Africa/Ndjamena',
      'Africa/Niamey',
      'Africa/Porto-Novo',
      'Africa/Tunis',
      'Arctic/Longyearbyen',
      'Atlantic/Jan_Mayen',
      'CET',
      'Eire',
      'Etc/GMT-1',
      'Europe/Amsterdam',
      'Europe/Andorra',
      'Europe/Belgrade',
      'Europe/Berlin',
      'Europe/Bratislava',
      'Europe/Brussels',
      'Europe/Budapest',
      'Europe/Busingen',
      'Europe/Copenhagen',
      'Europe/Dublin',
      'Europe/Gibraltar',
      'Europe/Ljubljana',
      'Europe/Luxembourg',
      'Europe/Madrid',
      'Europe/Malta',
      'Europe/Monaco',
      'Europe/Oslo',
      'Europe/Paris',
      'Europe/Podgorica',
      'Europe/Prague',
      'Europe/Rome',
      'Europe/San_Marino',
      'Europe/Sarajevo',
      'Europe/Skopje',
      'Europe/Stockholm',
      'Europe/Tirane',
      'Europe/Vaduz',
      'Europe/Vatican',
      'Europe/Vienna',
      'Europe/Warsaw',
      'Europe/Zagreb',
      'Europe/Zurich',
      'MET',
      'Poland',
    ],
  },
  {
    name: '[+02:00] Egypt Standard Time (EGST)',
    token: 'utc+2',
    show_by_default: true,
    offset_standard: 200,
    primary_locales: ['Africa/Cairo'],
    locales: [
      'Africa/Blantyre',
      'Africa/Bujumbura',
      'Africa/Cairo',
      'Africa/Gaborone',
      'Africa/Harare',
      'Africa/Johannesburg',
      'Africa/Juba',
      'Africa/Khartoum',
      'Africa/Kigali',
      'Africa/Lubumbashi',
      'Africa/Lusaka',
      'Africa/Maputo',
      'Africa/Maseru',
      'Africa/Mbabane',
      'Africa/Tripoli',
      'Africa/Windhoek',
      'Asia/Amman',
      'Asia/Beirut',
      'Asia/Damascus',
      'Asia/Famagusta',
      'Asia/Gaza',
      'Asia/Hebron',
      'Asia/Jerusalem',
      'Asia/Nicosia',
      'Asia/Tel_Aviv',
      'EET',
      'Egypt',
      'Etc/GMT-2',
      'Europe/Athens',
      'Europe/Bucharest',
      'Europe/Chisinau',
      'Europe/Helsinki',
      'Europe/Kaliningrad',
      'Europe/Kiev',
      'Europe/Mariehamn',
      'Europe/Nicosia',
      'Europe/Riga',
      'Europe/Sofia',
      'Europe/Tallinn',
      'Europe/Tiraspol',
      'Europe/Uzhgorod',
      'Europe/Vilnius',
      'Europe/Zaporozhye',
      'Israel',
      'Libya',
    ],
  },
  {
    name: '[+03:00] Russian Standard Time (MSK)',
    token: 'utc+3',
    show_by_default: true,
    offset_standard: 300,
    primary_locales: ['Asia/Baghdad', 'Europe/Moscow'],
    locales: [
      'Africa/Addis_Ababa',
      'Africa/Asmara',
      'Africa/Asmera',
      'Africa/Dar_es_Salaam',
      'Africa/Djibouti',
      'Africa/Kampala',
      'Africa/Mogadishu',
      'Africa/Nairobi',
      'Antarctica/Syowa',
      'Asia/Aden',
      'Asia/Baghdad',
      'Asia/Bahrain',
      'Asia/Istanbul',
      'Asia/Kuwait',
      'Asia/Qatar',
      'Asia/Riyadh',
      'Etc/GMT-3',
      'Europe/Istanbul',
      'Europe/Kirov',
      'Europe/Minsk',
      'Europe/Moscow',
      'Europe/Simferopol',
      'Europe/Volgograd',
      'Indian/Antananarivo',
      'Indian/Comoro',
      'Indian/Mayotte',
      'Turkey',
      'W-SU',
    ],
  },
  {
    name: '[+03:30] Iran Standard Time (IRST)',
    token: 'utc+330',
    show_by_default: true,
    offset_standard: 330,
    primary_locales: ['Asia/Tehran'],
    locales: ['Asia/Tehran', 'Iran'],
  },
  {
    name: '[+04:00] Arabian Standard Time (ARBST)',
    token: 'utc+4',
    show_by_default: true,
    offset_standard: 400,
    primary_locales: ['Asia/Dubai'],
    locales: [
      'Asia/Baku',
      'Asia/Dubai',
      'Asia/Muscat',
      'Asia/Tbilisi',
      'Asia/Yerevan',
      'Etc/GMT-4',
      'Europe/Astrakhan',
      'Europe/Samara',
      'Europe/Saratov',
      'Europe/Ulyanovsk',
      'Indian/Mahe',
      'Indian/Mauritius',
      'Indian/Reunion',
    ],
  },
  {
    name: '[+04:30] Afghanistan Standard Time (AFT)',
    token: 'utc+430',
    show_by_default: true,
    offset_standard: 430,
    primary_locales: ['Asia/Kabul'],
    locales: ['Asia/Kabul'],
  },
  {
    name: '[+05:00] Pakistan Standard Time (PKT)',
    token: 'utc+5',
    show_by_default: true,
    offset_standard: 500,
    primary_locales: ['Asia/Karachi'],
    locales: [
      'Antarctica/Mawson',
      'Asia/Aqtau',
      'Asia/Aqtobe',
      'Asia/Ashgabat',
      'Asia/Ashkhabad',
      'Asia/Atyrau',
      'Asia/Dushanbe',
      'Asia/Karachi',
      'Asia/Oral',
      'Asia/Qyzylorda',
      'Asia/Samarkand',
      'Asia/Tashkent',
      'Asia/Yekaterinburg',
      'Etc/GMT-5',
      'Indian/Kerguelen',
      'Indian/Maldives',
    ],
  },
  {
    name: '[+05:30] India Standard Time (IST)',
    token: 'utc+530',
    show_by_default: true,
    offset_standard: 530,
    primary_locales: ['Asia/Kolkata'],
    locales: ['Asia/Calcutta', 'Asia/Colombo', 'Asia/Kolkata'],
  },
  {
    name: '[+05:45] Nepal Time (NPT)',
    token: 'utc+545',
    show_by_default: true,
    offset_standard: 545,
    primary_locales: ['Asia/Kathmandu'],
    locales: ['Asia/Kathmandu', 'Asia/Katmandu'],
  },
  {
    name: '[+06:00] Central Asia Standard Time (BTT)',
    token: 'utc+6',
    show_by_default: true,
    offset_standard: 600,
    primary_locales: ['Asia/Dhaka'],
    locales: [
      'Antarctica/Vostok',
      'Asia/Almaty',
      'Asia/Bishkek',
      'Asia/Dacca',
      'Asia/Dhaka',
      'Asia/Kashgar',
      'Asia/Omsk',
      'Asia/Qostanay',
      'Asia/Thimbu',
      'Asia/Thimphu',
      'Asia/Urumqi',
      'Etc/GMT-6',
      'Indian/Chagos',
    ],
  },
  {
    name: '[+06:30] Myanmar Time (MMT)',
    token: 'utc+630',
    show_by_default: true,
    offset_standard: 630,
    primary_locales: ['Asia/Rangoon'],
    locales: ['Asia/Rangoon', 'Asia/Yangon', 'Indian/Cocos'],
  },
  {
    name: '[+07:00] SE Asia Standard Time (THA)',
    token: 'utc+7',
    show_by_default: true,
    offset_standard: 700,
    primary_locales: ['Asia/Bangkok'],
    locales: [
      'Antarctica/Davis',
      'Asia/Bangkok',
      'Asia/Barnaul',
      'Asia/Ho_Chi_Minh',
      'Asia/Hovd',
      'Asia/Jakarta',
      'Asia/Krasnoyarsk',
      'Asia/Novokuznetsk',
      'Asia/Novosibirsk',
      'Asia/Phnom_Penh',
      'Asia/Pontianak',
      'Asia/Saigon',
      'Asia/Tomsk',
      'Asia/Vientiane',
      'Etc/GMT-7',
      'Indian/Christmas',
    ],
  },
  {
    name: '[+08:00] China Standard Time (CST)',
    token: 'utc+8',
    show_by_default: true,
    offset_standard: 800,
    primary_locales: ['Asia/Hong_Kong', 'Asia/Shanghai', 'Australia/Perth'],
    locales: [
      'Asia/Brunei',
      'Asia/Choibalsan',
      'Asia/Chongqing',
      'Asia/Chungking',
      'Asia/Harbin',
      'Asia/Hong_Kong',
      'Asia/Irkutsk',
      'Asia/Kuala_Lumpur',
      'Asia/Kuching',
      'Asia/Macao',
      'Asia/Macau',
      'Asia/Makassar',
      'Asia/Manila',
      'Asia/Shanghai',
      'Asia/Singapore',
      'Asia/Taipei',
      'Asia/Ujung_Pandang',
      'Asia/Ulaanbaatar',
      'Asia/Ulan_Bator',
      'Australia/Perth',
      'Australia/West',
      'Etc/GMT-8',
      'Hongkong',
      'PRC',
      'ROC',
      'Singapore',
    ],
  },
  {
    name: '[+09:00] Tokyo Standard Time (TST)',
    token: 'utc+9',
    show_by_default: true,
    offset_standard: 900,
    primary_locales: ['Asia/Tokyo', 'Asia/Seoul'],
    locales: [
      'Asia/Chita',
      'Asia/Dili',
      'Asia/Jayapura',
      'Asia/Khandyga',
      'Asia/Pyongyang',
      'Asia/Seoul',
      'Asia/Tokyo',
      'Asia/Yakutsk',
      'Etc/GMT-9',
      'Japan',
      'Pacific/Palau',
      'ROK',
    ],
  },
  {
    name: '[+09:30] AUS Central Standard Time (ACST)',
    token: 'utc+930',
    show_by_default: true,
    offset_standard: 930,
    primary_locales: ['Australia/Adelaide'],
    locales: [
      'Australia/Adelaide',
      'Australia/Broken_Hill',
      'Australia/Darwin',
      'Australia/North',
      'Australia/South',
      'Australia/Yancowinna',
    ],
  },
  {
    name: '[+10:00] AUS Eastern Standard Time (AEST)',
    token: 'utc+10',
    show_by_default: true,
    offset_standard: 1000,
    primary_locales: ['Australia/Sydney'],
    locales: [
      'Antarctica/DumontDUrville',
      'Antarctica/Macquarie',
      'Asia/Ust-Nera',
      'Asia/Vladivostok',
      'Australia/ACT',
      'Australia/Brisbane',
      'Australia/Canberra',
      'Australia/Currie',
      'Australia/Hobart',
      'Australia/Lindeman',
      'Australia/Melbourne',
      'Australia/NSW',
      'Australia/Queensland',
      'Australia/Sydney',
      'Australia/Tasmania',
      'Australia/Victoria',
      'Etc/GMT-10',
      'Pacific/Chuuk',
      'Pacific/Guam',
      'Pacific/Port_Moresby',
      'Pacific/Saipan',
      'Pacific/Truk',
      'Pacific/Yap',
    ],
  },
  {
    name: '[+11:00] Central Pacific Standard Time (SBT)',
    token: 'utc+11',
    show_by_default: true,
    offset_standard: 1100,
    primary_locales: ['Asia/Magadan', 'Pacific/Guadalcanal'],
    locales: [
      'Antarctica/Casey',
      'Asia/Magadan',
      'Asia/Sakhalin',
      'Asia/Srednekolymsk',
      'Etc/GMT-11',
      'Pacific/Bougainville',
      'Pacific/Efate',
      'Pacific/Guadalcanal',
      'Pacific/Kosrae',
      'Pacific/Norfolk',
      'Pacific/Noumea',
      'Pacific/Pohnpei',
      'Pacific/Ponape',
    ],
  },
  {
    name: '[+12:00] New Zealand Standard Time (NZST)',
    token: 'utc+12',
    show_by_default: true,
    offset_standard: 1200,
    primary_locales: ['Pacific/Auckland'],
    locales: [
      'Antarctica/McMurdo',
      'Antarctica/South_Pole',
      'Asia/Anadyr',
      'Asia/Kamchatka',
      'Etc/GMT-12',
      'Kwajalein',
      'NZ',
      'Pacific/Auckland',
      'Pacific/Fiji',
      'Pacific/Funafuti',
      'Pacific/Kwajalein',
      'Pacific/Majuro',
      'Pacific/Nauru',
      'Pacific/Tarawa',
      'Pacific/Wake',
      'Pacific/Wallis',
    ],
  },
  {
    name: '[+12:45] Chatham Island Standard Time (CHAST)',
    token: 'utc+1245',
    show_by_default: false,
    offset_standard: 1245,
    primary_locales: ['Pacific/Chatham'],
    locales: ['NZ-CHAT', 'Pacific/Chatham'],
  },
  {
    name: '[+13:00] Tonga Standard Time (TOT)',
    token: 'utc+13',
    show_by_default: false,
    offset_standard: 1300,
    primary_locales: ['Pacific/Tongatapu', 'Pacific/Apia'],
    locales: [
      'Etc/GMT-13',
      'Pacific/Apia',
      'Pacific/Enderbury',
      'Pacific/Fakaofo',
      'Pacific/Kanton',
      'Pacific/Tongatapu',
    ],
  },
  {
    name: '[+14:00] Line Islands Time (LINT)',
    token: 'utc+14',
    show_by_default: false,
    offset_standard: 1400,
    primary_locales: ['Pacific/Kiritimati'],
    locales: ['Etc/GMT-14', 'Pacific/Kiritimati'],
  },
];

export default timezones;
