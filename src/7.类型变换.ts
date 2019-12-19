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
 }