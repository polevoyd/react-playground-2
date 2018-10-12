import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SquareButton from './SquareButton';


// Component that renders squared buttons 
class CalcButtons extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstValue: '',
            currentValue: ''
        };
    }


    setValueToInputField() {

    }

    sendValueToState(button) {

        const operations_ = ['*', '%', '-', '+'];
        const numbers_ = ['1','2','3','4','5','6','7','8','9','0'];

        const tempSymbol = button.target.textContent;

        if (operations_.includes(tempSymbol)) {
            
            console.log(tempSymbol);

        } else if (numbers_.includes(tempSymbol)) {

            
            // if numbers - then write value into a input field and add it to a current value
            // console.log(this);

            this.setState({
                currentValue: this.state.currentValue + tempSymbol
            })

            
            console.log(this.state.currentValue)
        
        } else if (tempSymbol === '='){

            console.log(tempSymbol);

        } else {

            console.log(tempSymbol);

        }
    }

    render() {
        const buttonsArray = ['*', '%', '+', '-', '1', '2', '3', 'C', '4', '5', '6', '=', '7', '8', '9','0'];
        return (
            <div className="calculator-board">
                <input className="input-field" type="text" placeholder="0"></input>
                <div className="square-buttons"> 
                {buttonsArray.map( (element, index) => (<SquareButton onClick={e => this.sendValueToState(e)} symbol={element} key={'button_' + index} />))}
                </div>
            </div>
        );
    }
}



// rendering whole thing to a page
ReactDOM.render(<CalcButtons />, document.getElementById('root'));