import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';

//리액트가 가진 Component class 상속
class App extends Component {
    //render보다 먼저 사용되어 component가 실행될때마다 초기화 담당
    constructor(props) {
        super(props);
        //개발 내부적으로 사용할 정보, 외부에 은닉해야할 정보를 state에 담음
        this.state = {
            mode: 'read',
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
                {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
                <header>
                <h1>   
                    <a href="/"onClick={
                        //onclick event에서는 함수가 호출될 때 매개변수 값으로 event라는 객체를 주입하는 것이 react의 약속
                        function(e){
                        e.preventDefault(); 
                    }}>{this.state.subject.title}</a>
                </h1>
                {this.state.subject.sub}
                </header>
                <TOC data={this.state.contents}></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
