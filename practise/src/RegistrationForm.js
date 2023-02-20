import './registration.css'
function RegistrationForm() {
  
    return (
        <div id="formContainer">
              <form id="form"  >
                <fieldset>
                  <h1>Registration Form</h1>
                  <div id="fullName">
                    <input type="text" name="fName" id="fName" placeholder="First Name" required />
                    <input type="text" name="lName" id="lName" placeholder="Last Name" required />
                  </div>
                  <div id="otherInputs">
                    <input type="address" name="address" id="address" placeholder="Address" required />
                    <input type="tel" name="phone" id="phone" placeholder="Telephone Number" required />
                    <input type="email" name="email" id="email" placeholder="Email Address" required />
                  </div>
                  <br /><br />
                  <input type="submit" name="submit" id="submit" />
                </fieldset>
              </form>
            </div>
        
      )
    }
    
    export default RegistrationForm