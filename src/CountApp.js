import React from 'react';
import './App.css';

class CountApp extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    plus(){
        this.setState({count: this.state.count +1});
    }
    minus(){
        this.setState({count: this.state.count -1});
    }
    render(){
        return (
            <div>
                <h1> ITSS カウンターアプリ</h1>
                <p>{this.state.count}</p>
                <div>
                    <button onClick={()=>this.plus()}>足す</button>
                    <button onClick={()=>this.minus()}>引く</button>
                </div>
            </div>
        );
    }
}
export default CountApp;