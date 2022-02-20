import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header title='Jono'/>
        <Header title='Hello Jono' color='red'/>
      </header>
     
    </div>
  );
}

export default App;
