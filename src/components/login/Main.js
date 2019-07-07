import React, { Component } from 'react';
import $ from 'jquery';
import './css_login/login.css'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            notifyGetCode: ""
        }
    }
    componentDidMount() {
        $('#btnGetCode').hide();
        $('#notifyClick').hide();
    }
    onSubmitFormSignUp(e) {
        e.preventDefault();
        console.log('click r');
        // fetchAPI o day
    }
    handleOnBlur() {
        if ($('#exampleInputEmail2').val() !== '') {
            $('#btnGetCode').show();
            $('#notifyClick').hide();
        } else {
            $('#btnGetCode').hide();
        }
    }
    handleBtnGetCodeClick() {
        $('#btnGetCode').hide();
        $('#notifyClick').show();
    }
    render() {
        return (
            <div className="container main" style={{background:'#dfdfdf'}}>
                <div className="row">
                    <div className="col-md-6 left">
                        <div className="title">Recent logins</div>
                        <div className="action">Click your picture or add an account.</div>
                        <img src='https://lorempixel.com/800/400/food/1' width='350px' />
                    </div>
                    <div className="col-md-5 right">
                        <div className="title">Create a new account</div>
                        <div className="action">It's free and always will be.</div>
                        <form className="rounded mx-auto d-block form-signup" onSubmit={this.onSubmitFormSignUp.bind(this)}>
                            <table cellPadding="5" >
                                <tbody>
                                    <tr>
                                        <td ><input className="input-signup" type="text" placeholder="First Name" required autoComplete='off'></input></td>
                                        <td ><input className="input-signup" type="text" placeholder="Last Name" required autoComplete='off'></input></td>
                                    </tr>
                                    <tr >
                                        <td colSpan="2"><input className="input-signup" type="email" id="exampleInputEmail2" placeholder="Email" onChange={this.handleOnBlur.bind(this)} required autoComplete='off' /></td>
                                    </tr>
                                    <tr className="getCode" >
                                        <td>
                                            <input className="input-signup" type="number" id="exampleInputEmail3" placeholder="Enter IdCode" required autoComplete='off' />
                                        </td>
                                        <td><span id="notifyClick" style={{ color: 'green', fontSize: '13px' }}>You can check IdCode at your Email</span> <button type="button" id="btnGetCode" onClick={this.handleBtnGetCodeClick.bind(this)} className="btn-getcode">Get Code</button></td>

                                    </tr>
                                    <tr>
                                        <td className="mess" colSpan="2"></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><input className="input-signup" type="password" id="exampleInputPassword2" placeholder="Password" required autoComplete='off' /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>Birthday</div>
                                            <input type="date"></input>
                                        </td>
                                        <td>
                                            <div>Sex</div>
                                            <select>
                                                <option>Male</option>
                                                <option>Feale</option>
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
