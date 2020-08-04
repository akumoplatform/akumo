var date = {
    localDate: java.time.LocalDate,
    raw: null,
    parsed: null,
    get: function () {
        return this.parsed.toString();
    },
    of: function (year, month, day) {
        return this.localDate.of(year, month, day);

    },
    dayOfWeek: function () {
        return this.parsed.getDayOfWeek();

    },
    dayOfMonth: function () {
        return this.parsed.getDayOfMonth();

    },
    now: function () {
        return this.localDate.now();

    },
    plusDays: function (days) {
        this.parsed = this.parsed.plusDays(days);
        return this;

    },
    isLeapYear: function () {
        return this.localDate.now().isLeapYear();

    },
    parse: function (strDate) {
        this.raw = strDate;
        this.parsed = this.localDate.parse(strDate);
        return this;

    }

}

Console.log(date.parse('2020-02-01').dayOfMonth());
Console.log(date.parse('2020-02-01').dayOfWeek());
Console.log(date.isLeapYear());
Console.log(date.parse('2020-02-01').plusDays(12).get());


Console.log(date.now());
Console.log(date.of(2020, 02, 22));