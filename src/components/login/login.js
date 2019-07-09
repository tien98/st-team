import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';
import Auth from '../../controllers/auth';
class Login extends Component {
    constructor(props){
        super(props);
        this.Auth = new Auth();
    }
    componentWillMount(){
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/home');
        } else {
            this.props.history.replace('/login');
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}
export default Login;
