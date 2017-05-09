//关于类型
//后面给name赋值只能是string类型,否则会报错
var name = "will";
//后面赋值可以是任意类型
var sth = 12;
sth = "will";
//后面赋值只能是number类型
var age = 12;
//后面赋值只能是布尔类型
var bool = true;
//在函数里面声明返回值类型
//声明没有返回值的类型
//参数股为字符串
function test(name) {
}
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var zhangsan = new Person();
zhangsan.age = 12;
zhangsan.name = "zhangsan";
var t = function () { return 4; };
var Test = (function () {
    function Test(name2, name3) {
        this.name = 'aaa';
        this.name2 = name2;
        this.name3 = name3;
    }
    Test.prototype.eat = function () {
        alert("sth");
    };
    return Test;
}());
//# sourceMappingURL=demo1.js.map