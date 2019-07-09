import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import './css_login/login.css'
import FetchData from '../../controllers/fetchdata';
import Auth from '../../controllers/auth';
class Main extends Component {
    constructor() {
        super();
        this.state = {
            notifyRegister: "",
            first_name: '',
            last_name: '',
            email: '',
            gender: 'Nam',
            birthday: '',
            password: '',
            idCode: '',
            logined: false,
            idcodeConfirm: false,
            confirmCodeFormServer: ''
        }
        this.fetchData = new FetchData();
        this.Auth = new Auth();
    }
    componentDidMount() {
        $('#btnGetCode').hide();
        $('#notifyClick').hide();
    }
    handleOnChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmitFormSignUp(e) {
        e.preventDefault();
        if (this.state.confirmCodeFormServer !== '' && this.state.confirmCodeFormServer === Number(this.state.idCode)) {
            this.fetchData.postWithoutAuth(`${this.Auth.apiHome}register`, {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                gender: this.state.gender,
                birthday: this.state.birthday,
                password: this.state.password
            })
                .then(res => {
                    if (res.status === 200) {
                        this.Auth.login(this.state.email, this.state.password)
                            .then(res => {
                                if (res.status === 200) {
                                    this.setState({
                                        logined: true
                                    })
                                } else {
                                    this.setState({
                                        logined: false
                                    })
                                }
                            })
                    } else {
                        this.setState({
                            notifyRegister: res.msg
                        })
                    }
                })
                .catch(err => {
                    this.setState({
                        notifyRegister: err
                    })
                    console.log(err)
                })
        } else {
            this.setState({
                notifyRegister: 'Mã xác nhận không đúng'
            })
        }

    }
    validateEmail = (email) => {
        var check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return check.test(email);
    }
    handleOnBlur(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
        if (this.validateEmail($('#exampleInputEmail2').val())) {
            $('#btnGetCode').show();
            $('#notifyClick').hide();
        } else {
            $('#btnGetCode').hide();
        }
    }
    handleBtnGetCodeClick() {
        $('#btnGetCode').hide();
        $('#notifyClick').show();
        this.fetchData.postWithoutAuth(`${this.Auth.apiUser}confirmEmail`, {
            email: this.state.email
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        confirmCodeFormServer: Number(res.data)
                    })
                }
            })
    }
    redirectHome = () => {
        if (this.state.logined) {
            return <Redirect to='/home' />
        }
    }
    render() {
        return (
            <div className="container main" style={{ background: '#dfdfdf' }}>
                {this.redirectHome()}
                <div className="row">
                    <div className="col-md-6 left">
                        <div className="title">Recent logins</div>
                        <div className="action">Click your picture or add an account.</div>
                        <img src='https://lorempixel.com/800/400/food/1' width='350px' />
                    </div>
                    <div className="col-md-5 right">
                        <div className="title">Create a new account</div>
                        <div className="action">It's free and always will be.</div>
                        <p style={{ color: 'red', fontSize: '15px' }}>{this.state.notifyRegister}</p>
                        <form className="rounded mx-auto d-block form-signup" onSubmit={this.onSubmitFormSignUp.bind(this)}>
                            <table cellPadding="5" >
                                <tbody>
                                    <tr>
                                        <td ><input className="input-signup" onChange={this.handleOnChange} type="text" value={this.state.first_name} name='first_name' placeholder="First Name" required autoComplete='off'></input></td>
                                        <td ><input className="input-signup" onChange={this.handleOnChange} type="text" value={this.state.last_name} name='last_name' placeholder="Last Name" required autoComplete='off'></input></td>
                                    </tr>
                                    <tr >
                                        <td colSpan="2"><input className="input-signup" onChange={this.handleOnBlur.bind(this)} value={this.state.email} type="email" id="exampleInputEmail2" name='email' placeholder="Email" required autoComplete='off' /></td>
                                    </tr>
                                    <tr className="getCode" >
                                        <td>
                                            <input className="input-signup" type='number' name='idCode' onChange={this.handleOnChange} id="exampleInputEmail3" placeholder="Enter IdCode" required autoComplete='off' />
                                        </td>
                                        <td><span id="notifyClick" style={{ color: 'green', fontSize: '13px' }}>You can check IdCode at your Email</span> <button type="button" id="btnGetCode" onClick={this.handleBtnGetCodeClick.bind(this)} className="btn-getcode">Get Code</button></td>

                                    </tr>
                                    <tr>
                                        <td colSpan="2"><input className="input-signup" onChange={this.handleOnChange} name="password" value={this.state.password} type="password" id="exampleInputPassword2" placeholder="Password" required autoComplete='off' /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>Birthday</div>
                                            <input type="date" format='DD/MM/YYYY' name='birthday' onChange={this.handleOnChange} value={this.state.birthday}></input>
                                        </td>
                                        <td>
                                            <div>Sex</div>
                                            <select name='gender' onChange={this.handleOnChange} value={this.state.gender}>
                                                <option value='Nam'>Male</option>
                                                <option value="Nữ">Female</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <button type="submit" className="btn-signup">Sign Up</button> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;
