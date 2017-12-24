import React, {Component} from 'react';
import './index.css'

export default class TodoItem extends Component{
    constructor(props) {
        super(props);
    }

    toggleTaskStatus = () => {
        let {item, toggleTask} = this.props;
        toggleTask(item);
    }

    delTask = () => {
        let {item, deleteTask} = this.props;
        deleteTask(item);
    }

    render() {
        let {item} = this.props;

        return (
            <div className="item-container">
                <div className="item-inner" onClick={this.toggleTaskStatus}>
                    <span className="chk-container">
                        <checkbox className="chk"/>
                        <span className="text">{item.text}</span>
                    </span>
                </div>
                <div className="del-container" onClick={this.delTask}>
                    删除
                </div>
            </div>
        );
    }
}