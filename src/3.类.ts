//定义类

class PerSon{
    name: string = 'ww';
    age: number;
}
let p1 = new PerSon();

console.log(p1.name)


//存储器 getter setter  namespace
namespace a{
    class PerSon{
        name: string = 'ww';
        age: number;
    }
}
