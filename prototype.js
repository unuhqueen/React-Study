function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

//sum 함수의 원형을 정함
//객체가 생성될때마다 sum 함수가 실행되는게 아님 -> 메모리 낭비x
Person.prototype.sum = function(){ 
    return 'prototype: ' +(this.first + this.second);
}

var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'modified: ' +(this.first + this.second);
}
var lee = new Person('lee', 10, 10);
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());