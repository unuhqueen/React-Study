import React, {Component} from 'react';

class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        //App.js의 data를 lists에 push
        while (i < data.length) {
            //key는 각각의 child를 구별하기 위함
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id}>{data[i].title}</a>
                </li>
            )
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

//TOC를 외부에서 쓸 수 있도록 하는 명령어
export default TOC;