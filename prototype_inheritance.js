var superObj = {superVal: 'super'};
//var subObj = {subVal: 'sub'};
//subObj.__proto__ = superObj; //subObj 객체가 SuperObj 객체를 상속받음

var subObj = Object.create(superObj); //subObj 객체가 SuperObj 객체를 상속받음, __proto__와 같은 의미
subObj.subVal = 'sub';

console.log('superObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

subObj.superVal = 'sub'; //subObj의 객체의 값만 바꿈, __proto__의 객체값을 바꾼 것이 아님
console.log('superObj.superVal =>', superObj.superVal);

var kim = {
    name: 'kim',
    first: 10, second: 20,
    sum: function(){
        return this.first + this.second;
    }
}

//lee.__proto__ = kim;
lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first + this.second)/2
}

console.log("lee.sum()", lee.sum());
console.log("lee.avg()", lee.avg());