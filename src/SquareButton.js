import React from 'react';

import './index.css';

class SquareButton extends React.Component {

    render(props) {

        return (
            <div className="square-button" onClick={this.props.onClick}>
            <h3>{this.props.symbol}</h3>
            </div>
        );
    }
}

export default SquareButton;