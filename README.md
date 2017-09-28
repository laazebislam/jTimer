[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flaazebislam%2FjTimer.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Flaazebislam%2FjTimer?ref=badge_shield)
[![Build Status](https://travis-ci.org/laazebislam/jTimer.svg?branch=master)](https://travis-ci.org/laazebislam/jTimer)
[![NPM downloads][npm-downloads-image]][npm-url] 
[![MIT License][license-image]][license-url]

## jTimer
 
It's a jquery plugin for time that control  the time with a structure like strftime with a high perfomance.

## How it work

When you use jTimer for get time with a structure that contains second you run an interval of 1 second, but when you use it for get time with a structure that contain: (minute you run an interval of 60 second, hours ==> interval of 3600 second, day, month....).
* So it improve perfomance by reducing the interval.

## Installation

```
npm install jtimer
```

## Test

```
npm test
```

## Usage on Browser

```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/1.1.1/jquery.min.js'></script> // call jquery
<script src="jTimer.min.js"></script> // call jTimer script
```
- jTimer don't work with jQuery 3.0.0 and higher.

## Time format


````
%ss ==> Secondes 
%mm==> Minutes 
%hh ==> Hours 
%d ==> day(0-31) 
%dd ==> number of dayWeek(0-6)
%D==> day of week(sunday,Saturday...) 
%DD ==> short dayWeek(sun,mon...) 
%LL ==> mini dayWeek(su,mo...) 
%M ==> monthes(January,Fev...) 
%MM ==> mini monthes(jan,dec..)
%m ==> monthes(1-12) 
%y ==> year
// the default format output of jTimer() is : %D %d %M %y 
// the default language of jTimer is : Arabic 
````
## jTimer Language
````
AR ==> Arabic
AR-GR ==> Arabic Gregorian
AR-MG ==> Arabic Maghrebic
EN ==> English
FR ==> Francais
AZ ==> Azérie 
DE ==> Deutch
IT ==> Italien
AF ==> African
ES ==> Espagnol
ID ==> Indonesian
PT ==> Portuguese
// Language propertie is a insensitive-case
````
## jTimer Usage

````js
$(document).ready(function() {
var dom=$(".heure");
dom.jTimer({
format:"%hh:%mm:%ss",
lang:"en"
}); // They will output the time in selected element
});
````
look here for [demo](https://laazebislam.github.io/jTimer/demo/demo.html)

## jTimer Add new language

- You now that we don't have all language in jTimer so you can add new language to jTimer, first set true to change propertie to allow language changing, then add 12 month as an array to propertie monthArray, and  7 day week also like an array to dayArray, also specify the propertie shift that control long of the short day (sunday ==> Sun ...).

````js
$(document).ready(function() {
var dom=$(".heure");
dom.jTimer({
format:"%hh:%mm:%ss",
change:true,
monthArray=[],// define 12 month like an array by your language
dayArray:[],// define 7 day of week
shift:3// define how long it the short day of week and month (sunday ==> sun, january ==> jan)
}); // They will output the time in selected element
});
````

## Licence

jTimer is freely distributable under the terms of the [MIT license](https://github.com/laazebislam/jTimer/blob/master/LICENSE)

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/jtimer
[npm-downloads-image]:https://img.shields.io/badge/%20downloads%20-100%2Fmonth-brightgreen.svg