import React from 'react';

import './index.css';

class SquareButton extends React.Component {

    
    
    

    sendValueToState() {

        const operations_ = ['*', '%', '-', '+'];
        const numbers_ = ['1','2','3','4','5','6','7','8','9','0'];

        if (operations_.includes(this.props.symbol)) {
            
            console.log('this is a operation!');

        } else if (numbers_.includes(this.props.symbol)) {

            console.log('this is a number!');
        
        } else {

            console.log('this might be equal sign!');
        }


        this.setState({
            currentValue: this.state.currentValue += this.props.symbol
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