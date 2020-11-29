var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    third: 30,
    sum: function(){
        return this.first + this.second + this.third; //this: 자신이 속해있는 객체 (나, me와 같은 뜻)
    }
}

var lee = {
    name: 'lee',
    first: 10,
    second: 10,
    third: 10,
    sum: function(){
        return this.first + this.second + this.third; //this: 자신이 속해있는 객체 (나, me와 같은 뜻)
    }
}
// console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

var d1 = new Date('2019-4-10');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());
console.log('Date', Date);

function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first + this.second + this.third; //this: 자신이 속해있는 객체 (나, me와 같은 뜻)
    }
}
console.log('Person()', Person()); //그냥 함수

//constructor(생성자) 함수
console.log('new Person()', new Person()); //Person이라는 하나의 객체 출력

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());
