import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class CalcInputField extends React.Component {


    render() {

        return (
            <input className="input-field" type="text" placeholder="0"></input>
        );
    }
}


class CalcButtons extends React.Component {

    render() {
        return (
            <div className="square-buttons">
                <div className="square-button"><h3>*</h3></div>
                <div className="square-button"><h3>%</h3></div>
                <div className="square-button"><h3>+</h3></div>
                <div className="square-button"><h3>-</h3></div>
                <div className="square-button"><h3>1</h3></div>
                <div className="square-button"><h3>2</h3></div>
                <div className="square-button"><h3>3</h3></div>
                <div className="square-button"><h3>C</h3></div>
                <div className="square-button"><h3>4</h3></div>
                <div className="square-button"><h3>5</h3></div>
                <div className="square-button"><h3>6</h3></div>
                <div className="square-button"><h3>=</h3></div>
                <div className="square-button"><h3>7</h3></div>
                <div className="square-button"><h3>8</h3></div>
                <div className="square-button"><h3>9</h3></div>
                <div className="square-button"><h3>0</h3></div>
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