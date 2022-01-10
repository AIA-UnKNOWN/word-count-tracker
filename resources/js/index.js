import ReactDOM from 'react-dom';
import App from './App';


Number.prototype.leftPad = function(size) {
  let numberString = ""+this;
  for (let i = 0; i < size; i++) {
    numberString = "0" + numberString;
  }
  return numberString;
}

ReactDOM.render(<App />, document.getElementById('root'));