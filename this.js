var k = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function(){
        //this: 자신이 속해있는 객체 (나, me와 같은 뜻)
        return this.first + this.second; 
    }
}
// console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum(kim.first, kim.second)", k.sum());
