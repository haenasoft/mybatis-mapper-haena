const mapper = require("../index");

mapper.createMapper([`${__dirname}/test.xml`]);

const sql = mapper.getStatement("test", "testVer2", {
    asdf: true,
    foo: 12345,
    bar: "으악",
});

console.log(sql);
