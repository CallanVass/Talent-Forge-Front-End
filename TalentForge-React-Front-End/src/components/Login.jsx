import React, { useState, createContext, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import '../assets/css/Login.css'
import HomePage from './HomePage' // Import the 'HomePage' component
import { AuthContext, AuthProvider } from "../authentication/AuthContext"



const Login = () => {

    const [username, setUsername] = useState("") // Note: username is an email
    const [password, setPassword] = useState("")
    const [userNotFound, setUserNotFound] = useState('no')
    const { login } = useContext(AuthContext)
    const nav = useNavigate()


    // Get username and password from form
    async function checkCredentials(e) {
      // IncorrectCredentials(false)
        const loginCredentials = {
            email: username,
            password: password
        }

        if (username && password) {
            e.preventDefault();

            let res;
            try {
              res = await fetch('http://localhost:8002/login/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginCredentials)
            })

                } catch (error) {
                  console.error('Failed to connect to port 8003, trying alternative port...', error);
                  res = await fetch('http://172.31.190.165:8003/login/', {
                  method: 'POST',
                  headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginCredentials)
              });
            }

            const response = await res.json() // This is token or server response
            // If token is present in the response, redirect to homepage
            if (response.token) {
            // This function needs to set the logged in user in the UserContext
                // Store the token in sessionStorage (AuthContext manages this)
                login(response.token)
                // Redirect to homepage
                nav('/home')
            } else {
                // Display message on login screen 'email or password is incorrect'
                // Set username and password fields to blank
                console.log(userNotFound)
                console.log(username)
                const stringLength = username.length + password.length
                setUserNotFound('yes')
                // "Incorrect username or password - please try again"
                IncorrectCredentials(stringLength)
                console.log({"Server response code": await res.statusCode})
            }

        } else {
            // Alert is shown if username or password is not entered
            e.preventDefault();
            setUserNotFound('yes')
            IncorrectCredentials()
        }
        // setUsername("")
        // setPassword("")

    }

    function IncorrectCredentials(stringLength=0) {
      console.log(userNotFound)
      console.log(username)
      console.log(stringLength)
      if (userNotFound === 'yes') {
        if (stringLength > 0) {
          return <p className="text-red-600 text-base">Incorrect username or password <br/>- please try again</p>

        } else {
          return <p className="text-red-600 text-base">Please enter your email and password</p>
        }
      } else {
        null
        }
    }


    return (
        <>
          <div className="flex-col text-center">
            <img
              className="m-2 inline"
              src="src/assets/logos/talent_forge_logo.jpg"
              alt="talent forge logo"
              width="200"
              height="200"
            />
            <form onSubmit={checkCredentials} onChange={() => setUserNotFound('no')}>
              <span className="block m-3">
                <label htmlFor="username" className="">Username: </label>
                <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </span>
              <span className="block m-5">
                <label htmlFor="password" className="m-1">Password: </label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </span>
              <button
                type="submit"
                title="login-btn"
                className="bg-grey hover:bg-dark-blue text-dark-blue font-semibold hover:text-white m-2 py-1 px-5 border border-blue-500 hover:border-transparent rounded"
              >
                Login
              </button>
            </form>

            <div className="pt-2 pb-4 h-12 ">
            <IncorrectCredentials />
            </div>

            <div className="py-6">
                <p>Not registered? Contact your HR<br/>department to be set up</p>

            </div>

          </div>
        </>

      );
    };

export default Login;
