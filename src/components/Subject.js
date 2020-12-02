import React, {Component} from 'react';

class Subject extends Component {
    //필수적으로 있어야 하는 함수
    render() {
        return (
            //하나의 최상위 태그만 써야함, 여기선 header
            <header>
                <h1>
                    <a href="/">{this.props.title}</a>
                </h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;