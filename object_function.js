var kim = {
    name: 'kim',
    first: 10,
    second: 20
}

var lee = {
    name: 'kim',
    first: 10,
    second: 10
}

function sum(prefix){
    // this = kim 또는 lee
    return prefix + (this.first + this.second);
}

//첫번째 인자: this를 무엇으로 할 것인가,
//두번째 인자: 함수의 parameter 값
console.log("sum.call(kim)", sum.call(kim, '=> '));
console.log("sum.call(lee)", sum.call(lee, ': '));

//this를 kim으로 고정시켜 버린 새로운 함수를 만듦
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());