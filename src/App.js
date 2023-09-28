import './App.css';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <h1> Bismillah</h1>
      <Student name="Adil" age = {21} program="BSIT" />
      <Student name="Naveed" age = {24} program="BSSE" />
      <Student name="Wasim" age = {21} program="BSCS" />
      <Student name="Faizan" age = {25} program="BS" />
      <Student name="Noman" age = {23} program="BSIT" />
    </div>
  );
}

export default App;
