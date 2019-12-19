//任意属性
namespace a{
    // interface PlainObject{
    //     x:number;
    //     y:number;
    // }
    interface PlainObject{
        [propName: string]: number
    }
    let obj: PlainObject = {
        x:1,
        y:2
    }
}

//接口继承
namespace b{
   interface Speakable{
       speak():void
   }

   interface SpeakChinese extends Speakable{
        speakChinese(): void
   }
   class Person implements SpeakChinese{
        speak(){}
        speakChinese(){}
   }
}

//接口的readonly 
namespace c{
    interface Circle{
        readonly PI: number;
        radius: number
    }
 
    let circle: Circle ={
        PI:3.14,
        radius:4
    }
    //circle.PI=3.15 //不能更改
 }

 //接口约束函数
 namespace d{
    interface Discount{
      (price: number) : number
    }
 
   let cost: Discount = function(price:number){
    return price*1
   }


 }

 //可索引接口(数组和对象)

    interface usArr {
        [index: number]:number
    }
    let arr: usArr = [1,2,3];
    let objs: usArr = {
        1:2,
        "2":3
    }
 console.log(objs)

 //接口约束类
 namespace e{
    interface Discount{
        name: string;
        getName(name: string): void
    }
    
    class Cost implements Discount{
        name:string
        getName(){

        }
    }
   


 }


 //接口约束构造函数
 namespace f{
     class Animal {
         constructor(name: string){

         }
     }
 interface WitnName {
     new(name: string): Animal
 }
 function createAnimal(clazz: any,name: string){
     return new clazz(name)
 }
 let a = createAnimal(Animal,"z")
}