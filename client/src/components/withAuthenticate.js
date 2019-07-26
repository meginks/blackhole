import React from 'react'; 

const Authenticate = App => Login =>
class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {username: '', password: ''},
            message: "",
            loggedIn: false
        };
    }

    componentDidMount(){
        if(localStorage.getItem("token")){
            this.setState({loggedIn: true});
        }
    }
    render() {
        if (this.state.loggedIn) {
          return <App loggedIn={this.state.loggedIn} />;
        } else {
          return (
            <Login
              handleChanges={this.state.handleChanges}
              signIn={this.state.signIn}
              username={this.state.username}
              password={this.state.password}
            />
          );
        }
      }

    }

    export default Authenticate;