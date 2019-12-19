//函数定义
function hello(name: string): void{
    console.log('xx'+name)
}

//函数表达式
type Gen = (x:string,y:string)=>string;
let genUser: Gen = function(firstName,lastName){
    return firstName+lastName
}


//没有返回值

let genUser1= function(firstName:string,lastName:string): void {
    console.log(firstName+lastName)
}

//可选参数

let genUser2= function(firstName:string,lastName?:string): void {
    console.log(firstName+lastName)
}
genUser2("2")
// type GetUsernameFunction = (x:string,y:string)=>string;
// let genUser:GetUsernameFunction = function(firstName,lastName){
//   return firstName + lastName;
// }

//默认参数

let genUser3= function(firstName:string,lastName:string="2"): string {
    return (firstName+lastName)
}
console.log(genUser3("1"))

//剩余参数

let genUser4= function(...numbers:number[]) {
    return numbers.reduce((acc,ite)=>acc+ite,0)
}
console.log(genUser4(1,2,3))

//函数重载 

let obj:any={}
function attr(val:string):void
function attr(val:number):void
function attr(val: any):void{
    if(typeof val == 'string'){
        obj.name=val
    }
    if(typeof val == 'number'){
        obj.age=val
    }
}

attr('ww')
attr(18)
//attr(true)
console.log(obj)

// function sum(val1:string,val2:string):string
// function sum(val1:number,val2:number):number
// function sum(val1:any,val2:any){
//     return val1 + val2
// }
sum(1,2)
//sum(2,"1")
sum("1","2")








