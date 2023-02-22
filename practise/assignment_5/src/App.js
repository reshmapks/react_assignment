
import './App.css';
import ParentComponent from './components/functionComponent/ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <div id="formContainer">
      <label>First Name</label>
            <input type="text" name="fname" placeholder="First Name" required  /><br/><br/>
            <label>Last Name</label>
            <input type="text" name="lname" placeholder="Last Name" required/><br/><br/>
            <label>Age</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="number" placeholder="Age" name="age" required/><br/><br/>
            <label>Address</label>&nbsp;&nbsp;&nbsp;
            <textarea cols="30" rows="5" placeholder="Address" required></textarea><br/><br/>
            
           
            <ParentComponent />
            </div>
    </div>
  );
}

export default App;
