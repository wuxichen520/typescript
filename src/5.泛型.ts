//泛型函数

namespace a{
    function createArr<T>(length: number,val: T):Array<T> {
        let result: Array<any> = [];
        for (let i=0;i<length;i++){
            result.push(val)
        }
        return result
    }

    console.log(createArr<number>(3,1))
    console.log(createArr<string>(3,"1"))
}

// 类数组

function sum(...args: any[]){
    let ars: IArguments = arguments ;
    console.log(ars)
    for (let i=0;i++;i<args.length){
        console.log(args[i])
    }
}
sum(1,2,3)

let root: HTMLElement | null = document.getElementById("root")

//泛型类 

class MyArray<T>{
    list: T[] = [];
    add(val: T){
        this.list.push(val)
    }
    getMax(): T{
        let result: T = this.list[0]
        for(let i=0;i<this.list.length;i++){
            if(this.list[i]>result){
                result = this.list[i]
            }
        }
        return result
    }
}

let myArr = new MyArray<number> ();

myArr.add(1)
myArr.add(4)
myArr.add(2)

console.log(myArr.getMax())


//泛型接口
//泛型不能跟泛型相加
interface Cal{
    <T>(a:T,b:T):T
}

let add: Cal = function <T>(a:T,b:T) :T{

    return a

}

//多个类型参数

function swap<A,B>(tuple:[A,B]): [B,A]{
 return [tuple[1],tuple[0]]
}

let result = swap<string,number>(['ww',20])
console.log(result)

//默认泛型类型

namespace d{
    function createArr<T = number>(length: number,val: T):Array<T> {
        let result: Array<T> = [];
        for (let i=0;i<length;i++){
            result.push(val)
        }
        return result
    }

    let result = createArr(3,'a')
    console.log(result)
    
}

//泛型约束
//在函数中使用泛型时 由于预先不知道具体类型 所以不能访问相应类型的方法

interface LenthWise{
    length: number
}
function logger<T extends LenthWise>(val: T){
    console.log(val.length)
    
}
logger('ww')

interface Car<T>{
    list: T[]
}

let car: Car<string> = {list:["1"]}


//泛型类型别名

namespace f{
    type Cart<T> = {list: T[]} | T[];

    let c1 : Cart<string> = ["2"]
    let c2 : Cart<number> = [2]
    let c3 : Cart<number> = {list:[1]}
}
