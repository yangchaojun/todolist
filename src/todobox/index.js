import React, {Component} from 'react';
import './index.css'
import TodoList from '../todolist/index.js'
import TodoForm from '../todoform/index.js'

export class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                id: 1,
                status: 0,
                text: 'React'
            },{
                id: 2,
                status: 0,
                text: 'React1'
            },{
                id: 3,
                status: 0,
                text: 'React2'
            }]
        }
    }

    componentWillMount() {
      
    }

    saveTask = (text)=> {
        this.setState({
            list: this.state.list.concat({
                id: this.generateId(),
                status: 0,
                text: text
            })
        });
    }

    // 给新增的任务一个随机的id
    generateId = ()=> {
        return Math.floor(Math.random() * 9000) + 1000;
    }

    deleteTask = (item) => {
        // 数组删除元素

        let index = this.state.list.findIndex((item1) => {
            return item1.id === item.id;
        });
        let list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        });
    }

    toggleTask = (item) => {
        let index = this.state.list.findIndex((item1) => {
            return item1.id === item.id;
        });
        let list = [...this.state.list];
        list[index].status = item.status <1 ? 1 : 0;
        this.setState({
            list:list
        });
        // console.log(1);
    }

    render() {
        let {list} = this.state;
        return (
            <div>
                <TodoList list={list} deleteTask={this.deleteTask} toggleTask={this.toggleTask}/>
                <TodoForm saveTask={this.saveTask} />
            </div>
        );
    }
}