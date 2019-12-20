import * as console from 'console';

//void 和 undefined 有什么区别？


//什么是 never 类型？

//下面代码会不会报错？怎么解决？
// namespace a{
  
//     const obj:any = {
//         a: 1,
//         b: 'string',
//     };
      
//     obj.c = null;
// }


//readonly 和 const 有什么区别？
 //readonly什么都不能改   const 对象能改

//下面代码中，foo 的类型应该如何声明

// interface Foo {
//     ():{} | number
// }


// function foo(a: number){
   
//     return a + 1;
 
// }
 
// foo.bar = 123;

//下面代码中，foo 的类型如何声明
// let foo:any = {};

// for (let i = 0; i< 100; i++) {
//     foo[String(i)] = i;
// }

// console.log(foo)


interface Foo {
    [index: string]: number

}
let foo:Foo = {};
  
for (let i = 0; i< 100; i++) {
    foo[String(i)] = i;
}
console.log(foo)
//实现 MyInterface

// interface MyInterface {
//     ...
// }
// class Bar implements MyInterface {
//     constructor(public name: string) {}
// }
// class Foo implements MyInterface {
//     constructor(public name: string) {}
// }
  
// function myfn(Klass: MyInterface, name: string) {
//     return new Klass(name);
// }
  
// myfn(Bar);
// myfn(Foo);


//什么是 Abstract Class

//什么是 class mixin, 如何实现？

//typeof 关键词有什么用

//keyof 关键词有什么用？

//interface 和 type 声明有什么区别？


//「import ... from」、「 import ... = require()」 和 「import(path: string)」有什么区别？

//declare 关键字有什么用