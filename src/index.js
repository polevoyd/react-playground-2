import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SquareButton from './SquareButton';


class CalcInputField extends React.Component {


    render() {

        return (
            <input className="input-field" type="text" placeholder="0"></input>
        );
    }
}


class CalcButtons extends React.Component {

    render() {
        const buttonsArray = ['*', '%', '+', '-', '1', '2', '3', 'C', '4', '5', '6', '=', '7', '8', '9','0'];

        return (
            <div className="square-buttons">
               {buttonsArray.map( elm => <SquareButton symbol={elm} />).join('')}
            </div>
        );
    }
}


class CalcBoard extends React.Component {


    


    render(){

        return (
            <div className="calculator-board">
                <CalcInputField />
                <CalcButtons />
            </div>
        )
    }
}


// rendering whole thing to a page
ReactDOM.render(<CalcBoard />, document.getElementById('root'));