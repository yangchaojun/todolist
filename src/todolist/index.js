import React, {Component} from 'react';
import TodoItem from '../todoitem/index.js'
import Footer from '../footer/index.js'

export default class TodoList extends Component{
    constructor(props) {
        super(props);
    }

    render() {

        let {list,deleteTask,toggleTask} = this.props;

        let totalCount = list.length;
        let doneCount = list.filter((item) => {return item.status}).length;

        // console.log(totalCount);

        let comps = list.map((item) => {
            return <TodoItem 
                toggleTask = {toggleTask}
                deleteTask = {deleteTask}
                item = {item} 
                key = {item.id} />;
        });
        return (
            <div className="list-container">
                <div className="title">
                    React TodoList
                </div>
                <div className="list">
                    {comps}
                </div>
                <div className="footer">
                    {/*footer组件*/}
                    <Footer doneCount={doneCount} totalCount={totalCount}/>
                </div>
            </div>
        );
    }
}