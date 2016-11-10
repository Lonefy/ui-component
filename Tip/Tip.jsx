import './layer.style.scss';
import React            from 'react';
import { withRouter }         from 'react-router';

// class LayerTip extends React.Component {

const LayerTip = withRouter(
    React.createClass({

        getInitialState() {
            return {
                show: false,
            };
        },

        getDefaultProps() {
            return {
                msg: '系统繁忙',
                type: 'warn',
                autoHide: 1500
            };
        },

        componentWillReceiveProps(nextProps, nextState) {
            if (!nextProps.msg) return;

            this.setState({
                show: true
            })
        },

        // componentWillMount() {
        // },

        clickLayer(e) {
            e.preventDefault();
            this.setState({
                show: false
            })
        },

        componentDidUpdate() {

            let { show} = this.state,
                { autoHide } = this.props;

            (show && autoHide) && setTimeout(() => {
                this.setState({
                    show: false
                })
            }, autoHide)
        },

        render() {
            let {msg, type} = this.props


            return (
                <div ref="layer_tip"
                    className="layer_tip"
                    style={{ display: this.state.show ? "initial" : 'none' }}
                    onClick={(e) => this.clickLayer(e) }
                    >
                    <div className='mask transparent'></div>
                    <div className="tip">
                        <div className={'icon_tip_' + type}></div>
                        <div className='tip_msg'>{msg}</div>
                    </div>
                </div>
            );
        }

    })
)
export default LayerTip;
