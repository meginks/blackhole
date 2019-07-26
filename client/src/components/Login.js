import React from 'react';
import axios from 'axios';

URL = 'https://build-week-blackhole.herokuapp.com/api';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.State = {
                username: '',
                password: ''
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }
    
    loginSite = e => {
        e.preventDefault();
        axios.post(`${URL}/login`, this.state)
        .then(response => {
            console.log("Response",response.data);

            if (response.status === 200 && response.data) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user_id', response.data.user_id);
                this.props.history.push("/");
            } else {
                throw new Error('Incorrect Login Credentials');
            }
        })
        .catch(err => {
          console.log("Err", err);
            this.setState({
                
                    username: '',
                    password: ''
                
            })
            console.log("Catch Error", err);
        })         
    }

    

    render() {
        return (
          <div className='logReg'>
            <h1>Login Page</h1>
            <form id='logReg' onSubmit={this.loginSite}>
            
              <input
                type="text"
                id="username"
                name="username"
                value={this.username}
                onChange={this.handleChanges}
                placeholder = "Username"
              />
              <input
                type="password"
                id="password"
                name="password"
                value={this.password}
                onChange={this.handleChanges}
                placeholder = "Password"
              />
              <button type="submit">Submit</button>
            </form>
            {this.message
              ? (<h4>{this.message}</h4>)
              : undefined
            }
          </div>
        );
      }
}
 
export default Login;