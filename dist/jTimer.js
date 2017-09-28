/* My Plugin  For Get date */
var gb_jTimer = {}; // Variable For Work With Global
(function($) {
    $.fn.jTimer = function(str) {
        str = $.extend({
            format: "%D %d %M %y",
            lang: "AR",
            ampm: false,
            change: false,
            monthArray: [],
            dayArray: [],
            shift: 0
        }, str);
        var tm_monthArr = [],
            tm_dayArr = [],
            tm_lang = str.lang.toUpperCase(),
            seaD = str.format.search(/%d/i),
            seaM = str.format.search(/%m/i),
            r_mon = 3,
            r_day = 3,
            el = this;
        /* Test The Language */
        if (seaD > -1 || seaM > -1) {
            if (gb_jTimer[el.selector + "d"]) {
                tm_dayArr = gb_jTimer[el.selector + "d"];
                tm_monthArr = gb_jTimer[el.selector + "m"];
            } else {
                if (str.change) {
                    tm_monthArr = str.monthArray;
                    tm_dayArr = str.dayArray;
                    r_day = str.shift;
                } else if (tm_lang == "EN") {
                    tm_monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    tm_dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                } else if (tm_lang == "FR") {
                    tm_monthArr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aoùt', 'septembre', 'octobre', 'novembre', 'décembre'];
                    tm_dayArr = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
                } else if (tm_lang == "AR") {
                    tm_monthArr = ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
                    tm_dayArr = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
                } else if (tm_lang == "AR-GR") {
                    tm_monthArr = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                    tm_dayArr = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
                } else if (tm_lang == "AR-MG") {
                    tm_monthArr = ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"]
                    tm_dayArr = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
                } else if (tm_lang == "AZ") { // Azérie {
                    tm_monthArr = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"];
                    tm_dayArr = ["Baz", "BzE", "ÇAx", "Çər", "CAx", "Cüm", "Şən"];
                    r_day = 2;
                } else if (tm_lang == "DE") { // Deutch
                    tm_monthArr = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
                    tm_dayArr = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
                    r_day = 2;
                } else if (tm_lang == "IT") { // Italien
                    tm_monthArr = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
                    tm_dayArr = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
                } else if (tm_lang == "AF") { // African
                    tm_monthArr = ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"];
                    tm_dayArr = ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"];
                } else if (tm_lang == "ES") { // Espagnol
                    tm_monthArr = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
                    tm_dayArr = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
                } else if (tm_lang == "ID") { // Indonesian
                    tm_monthArr = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
                    tm_dayArr = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
                } else if (tm_lang == "PT") { // Portuguese
                    tm_monthArr = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                    tm_dayArr = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
                }
                gb_jTimer[el.selector + "d"] = tm_dayArr;
                gb_jTimer[el.selector + "m"] = tm_monthArr;
            }
        }
        var tm_date = new Date(),
            tm_d = new Date(),
            tm_year = tm_date.getFullYear(),
            tm_day = tm_date.getDate(),
            tm_hours = tm_date.getHours(),
            tm_minutes = tm_date.getMinutes(),
            tm_secondes = tm_date.getSeconds(),
            tm_monthNum1 = tm_date.getMonth(),
            tm_monthNum = tm_monthNum1 + 1,
            tm_month = tm_monthArr[tm_monthNum1],
            tm_dayWeek = tm_dayArr[tm_date.getDay()],
            tm_dayWeekNum = tm_date.getDay() + 1,
            store = "",
            msg = 0,
            tm_get = {},
            tm_new_date = {},
            ap = "";
        // Function to add zero in front of numbers < 10
        function test(i) {
            if (str.ampm) {
                ap = i < 12 ? "AM" : "PM";
                i = i % 12;
                i = i ? i : 12;
            } else if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        function check(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        /* Function Read Strtime And Replace It */
        function tm_do() {
            store = str.format.replace(/%ss/gi, check(tm_secondes));
            store = store.replace(/%mm/g, check(tm_minutes));
            store = store.replace(/%hh/gi, test(tm_hours));
            store = store + " " + ap;
            if (seaD > -1 || seaM > -1) {
                store = store.replace(/%dd/g, tm_dayWeekNum);
                store = store.replace(/%d/g, check(tm_day));
                store = store.replace(/%ll/i, tm_dayWeek.slice(0, 2));
                store = store.replace(/%DD/g, tm_dayWeek.slice(0, r_day));
                store = store.replace(/%D/g, tm_dayWeek);
                store = store.replace(/%MM/g, tm_month.slice(0, r_mon));
                store = store.replace(/%M/g, tm_month);
                store = store.replace(/%m/g, check(tm_monthNum));
            }
            store = store.replace(/%y/gi, tm_year);
            return el.html(store);
        }
        /* Function Set Interval , Prevent Conflict, Restart The Function */
        function tm_set(a, b) {
            if (!gb_jTimer[el.selector]) {
                gb_jTimer[el.selector] = setInterval(function() {
                    el.jTimer({
                        format: str.format,
                        lang: str.lang,
                        change: str.change,
                        monthArray: str.monthArray,
                        dayArray: str.dayArray,
                        shift: str.shift,
                        ampm: str.ampm
                    });
                }, a);
            } else {
                clearInterval(gb_jTimer[el.selector]);
                gb_jTimer[el.selector] = setInterval(function() {
                    el.jTimer({
                        format: str.format,
                        lang: str.lang,
                        change: str.change,
                        monthArray: str.monthArray,
                        dayArray: str.dayArray,
                        shift: str.shift,
                        ampm: str.ampm
                    });
                }, b);
                /* Add A Variable That Indicate That Interval start And we don't need to calculate */
                gb_jTimer[el.selector + '1'] = true;
            }
            return tm_do();
        }

        function sm_set(a) {
            if (!gb_jTimer[el.selector]) {
                gb_jTimer[el.selector] = setInterval(function() {
                    el.jTimer({
                        format: str.format,
                        lang: str.lang,
                        change: str.change,
                        monthArray: str.monthArray,
                        dayArray: str.dayArray,
                        shift: str.shift,
                        ampm: str.ampm
                    })
                }, a);
            }
            return tm_do();
        }
        /* ss ==> Secondes | mm==> Minutes | hh ==> Hours | d ==> day(0-31) | D==> day of week(sunday,Saturday...) | dd ==> number of dayWeek(0-6)
        | DD ==> short dayWeek(sun,mon...) | LL ==> mini dayWeek(su,mo...) |  M ==> monthes(January,Fev...) | MM ==> mini monthes(jan,dec..) | m ==> monthes(1-12) | y ==> year*/
        if (str.format.search(/%ss/i) > -1) {
            sm_set(1000);
        } else if (str.format.search(/%mm/i) > -1) {
            if (gb_jTimer[el.selector + '1'] == true) {
                return tm_do();
            }
            // Set The Next Minutes And Get It In Variable tm_get
            tm_d.setMinutes(tm_minutes + 1);
            tm_get = tm_d.getMinutes();
            // Set an NewObject Time With The Next Minute
            tm_new_date = new Date(tm_year, tm_monthNum1, tm_day, tm_hours, tm_get, "00").getTime();
            // CalculHow Many seconds to the next Minutes
            msg = tm_new_date - tm_date.getTime();
            tm_set(msg, 60000);
        } else if (str.format.search(/%hh/i) > -1) { // Calcul How Many seconds to the next Hours
            if (gb_jTimer[el.selector + '1'] == true) {
                return tm_do();
            }
            tm_d.setHours(tm_hours + 1);
            tm_get = tm_d.getHours();
            tm_new_date = new Date(tm_year, tm_monthNum1, tm_day, tm_get, "00", "00").getTime();
            msg = tm_new_date - tm_date.getTime();
            tm_set(msg, 3600000);
        } else if (seaD > -1 | str.format.search(/%l/i)) {
            // Calcul How Many seconds to the next day
            if (gb_jTimer[el.selector + '1'] == true) {
                return tm_do();
            }
            tm_d.setDate(tm_day + 1);
            tm_get = tm_d.getDate();
            tm_new_date = new Date(tm_year, tm_monthNum1, tm_get, "00", "00", "00").getTime();
            msg = tm_new_date - tm_date.getTime();
            tm_set(msg, 86400000);
        } else if (seaM > -1) { // Calcul How Many seconds to the next month
            tm_d.setMonth(tm_monthNum1 + 1);
            tm_get = tm_d.getMonth();
            tm_new_date = new Date(tm_year, tm_get, "1", "00", "00", "00").getTime();
            msg = tm_new_date - tm_date.getTime();
            sm_set(msg);
        } else if (str.format.search(/%y/i) > -1) { // Calcul How Many seconds to the next Year
            tm_d.setFullYear(tm_year + 1);
            tm_get = tm_d.getFullYear();
            tm_new_date = new Date(tm_get, "1", "1", "00", "00", "00").getTime();
            msg = tm_new_date - tm_date.getTime();
            sm_set(msg);
        }
    }
})(jQuery);
/* End Of Plugin Date */