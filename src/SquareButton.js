import React from 'react';

import './index.css';

class SquareButton extends React.Component {


    sendValueToState() {

        this.setState({
            firstValue: this.state.firstValue += this.props.symbol
        })
    }

    render(props) {
        return (
            <div className="square-button">
            <h3 onClick={this.sendValueToState}>{this.props.symbol}</h3>
            </div>
        );
    }
}

export default SquareButton;