//关于类型
//后面给name赋值只能是string类型,否则会报错
var name:string = "will";
//后面赋值可以是任意类型
var sth:any = 12;
sth = "will";
//后面赋值只能是number类型
var age:number = 12;
//后面赋值只能是布尔类型
var bool:boolean = true;
//在函数里面声明返回值类型
//声明没有返回值的类型
//参数股为字符串
function test(name:string):void {
}
class Person {
    name:string;
    age:number
}
var zhangsan = new Person();
zhangsan.age = 12;
zhangsan.name = "zhangsan";
var t = ()=>4;
class Test {
    name:string;
    name2:string;
    name3:string;

    constructor(name2:string, name3:string) {
        this.name = 'aaa';
        this.name2 = name2;
        this.name3 = name3;
    }
    eat(){
        alert("sth")
    }
}






