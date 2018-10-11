import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CalcBoard extends React.Component {

    constructor() {

        super();

        this.state = {
            calculations: ''
        };

        this.addValueToInput = this.addValueToInput.bind(this);

    }


    addValueToInput(event) {

        // console.log(event.target.textContent)

        // adding number to a field
        // document.querySelector('.input-field').value += event.target.textContent;

        let currentInputValue = document.querySelector('.input-field').value += event.target.textContent;
        // let tempValueOne = 0;
        // let tempValueTwo = 0;
        // let tempString = '';


        console.log(currentInputValue)

        this.setState({
            calculations: parseInt(currentInputValue)
        });
    }

    render(){

        return (
            <div className="calculator-board">

                <input className="input-field" type="text" value={this.state.calculations} placeholder="0"></input>
                <div className="square-button operations"><h3>*</h3></div>
                <div className="square-button operations"><h3>%</h3></div>
                <div className="square-button operations"><h3>+</h3></div>
                <div className="square-button operations"><h3>-</h3></div>
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
                <div className="square-button operations"><h3>C</h3></div>
                <div className="square-button operations"><h3>=</h3></div>
         
            </div>
        )
    }
}


// rendering whole thing to a page
ReactDOM.render(<CalcBoard />, document.getElementById('root'));