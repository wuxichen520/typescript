import { extname } from "path";
import { prototype } from "stream";

//定义类

class PerSon{
   public name: string = 'ww';
    protected age: number;
}
let p1 = new PerSon();

console.log(p1.name)


//存储器 getter setter  namespace
namespace a{
    class PerSon{
        public myname: string ;
         age: number;
        constructor(myname: string,age: number){
            this.myname = myname;
            this.age = age
        }

        get (){
            console.log('get')
            return this.myname
        } 
        set (val:string){
            //this.myname = '333'
            console.log('set')
        }
    }

    class Son extends PerSon{
        stuNo: number
        constructor(myname: string,age: number,stuNo: number){
            super(myname,age)
            this.stuNo = this.stuNo
        }
        dec (){
            console.log(this.age)
        }
    }

    let p = new PerSon("1",2)
    let p1 = new Son("11",22,222);
    
    console.log(p.age)

    console.log(p1.age)
}




// 抽象类


namespace b {
    interface PerSon{
        xx: string;
        yy: string;
        age:number;
    }
    // function enhancer(target: any){
    //     target.prototype.xx ="xx"
    // }
    // function enhancer(target: any) :any{
    //     return class extends target {   // 替换老的类  跟Person无关了
    //          age :number = 10
    //     }
    // }

    function enhancer(num: number){
        return function enhancer(target: any) :any{
            return class extends target {   // 替换老的类  跟Person无关了
                age :number = num
            }
        }
    }
    @enhancer(1)
    class PerSon {
        myname: string = 'person'
        constructor(){

        }
    }
    let p = new PerSon()
    console.log(p.age)
    console.log(p.myname)
}


//属性装饰器

//target 如果装饰的是个普通属性的话。指向的是类的原型
//target装饰的是一个类的属性static 那么这个target指向的是类的定义
namespace c{
    function uperCase(target: any,propertyName: string){
    
        let val = target[propertyName]
        const getter = () => val;
        const setter = (newVal: string)=>{
    
            val = newVal.toUpperCase();
        }
        delete target[propertyName]
        Object.defineProperty(target,propertyName,{
            get:getter,
            set: setter,
            enumerable:true,
            configurable:true,
            // writable:true
        })
    }

    function methodName(target:any,methodName:string){
        console.log(target,methodName)
    }
    class Person{
        @uperCase
        name: string = 'ww'
        @methodName
        getName(){
            console.log('getName')
        }
    }

    let person = new Person();
    person.name='zz'
    console.log(person.name)
}


//参数装饰器
namespace d{
    interface Animal{
        age: number
    }
    function addName(target:any,methodName:string,paramsIndex: number){
            console.log(target,methodName,paramsIndex)
    }
    class Animal{
        login(username: string, @addName name: string){
            console.log(username,name)
        }
    }

    let a = new Animal()
    a.login("ww","2")
  
}


//抽象类

abstract class Animal{
    name: string="ww";
    abstract getName():string

}

class Cat extends Animal{
    getName():string{
        return this.name
    }
}
let cat = new Cat()
console.log(cat.getName())


//抽象类 vs 接口


namespace e{
    interface Pig{
        age: number
    }
    abstract class Animal{
        name: string='animal'
        constructor(){

        }
    }
    class  Ele {
        type: string='ele'
    }
    class Cat extends Animal implements Pig{
        age = 18
    }
    let c = new Cat()
    console.log(c)
}

//抽象方法
namespace f{
    abstract class Animal{
        name: string='animal'
        constructor(){

        }
        abstract getName():void
    }

    class Cat extends Animal{
        getName(){
            console.log(111)
        }
    }

    let c = new Cat()
    c.getName()
}

//重写（override） vs 重载（overload）

namespace g{
    class Animal{
        getName(){
            console.log('xx')
        }
    }
    class Cat extends Animal{
        getName(){
            console.log('gg')
        }
    }

    let c = new Cat()
    c.getName()
}


namespace h{
    class Animal{
        getName(){
            console.log('xx')
        }
    }
    class Cat extends Animal{
        getName(){
            console.log('gg')
            super.getName()   
        }
    }
    
    let c = new Cat()
    c.getName()
}