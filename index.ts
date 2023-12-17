let 이름 :string = 'kim';

let 배열 :string[] = ['kim', 'park'];

let 오브젝트 :{name : string} = {name : 'kim'};

let 유니온 :string | number = 123;

type 내타입 = string | number;

let 타입 : 내타입 = 123;

function 함수(x : number) : number{
    return x * 2
}

type Member = [number, boolean];
let john :Member = [123, true];


type Member2 = {
    [key : string] : string,
}
let jon : Member2 = {name : 'kim'} 

class Person {
    name : string;
    constructor(name: string){
        this.name = name;
    }
}