//交叉类型
//两个接口类型的属性的并集
namespace a{
    interface Bird{
        name: string;
        fly():void
    }
    interface Person{
        name: string;
        eat():void
    }
    
    type BirdMan = Bird & Person;
    
    let p: BirdMan = {
        name:"xxx",
        fly(){},
        eat(){}
    }
}


//typeof 
//可以获取一个变量的类型

namespace b{
    type Person = {
        name:string,
        age:number
    }

    let p: Person = {
        name:'zz',
        age:13
    }
    type Person1 = typeof p;

    let p2: Person1 = {
        name:"xx",
        age:20
    }
}

//索引访问操作符
//通过[]来获取一个类型的子类型

namespace c{
    type Person = {
        name:string,
        age:number,
        job:{
            name:string
        },
        inters:{name: string; level:number}[]
    }
    let myname1: Person['job']['name'] ='w'
    let myname2: Person['job'] ={name:"x"}
    let myname3:Person['inters'][0]["name"] = "10"
}

//keyof
namespace d{
   interface Person{
        name:string,
        age:number,
        gender: 'male' | 'female'
   }
   //type PersonKey = 'name' | 'age' | 'gender';
   type PersonKey  = keyof Person
   function getVal(val:Person, key:PersonKey){
        return val[key]
   }

    let p :Person= {
        name:"1",
        age:1,
        gender: 'male'
    }
    let name = getVal(p,'name')
}

//映射类型
//在定义的时候用in操作符去批量定义
namespace e{
    interface Person{
         name:string,
         age:number,
         gender: 'male' | 'female'
    }
    //type PersonKey = 'name' | 'age' | 'gender';
    type PersonKey  ={[key in keyof Person]?:PersonKey[key]}


    //Partial
    //type Partial<T>  ={[key in keyof T]?:T[key]}
    type PersonKey1 = Partial<Person>

    //Required
    //type Required<T>  ={[key in keyof T]-?:T[key]}
    type PersonKey2 = Required<Person>

    let p: PersonKey2 ={
        name:"1",
        age:2,
        gender: 'male' 
    }


    //Readonly
    //type Readonly<T>  ={readonly [key in keyof T]:T[key]}
    type PersonKey4 = Readonly<Person>
    let p2: PersonKey4 ={
        name:"1",
        age:2,
        gender: 'male' 
    }
    //p2.name = "2"


    //Pick
    // type Pick<T,k extends keyof T>  ={ [key in k]:T[key]}
    type PersonKey5 = Pick<Person,'name'>
    let p3: PersonKey5 ={
        name:"1",
    }

 }


 //条件类型

 interface Fish {
     name1: string
 }
 interface Fish2 {
    name1: string
    age: number
}
 interface Water {
     name2: string
 }
 interface Bird {
    name3: string
}
interface Sky {
    name4: string
}

type Condition<T> = T extends Fish?Water : Sky

let cond1 : Condition<Fish> = {
    name2:"2"
}
let cond2 : Condition<Fish2> = {
    name2:"2"
}
//条件类型的分发
type Condition2<T> = T extends Fish?Water : Sky
let cond3 : Condition<Fish | Bird> = {
    name2:"2",
    name4:"3",
    
}

let cond4 :Water | Sky = {
    name2:"2",
    name4:"3"
}

//内置条件类型

namespace f{

    type E1 = Exclude<string | number,string>//从前者中排出

    let e1: E1 = 10  //不能为字符串

    type E2 = Extract<string | number,string>//从前者中提取

    let e2: E2 = "1"  //只能为字符串

    type E3 = NonNullable<string | number|undefined|null>//排出为空选项
    let e3: E3 = "1"  
    let e4: E3 = 10 


    // ReturnType 

    function getUserInfo(){
        return {name:"xx",age:18}
    }
    type UserInfo = ReturnType<typeof getUserInfo>

    let user : UserInfo = {
        name:"xx",age:18
    }

    //InstanceType

    class Person{
        name: string;
        constructor(name:string){
            this.name = name
        }
    }

    type P = InstanceType<typeof Person> 
    let p :P = new Person("xx")
}


