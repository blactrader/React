import './index.css';
import Employee from './components/employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import profile1 from '../src/images/pexels-rdne-8124211.jpg';
import profile2 from '../src/images/pexels-kampus-8353841.jpg';
import profile3 from '../src/images/pexels-barbara-olsen-7870077.jpg'

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployee] = useState(
    [{
      name: 'Ezekiel Mhando',
      role: 'Developer',
      image: profile1
    },
    {
      name: 'Praygod Mhando',
      role: 'Admin',
      image: profile2
    },
    {
      name: 'Ahadi Mhando',
      role: 'Author',
      image: profile3
    },
    {
      name: 'Eliesa Mhando',
      role: 'Data Officer',
      image: profile1
    },
    {
      name: 'Neema Mhando',
      role: 'PR',
      image: profile2
    },
    {
      name: 'Christina Kirua',
      role: 'Manager',
      image: profile3
    }]
  );
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? 
      <>
      <input type="text" onChange={(i) => {
        console.log(i.target.value)
        setRole(i.target.value);
      }}/>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          console.log(employee);
          return (
            <Employee key={uuidv4() } name={employee.name} role={employee.role} image={employee.image} />
          );
          
        })}
      </div>
      </>
    : 
    <p>You cannot see the employee</p>
    }
    </div>
  );
}

export default App;