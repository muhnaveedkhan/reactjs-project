import './App.css';
import StudentB from './components/StudentB';

function App() {
  return (
    <div className="App">
      <h1> Bismillah</h1>
      <StudentB name="Adil" age = {23} program="BSIT" />
      <StudentB name="Tahir" age = {23} program="BSCS" />
     
    </div>
  );
}

export default App;

