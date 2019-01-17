import React, { Component } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons'
import MyHeader from '../components/Header/Header'

// 有状态组件
class App extends Component {

    // state:用于改变组件内容状态的值（动态）
    // props:用于组件通信进行传值


    state = {
        persons: [
            { id: 1, name: "test1", count: 50 },
            { id: 2, name: "小白", count: 30 },
            { id: 3, name: "星星", count: 10 },
        ],
        otherState: "anything",
        ShowPerson: true,
    }
    switchNameHandler = (newname) => {
        // console.log("Hello");
        // 更改状态不能直接更改
        // this.state.persons[0].name="改变名字";
        this.setState({
            persons: [
                { name: newname, count: 1 },
                { name: "小白222", count: 2 },
                { name: "星星333", count: 3 },
            ],
        })
    }
    ChangeHander = (event) => {
        //   console.log()
        this.setState({
            persons: [
                { name: event.target.value, count: 1 },
                { name: "小白222", count: 2 },
                { name: "星星333", count: 3 },
            ],
        })
    }
    toggerHander = () => {
        const does = this.state.ShowPerson;
        this.setState({
            ShowPerson: !does
        })
    }
    deleteHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        })

    }

    NameChange = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })
        const person = { ...this.state.persons[personIndex] };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        })
    }


    render() {
        let style = {
            backgroundColor: 'pink',
            padding: '8px'
        }
        let persons = null;
        if (this.state.ShowPerson) {
            persons = <Persons 
            persons={this.state.persons}
            clicked={this.deleteHandler}
            changed={this.NameChange}
            />
            
            // (
            //     <div>

            //         {
            //             this.state.persons.map((person, index) => {
            //                 return <Person
            //                     InputChange={(event) => this.NameChange(event, person.id)}
            //                     myclick={() => this.deleteHandler(index)} key={index} name={person.name} count={person.count}></Persons>
            //             })
            //         }
            //     </div>
            // )
        }
        // 行间样式的修改
        // 动态添加类名
        let classes=[];
        if(this.state.persons.length<=2){
            classes.push("red");
        }
        if(this.state.persons.length<=1){
            classes.push("bold");
        }
        style={backgroundColor: 'green'}
        return (
            <div className="App">
                <MyHeader persons={this.state.persons}/>
                {/* <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                    <span className={classes.join(" ")}>Hi React</span>
                </header> */}
                {/* this.switchNameHandler()加上括号时，表示函数自动执行 */}
                {/* <button onClick={this.switchNameHandler}>更改状态值</button> */}
                <button style={style} onClick={this.switchNameHandler.bind(this, "missu")}>更改状态值</button>
                <button style={style} onClick={this.toggerHander}>切换内容</button>
                {/* <p>{this.state.otherState}</p> */}
                {
                    //     this.state.ShowPerson ?
                    //     <div>
                    //          <Person InputChange={this.ChangeHander} myclick={this.switchNameHandler.bind(this,"missu666")} name={this.state.persons[0].name} count={this.state.persons[0].count}/>
                    // <Person name={this.state.persons[1].name}  count={this.state.persons[1].count} />
                    // <Person name={this.state.persons[2].name}  count={this.state.persons[2].count} >
                    // 非常感谢！！！</Person> 
                    //     </div> 
                    //    : null
                }
                {persons}

            </div>
        );
    }
}

export default App;
