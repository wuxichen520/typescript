

 //Cannot redeclare block-scoped variable 'name'
 //如果代码里有export  import  之类的代码 那么这个文件变成一个模块
 export {}
let name:string = 'xx'
let age:number = 10;
let married:boolean = true;
let hobbies1:number[] = [1,2,3];
let hobbies2:string[] = ["1","2","3"];
let inh1:Array<string> = ["1","2","3"];
let inh2:Array<number> = [1,2,3];


//元组   类似一个数组  是一个长度与类型都固定的数组
// 1.长度固定
// 2.类型可以不一样

let point:[number,number] = [100,100];
point[0],point[1];

let person:[number,string]=[18,'wx'];

//枚举类型 普通枚举可以改 常量枚举不能改

//普通枚举
enum Gener{
    BOY=2,
    GIRL=0
}

console.log(`gg是${Gener.BOY}`)
console.log(`mm是${Gener.GIRL}`)
//常数枚举

const enum Colors{
    Red,
    Yellow,
    Blue
}

console.log(Colors.Red,Colors.Yellow,Colors.Blue)


//任意类型 anyscript

let root :HTMLElement | null = document.getElementById('root');
root!.style.color = 'red' //! 断言不为空


//null 和 undefined

//null 和 undefined 是其它类型的子类型，可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined
// "strict": true,                           /* Enable all strict type-checking options. */
// // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
//  "strictNullChecks": false,   
let x: number;
x = 1;
x = undefined;    
x = null;   

let y: number | null | undefined;
y = 1;
y = undefined;   
y = null;  


//void类型  没有


function greestring(name:string) :void {
    console.log(`${name}`)
    return null; 
}

greestring('ww')


//never 永远不  代表不会出现的值

function creatError(message:string) :never {
    console.log(1)
    throw new Error('error');
}

//包装对象  java装箱跟拆箱

//自动在基本类型喝对象类型之间切换
let name1: string ='wx';
name1.toLocaleLowerCase(); 
//1.基本类型没有方法  但会在内部迅速完成一个装箱的操作 ：把基本类型包装成对象类型，然后用对象来调方法
/*let name11 = new String(name1);
name11.toLocaleLowerCase()*/

//联合类型
//联合类型上只能访问两个类型共有的属性和方法
let name2: string | number;

//类型断言
//类型断言可以将一个联合类型的变量，指定为一个更加具体的类型
let name3: string | number;
(name3 as number).toFixed();
(name3 as string).toLocaleLowerCase();


//字面量类型
let name4:'BOY' |'GIRL';
name4 = 'BOY'

//字符串字面量 vs 联合类型
//字符串字面量类型用来约束取值只能是某几个字符串中的一个, 联合类型（Union Types）表示取值可以为多种类型中的一种