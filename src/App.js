import './index.css';
import Employee from './components/employee';
import AddEmployee from './components/addEmployee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import profile1 from '../src/images/pexels-rdne-8124211.jpg';
import profile2 from '../src/images/pexels-kampus-8353841.jpg';
import profile3 from '../src/images/pexels-barbara-olsen-7870077.jpg'

function App() {

  const [employees, setEmployees] = useState(
    [{
      id: 1,
      name: 'Ezekiel Mhando',
      role: 'Developer',
      image: profile1
    },
    {
      id: 2,
      name: 'Praygod Mhando',
      role: 'Admin',
      image: profile2
    },
    {
      id: 3,
      name: 'Ahadi Mhando',
      role: 'Author',
      image: profile3
    },
    {
      id: 4,
      name: 'Eliesa Mhando',
      role: 'Data Officer',
      image: profile1
    },
    {
      id: 5,
      name: 'Neema Mhando',
      role: 'PR',
      image: profile2
    },
    {
      id: 6,
      name: 'Christina Kirua',
      role: 'Manager',
      image: profile3
    }]
  );
  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id){
        //return new employee
        return {...employee, name: newName, role: newRole};
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img){
   const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  };

  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? 
      <>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          console.log(employee);
          return (
            <Employee 
            key={employee.id}
            id={employee.id} 
            name={employee.name} 
            role={employee.role} 
            image={employee.image} 
            updateEmployee = {updateEmployee}/>
          );
          
        })}
      </div>
      <AddEmployee newEmployee={newEmployee} />
      </>
    : 
    <p>You cannot see the employee</p>
    }
    </div>
  );
}

export default App;