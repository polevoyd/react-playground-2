import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SquareButton from './SquareButton';
import InputField from './InputField';


// Component that renders squared buttons 
class CalcButtons extends React.Component {
    render() {
        const buttonsArray = ['*', '%', '+', '-', '1', '2', '3', 'C', '4', '5', '6', '=', '7', '8', '9','0'];
        return buttonsArray.map( (element, index) => (<SquareButton symbol={element} key={'button_' + element} />));
    }
}

// Final rendering of calculator
class CalcBoard extends React.Component {
    render(){
        return (
            <div className="calculator-board">
                <InputField />
                <div className="square-buttons"> 
                    <CalcButtons />
                </div>
            </div>
        )
    }
}


// rendering whole thing to a page
ReactDOM.render(<CalcBoard />, document.getElementById('root'));