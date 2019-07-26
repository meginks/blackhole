import React from 'react';
import axios from 'axios';
import '../../App.css';

URL = 'https://build-week-blackhole.herokuapp.com/api';

class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value});
    }

    signUp = e => {
        e.preventDefault();

        //axios.post, passing an object with username and password = this.states
        axios
        .post(`${URL}/register `, {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log("Response: ", response);
            this.props.history.push("/login");
            
        })
        .catch(err => {
            console.log("ERR", err);
        })

    this.setState({
        username: '',
        password: ''
    })
}
render() {
    return (
        <div className = 'logReg'>
            <h1> Register With BlackHole </h1>
            <form id = "logReg" onSubmit = {this.signUp} >
           
                <input
                    placeholder="Username"
                    type="text"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleChange}
                />
         
                <input
                    placeholder="Password"
                    type="text"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleChange}
                />
                
                <button onClick={this.signUp}> Create Account </button>
            </form>
        </div>
    );
}
}

export default Registration;