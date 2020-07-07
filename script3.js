// 1 関数とは
const greet = function(){
    console.log("こんいちわ");
    console.log("関数を学習していきましょう！");
}

greet();

// 2　関数とは２
const hello = function(){
    console.log("こんにちわ");
    console.log("私の名前は健です");
};

hello();

// 3　アロー関数
const greet = ()=>{
    console.log("こんにちわ");
};
greet();

// 4 引数とは
const greet = (name) => {
    console.log(`こんいちわ、${name}さん`);
}

greet("ひつじ仙人");

// 5 複数の引数
const add = (number1,number2) =>{
    console.log(number1 + number2);
};

add(5,7);

// 6 戻り値
const half = (number) => {
    return number/2;
};

const result = half(130);
console.log(`130の半分は${result}`);

// 7 戻り値の活用 真偽
const check =(number) =>{
    return number % 3 ===0;
} ;

if(check(123)){
    console.log("3の倍数です");
}else{
    console.log("3の倍数ではありません");
}

// 8 スコープ
const name = "にんじゃわんこ";

const introduce = (name) =>{
    console.log(`私は${name}です`);
};

introduce("ひつじ仙人");]

console.log(name);

// 総合演習
const number1 = 103;
const number2 = 72;
const number3 = 189;

const getMax = (a,b,c) =>{
    let max =a;

    if(b> max){
        max =b;
    }
    if(c>max){
        max =c;
    }

    return max;
}

const max = getMax(number1,number2,number3);
console.log(`最大値は${max}です`);
