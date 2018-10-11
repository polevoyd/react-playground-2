import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class SquareButton extends React.Component {

    render(props) {
        return (
            <div className="square-button">
            <h3>{props.symbol}</h3>
            </div>
        );
    }
}

export default SquareButton;