import React from 'react';

import './index.css';

class SquareButton extends React.Component {


    sendValueToState(button, props) {

        const operations_ = ['*', '%', '-', '+'];
        const numbers_ = ['1','2','3','4','5','6','7','8','9','0'];

        const tempSymbol = button.target.textContent;

        if (operations_.includes(tempSymbol)) {
            
            console.log(tempSymbol);

        } else if (numbers_.includes(tempSymbol)) {

            console.log(button);
            // if numbers - then write value into a input field and add it to a current value
    

        
        } else if (tempSymbol === '='){

            console.log(tempSymbol);

        } else {

            console.log(tempSymbol);

        }
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