
//typeof 类型保护
function double(inp: string | number | boolean){
    if(typeof inp === 'string'){
        inp.toLowerCase()
    }
    if(typeof inp === 'number'){
        inp.toFixed()
    }
   
}

//instanceof类型保护
    class Ani {
        name: string="bird"
    }
    class Cat extends Ani{
        age: number=18
    }

    function getName(a:Ani){
        if(a instanceof Cat){
            a.age
        }else{
            a.name
        }
    } 
//null保护

function getFn(s: string | null){
    // if(s === null){
    //     s=""
    // }
    // s = s|| ""
    // return s.charAt(0)


    function ensure(){
        s = s|| ""
    };
    ensure();
    return s!.charAt(0)
}

//链判断运算符


//可辨识的联合类型

interface Wan{
    class:"wan",
    text1:"up"
}
interface Dan{
    class:"Dan",
    text2:"del"
}

type But = Wan | Dan;

function getBtn(but:But){
    if(but.class=="wan"){
        but.text1
    }else{
        but.text2
    }
}


//in操作符
interface Bird{
    swing: string
 }
 
 interface Dog{
     leg: string
 }
 
 function getName2(x:Bird | Dog){
         if("swing" in x){
             x.swing
         }else{
             x.leg
         }
 }
//自定义的类型保护
interface Bird2{
    legs: number,
    name1:"1"
 }
 
 interface Dog2{
    legs: number,
    name2:"1"
 }

 function isBird(x : Bird2 | Dog2) :x is Bird2{
    return x.legs === 2
 }

 function getAni(x : Bird2 | Dog2){
     if(isBird(x)){
        console.log( x.name1)
     }else{
        console.log( x.name2)
     }
 }

 let x4 : Bird2={name1:"1",legs:2}

 getAni(x4)