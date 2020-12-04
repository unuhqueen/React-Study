import React, {Component} from 'react';

class Subject extends Component {
    //필수적으로 있어야 하는 함수
    render() {
        return (
            //하나의 최상위 태그만 써야함, 여기선 header
            <header>
                <h1>
                    
                    <a href="/" onClick={
                        //onclick event에서는 함수가 호출될 때 매개변수 값으로 event라는 객체를 주입하는 것이 react의 약속
                        function(e){
                        //a tag의 새로고침 기능을 막기 위함
                        e.preventDefault();
                        this.props.onChangePage();
                    }.bind(this)}>{this.props.title}</a>
                </h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;