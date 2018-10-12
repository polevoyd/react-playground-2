import React from 'react';

import './index.css';

class SquareButton extends React.Component {

    render(props) {

        return (
            <div className="square-button">
            <h3 onClick={this.props.onClick}>{this.props.symbol}</h3>
            </div>
        );
    }
}

export default SquareButton;