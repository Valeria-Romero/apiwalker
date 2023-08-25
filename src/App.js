import { Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <Form></Form>
      <Routes>
        <Route path="/people/:id" element={<People></People>}></Route>
        <Route path="/planets/:id" element={<Planets></Planets>}></Route>
      </Routes>
    </div>
  );
}

export default App;
