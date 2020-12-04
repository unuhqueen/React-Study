import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';

//리액트가 가진 Component class 상속
class App extends Component {
    //render보다 먼저 사용되어 component가 실행될때마다 초기화 담당
    //props = attribute
    constructor(props) {
        super(props);
        //개발 내부적으로 사용할 정보, 외부에 은닉해야할 정보를 state에 담음
        this.state = {
            mode: 'read',
            selected_content_id: 2,
            subject: {
                title: 'WEB',
                sub: 'World Wide Web!'
            },
            welcome: {
                title: 'Welcome',
                desc: 'Hello, React!'
            },
            contents: [
                {
                    id: 1,
                    title: 'HTML',
                    desc: "HTML is for information."
                }, {
                    id: 2,
                    title: 'CSS',
                    desc: "CSS is for design."
                }, {
                    id: 3,
                    title: 'JavaScript',
                    desc: "JavaScript is for interactive"
                }
            ]
        }
    }
    //props나 state가 바뀌면 해당되는 render 함수가 호출됨, 즉 화면이 다시 그려짐
    render() {
        var _title,
            _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            _title = this
                .state
                .contents[0]
                .title;
            _desc = this
                .state
                .contents[0]
                .desc;
        }
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage = {function(){
                        //event가 호출되었을 때 실행되는 함수 안에서는 this의 값이 아무 값도 세팅되어 있지 않음.
                        //setState: 이미 생성된 state의 값을 동적으로 바꿀때 쓰는 문법
                        this.setState({mode: 'welcome'});
                    //this의 값을 component로 고정시켜줌
                    }.bind(this)}
                >
                </Subject>
                <TOC onChangePage = {function(){
                    this.setState({mode: 'read'});
                }.bind(this)} data={this.state.contents}></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
