import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SquareButton from './SquareButton';


class CalcButtons extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tempValue: 0,
            tempOperation: '',
            currentValue: ''
        };
    }

    changeColors() {

        // --color1: rgba(140, 179, 105, 1);
        // --color2: rgba(244, 226, 133, 1);
        // --color3: rgba(244, 162, 89, 1);
        // --color4: rgba(91, 142, 125, 1);
        // --color5: rgba(188, 75, 81, 1);

        let arrayOfRandomColors = Array.new(10);
        arrayOfRandomColors.map(element => {
            return 
        })
    }

    clickHandler(button) {

        const operations_ = ['*', '%', '-', '+'];
        const numbers_ = ['1','2','3','4','5','6','7','8','9','0'];
        const tempSymbol = button.target.textContent;

        if (operations_.includes(tempSymbol)) {
            
            this.setState({
                tempValue: this.state.currentValue,
                tempOperation: tempSymbol,
                currentValue: ''
            });

        } else if (numbers_.includes(tempSymbol)) {

            if ((tempSymbol === '0') && (this.state.currentValue === '0')) {

                this.setState({
                    currentValue: tempSymbol
                })
            } else if ((tempSymbol !== '0') && (this.state.currentValue === '0')){

                this.setState({
                    currentValue: tempSymbol
                })
            } else {
                if ((this.state.currentValue.length < 7)) {

                    this.setState({
                        currentValue: this.state.currentValue + tempSymbol
                    });
                }
            }
            
        } else if (tempSymbol === '='){

            if ((this.state.currentValue) && (this.state.tempValue) && (this.state.tempOperation)) {

                let result;
                switch (this.state.tempOperation) {

                    case '+':
                    result = parseInt(this.state.tempValue) + parseInt(this.state.currentValue);
                    break;

                    case '-':
                    result = parseInt(this.state.tempValue) - parseInt(this.state.currentValue);
                    break;

                    case '*':
                    result = parseInt(this.state.tempValue) * parseInt(this.state.currentValue);
                    break;

                    case '%':
                    result = parseInt(this.state.tempValue) / parseInt(this.state.currentValue);
                    break;
                    
                    default:
                    break;
                }

                result = (result.toString().length > 7) ? result.toString().substr(0, 7) : result.toString();
                this.setState({
                    currentValue: result,
                    tempOperation: '',
                    tempValue: result
                });
            }
        } else {

            this.setState({
                currentValue: ''      
            });
        }
    }

    render() {
        const buttonsArray = ['*', '%', '+', '-', '1', '2', '3', 'C', '4', '5', '6', '=', '7', '8', '9','0'];
        return (
            <div className="calculator-board">
                <div className="input-field">{this.state.currentValue}</div>
                <div className="square-buttons"> 
                {buttonsArray.map( (element, index) => (<SquareButton onClick={e => this.clickHandler(e)} symbol={element} key={'button_' + index} />))}
                </div>
            </div>
        );
    }
}

// rendering whole thing to a page
ReactDOM.render(<CalcButtons />, document.getElementById('root'));