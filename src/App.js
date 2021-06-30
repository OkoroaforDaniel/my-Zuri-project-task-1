import image from './download (2).png'
import './App.css';


function App() {
  return (
    <div className="App">
     <h6 id="marginWork">
            MyIssues
        </h6>
        <h2 id="marginWork">
            Get Started
        </h2>
        <p id="marginWork">
            Let's get you all set up, so you can verify your personal account and begin setting up your account
        </p>
        <div id="marginWork" className="Google">
        <img src={image}/>
            <a id="Google" href="#" >Sign up with Google</a>
        </div>
        <div class="separator">or</div>
        <div className="form">
            <div className="input1">
            <input className="input" placeholder="Firstname" ></input>
            <input id="input" className="input" placeholder="Phone Number" ></input>
            <input className="input" placeholder="Password" ></input>
            </div>
            <div className="input2">
            <input id="input" className="input" placeholder="Lastname" ></input>
            <input className="input" placeholder="Email" ></input>
            <input id="input" className="input" placeholder="Confirm Password" ></input>
            </div>
            
        </div>
        <div id="marginWork">
        <input
          type="checkbox"
          value="ckeckBox"
          id="checkBox"
          defaultChecked={false}/>
            <label for="ckeckid">I agree to the terms of service and privacy policy</label>
        </div>

            <button id="marginWork" onClick="document.location='#'">Register</button>
            <p className="paragraph" id="marginWork">
                Already have an account?
                <a href="https://www.google.com/">Login</a>
            </p>
    </div>
  );
}

export default App;
