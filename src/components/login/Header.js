import React, { Component } from 'react';
import { Redirect , Link} from 'react-router-dom';

import './css_login/login.css';
import Auth from '../../controllers/auth';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            notify: '',
            logined: false
        }
        this.Auth = new Auth();
    }
    onSubmitFormLogin(e) {
        e.preventDefault();
        let { email, password } = this.state;
        this.Auth.login(email, password)
            .then(res => {
                if (res) {
                    console.log(res);
                    if (res.status === 200) {
                        this.setState({
                            logined: true
                        })
                    } else {
                        alert(res.msg);
                    }
                }
            })
            .catch(err => {
                alert(err);
            })
        this.setState({
            email: '',
            password: ''
        })
    }
    handleChange(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }
    redirectHome = () => {
        if (this.state.logined) {
            return <Redirect to='/home' />
        }
    }
    render() {
        return (
            <div className="container-fluid top">
                {this.redirectHome()}
                <div className="row">
                    <h1 className="col-md-4 logo">fakebook</h1>
                    <form className="rounded mx-auto d-block form-login"
                        onSubmit={this.onSubmitFormLogin.bind(this)}>
                            {/* // neu anh pull ve trc thi se pussh len dc ban cuoi */}
                        <table>
                            <tbody>
                                <tr>
                                    <td className="input-login"><label htmlFor="exampleInputEmail1" >Email</label></td>
                                    <td className="input-login"><label htmlFor="exampleInputPassword1">Password</label></td>
                                </tr>
                                <tr>
                                    <td className='input-login'>
                                        <input type="email" name="email"
                                            onChange={this.handleChange.bind(this)}
                                            value={this.state.email}
                                            id="exampleInputEmail1"
                                            required autoComplete='off' />
                                    </td>
                                    <td className='input-login'>
                                        <input type="password" name="password"
                                            onChange={this.handleChange.bind(this)}
                                            value={this.state.password}
                                            id="exampleInputPassword1"
                                            required autoComplete='off' />

                                    </td>
                                    <td className='input-login'>
                                        <button type="submit" style={{ width: '80px' }} className="btn-login">Đăng nhập</button>

                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="input-login"><div ><Link to="/forget" className="forgot-login">Forgotten account?</Link></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}
export default Header;
