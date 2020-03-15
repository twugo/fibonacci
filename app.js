'use strict';

/**
 * フィボナッチ数処理のためのクラス
 */
class Fib{
    /**
     * メモ化用変数の用意
     */
    constructor(){
        this.memo = new Map();
        this.memo.set(0, 0);
        this.memo.set(1, 1);
    }
    
    /**
     * フィボナッチ数列の n 番目の値を返す関数。
     * @param {Number} n 数列の何番目か
     * @return {Number} 数列の n 番目の値
     */
    fib(n){
        if(this.memo.has(n)){
            return this.memo.get(n);
        }
        const value = this.fib(n-1) + this.fib(n-2);
        this.memo.set(n, value);
        return value;
    }
}

const length = 40;
const fibonacchi = new Fib();
for(let i = 0; i <= length; i++){
    console.log(fibonacchi.fib(i));
}