'use strict';
/**
 * フィボナッチ数列の n 番目の値を返す関数。
 * @param {Number} n 数列の何番目か
 * @return {Number} 数列の n 番目の値
 */
function fib(n){
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }else{
        return fib(n-1) + fib(n-2);
    }
}

const length = 40;
for(let i = 0; i <= length; i++){
    console.log(fib(i));
}