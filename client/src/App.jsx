
function App() {

  return (
    <>
    <h1>Task 1</h1>
    <h2>Well I am just layering the basic things to be done here.</h2>
    <br></br>
    <h2><u>Login</u></h2>
    <div className="Login">
    <p><input type="checkbox"/> Username can be "mobile number" or "email-id"</p>
    <p><input type="checkbox"/> Password should be in the form of OTP if entering "mobile number" & "Password" if email-id is the Username format</p>
    <p><input type="checkbox"/> Forget Password option should be there</p>
    <p><input type="checkbox"/> Remember me option should be there</p>
    <p><input type="checkbox"/> Sign up option should be there</p>
    </div>
    <br></br>
    <h2><u>Sign up</u></h2>
    <div className="Sign Up">
      <p><input type="checkbox"/>Username can be "mobile number" or "email-id"</p>
      <p><input type="checkbox"/>Password should be in the form of OTP if entering "mobile number" & "Password" if email-id is the Username format</p>
      <p><input type="checkbox"/>Re-enter Password</p>
      <p><input type="checkbox"/>Mobile number</p>
      <p><input type="checkbox"/>Email-id</p>
      <p><input type="checkbox"/>Address</p>
    </div>
    <br></br>
    <h2><u>HomePage</u></h2>
     <div className="Taskbar">
      <p><input type="checkbox"/>We need a home,about_us,services,tracking,contact-us,feedback buttons on top_left</p>
      <p><input type="checkbox"/>We need a login,signup buttons on top_right</p>
     </div>
     <br></br>
     <br></br>
     <div className="Website home">
      <p><input type="checkbox"/>Who we are? (an intro connected to about_us)</p>
      <p><input type="checkbox"/>Show casing different services & Types</p>
      <p><input type="checkbox"/>Some testimonials</p>
      <p><input type="checkbox"/>How can we help you? (a connection to contact-us)</p>
     </div>
    </>
  )
}

export default App
