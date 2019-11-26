import React, {Component} from 'react';
import Quotes from './components/quotes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * 27)
    }
    this.changeState = this.changeState.bind(this);
  }



changeState() {
  let randomNumber = Math.floor(Math.random() * 27);
  this.setState(
    {
      number: randomNumber
    }
  )


} 



render() {

  return (
    <div className="App container-fluid bg-info" >
      <div className="d-flex align-items-center" style={{height: '100vh', marginLeft: '-15px', marginRight: '-15px', backgroundColor: '#FB9902' }}>
        <div id="quote-box" className="mx-auto text-center bg-light" style={{width: '600px', height: '200px', minWidth: '400px', borderRadius: '5px'}}>
          <div style={{height: '80px'}}>
            <Quotes passNumber={this.state.number}/>
          </div>
          <br/>
          <div style={{height: '100px'}}>
            <button id="new-quote" className="btn p-1"  onClick={this.changeState}>New quote</button>
            <br/>
            <br/>
            <a  id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><i  className="fab fa-twitter-square fa-2x"></i><span> Tweet this quote</span></a>
          </div> 
        </div>
      </div>
     </div>
    
  );
}

}


export default App;

