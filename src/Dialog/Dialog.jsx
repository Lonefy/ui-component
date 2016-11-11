/*
 * author: Fuyu@lonefy
 * create time: 2016-11-10
 */ 
import React    from 'react';
import ReactDom from 'react-dom';

import Mask from '../common/Mask.jsx';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {

        // }
    }

    // componentDidMount() {
    // }

    // componentDidUpdate() {
    // }

    // componentWillUnmount() {
    // }

    render() {
        return (
            <div ref="dialog-wrapper"
                className="dialog-wrapper"
                style={{ display: this.props.show ? "initial" : 'none' }}
                >
                <Mask></Mask>
                <div ref='content'
                    className="dialog-content"
                    >
                    <div className='title'>{this.props.title}</div>
                    <div className='content'>
                        {
                            React.Children.map(this.props.children, (item, index) => {
                                return item;
                            })
                        }
                    </div>
                    <div className='actions'>
                        {
                            this.props.actions.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;
