import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CalcBoard extends React.Component {

    constructor() {

        super();

        this.state = {
            currentValue: '',
            firstValue: 0,
            secondValue: 0,
            operation: ''
        };

        this.addValueToInput = this.addValueToInput.bind(this);

    }


    addValueToInput(event) {

        // adding number to a field
        let currentInputValue = document.querySelector('.input-field').value += event.target.textContent;
 
        // setting currentValue in state to input field 
        this.setState({
            currentValue: parseInt(currentInputValue)
        });
    }

    doOperation(event)
    {

        // save input value to a firstValue
        // and clean current value
        this.setState({
            firstValue: this.state.firstValue + parseInt(this.state.currentValue),
            currentValue: ''
        })
        
        switch (event.target.textContent) {
            case '*':
                // clean currentValue
                // save operation
                break;
            case '%':
                
                break;
            case '+':
                
                break;
            case '-':
                
                break;
            case '=':
                
                break;
            case 'C':
                
                break;
        
            default:
                break;
        }

    }



    render(){

        return (
            <div className="calculator-board">

                <input className="input-field" type="text" value={this.state.calculations} placeholder="0"></input>
                <div className="square-button" onClick={this.doOperation}><h3>*</h3></div>
                <div className="square-button" onClick={this.doOperation}><h3>%</h3></div>
                <div className="square-button" onClick={this.doOperation}><h3>+</h3></div>
                <div className="square-button" onClick={this.doOperation}><h3>-</h3></div>
                <div className="square-button" onClick={this.addValueToInput}><h3>1</h3></div>
                <div className="square-button" onClick={this.addValueToInput}><h3>2</h3></div>
                <div className="square-button" onClick={this.addValueToInput}><h3>3</h3></div>
                <div className="square-button" onClick={this.addValueToInput}><h3>4</h3></div>
                <div className="square-button" onClick={this.addValueToInput}><h3>5</h3></div>
                <div className="square-button" onClick={this.addValueToInput}><h3>6</h3></div>
                <div className="square-button" onClick={this.addValueToInput}><h3>7</h3></div>
                <div className="square-button" onClick={this.addValueToInput}><h3>8</h3></div>
                <div className="square-button" onClick={this.addValueToInput}><h3>9</h3></div>
                <div className="square-button" onClick={this.addValueToInput}><h3>0</h3></div>
                <div className="square-button" onClick={this.clearInputField}><h3>C</h3></div>
                <div className="square-button" onClick={this.showResult}><h3>=</h3></div>
         
            </div>
        )
    }
}


// rendering whole thing to a page
ReactDOM.render(<CalcBoard />, document.getElementById('root'));