import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Increment from './components/increment';
import Decrement from './components/decrement';
import Display from './components/display_count';
import AutoDecrement from './components/auto_decrement';
import AutoIncrement from './components/auto_increment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }


    render() {
        return (
            <div >
                   <div className="change">
                       <Display count={this.state.count}/></div>

                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3">
                <AutoIncrement setIncrementInterval={() => {
                   let y= setInterval(() => {
                        if (this.state.count === 100) {
                            clearInterval(y);
                            alert("can't go beyond 100");
                        }
                        else {
                            this.setState({count: this.state.count + 1})
                        }
                    }, 1000);
                }}/></div>
                        <div className="col-md-3 col-sm-3 col-xs-3">
                <Increment  onIncrement={() => {
                    if (this.state.count === 100) {
                        alert("can't go beyond 100");
                    }
                    else {
                        this.setState({count: this.state.count + 1})
                    }
                }}/></div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                <Decrement  onDecrement={() => {
                    if (this.state.count === 0) {
                        alert("can't go beyond 0");

                    } else {
                        this.setState({count: this.state.count - 1})
                    }
                }}/></div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                <AutoDecrement  setDecrementInterval={() => {
                    let x=setInterval(() => {
                        if (this.state.count === 0) {
                            clearInterval(x);
                            alert("can't go beyond 0");
                        }
                        else {
                            this.setState({count: this.state.count - 1})
                        }
                    }, 1000);
                }}/>
                    </div></div></div>
                    )
                    }
                }


                ReactDOM.render(<App/>, document.querySelector(".container"));

