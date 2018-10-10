import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CalcBoard extends React.Component {



    render(){

        return (
            <div className="calculator-board">
                <div className="square-button">*</div>
                <div className="square-button">%</div>
                <div className="square-button">+</div>
                <div className="square-button">-</div>
                <div className="square-button">1</div>
                <div className="square-button">2</div>
                <div className="square-button">3</div>
                <div className="square-button">4</div>
                <div className="square-button">5</div>
                <div className="square-button">6</div>
                <div className="square-button">7</div>
                <div className="square-button">8</div>
                <div className="square-button">9</div>
                <div className="square-button">0</div>
                <div className="square-button">C</div>
                <div className="square-button">=</div>
         
            </div>
        )
    }
}


// rendering whole thing to a page
ReactDOM.render(<CalcBoard />, document.getElementById('root'));