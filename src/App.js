import './App.css';
import Employee from './components/employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? 
      <>
      <input type="text" onChange={(i) => {
        console.log(i.target.value)
        setRole(i.target.value);
      }}/>
      <Employee name="Caleb" role="Intern"/>
      <Employee name="Abby" role={role}/>
      <Employee name="John"/>
      </>
    : 
    <p>You cannot see the employee</p>
    }
    </div>
  );
}

export default App;