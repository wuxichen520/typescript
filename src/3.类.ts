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


