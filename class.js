class Person{
    
    //객체가 생성될 때 자동으로 호출되는 함수
    constructor(name, first, second) { 
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype: '+(this.first+this.second);
    }

}

//extends: Person class를 확장한다
class PersonPlus extends Person { 
    
    //객체가 생성될 때 자동으로 호출되는 함수
    constructor(name, first, second, third) { 
        
        //super == 부모 클래스
        super(name, first, second); 
        /*  this.name = name;
            this.first = first;
            this.second = second; */

        this.third = third;
    }
    sum(){
        return super.sum() + this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
kim.sum = function(){
    return 'modified: ' +(this.first+this.second);
}

//변수 kim을 출력
console.log('kim', kim); 
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());