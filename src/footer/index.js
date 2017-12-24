import React, {Component} from 'react';

export default class Footer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {doneCount, totalCount} = this.props;
        return (
            <div className="footer-container">
                <span className="footer"> 
                    {doneCount}已完成/{totalCount}总数
                </span>
            </div>
        );
    }
}