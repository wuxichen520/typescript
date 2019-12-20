// 普通类型声明

//jquery js 没有ts
namespace a{
    declare const $:(selector: string)=>{
        click():void
        with(length: number): void
    }
    
    $("#root").click()
    $("#root").with(100)
    
    declare let name1: string;
    declare function getName(name:string) : string;
    declare class Ani {name: string}

    interface Person{
        name: string
    }
    type Student = Person | string

    declare enum Seasons{
        Spring,
        Summer,
        Auyumn,
        Winter
    }
    let seasons :Seasons[] = [
        Seasons.Spring,
        Seasons.Summer,
        Seasons.Auyumn,
        Seasons.Winter,
    ]
}

//复杂类型声明
//jquery
// declare namespace jQuery{
//     function ajax(url: string,config: any) : void

//     let name: string; //let name: string = 'jquery'  只声明不赋值
//     namespace fn {
//         function extend(val: any): void
//     }
// }

jQuery.ajax('1',{})
jQuery.name;
jQuery.fn.extend({})

// 类型声明文件

//创建 typings 文件夹   创建子文件夹  *.d.ts    (如果报错 tsconfig  "include":["src/**/*","typings/**/*"])


//vscode Types auto installer  自动安装申明文件


