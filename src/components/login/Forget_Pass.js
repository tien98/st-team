import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css_login/forget_pass.css';
import Header from './Header';
class Forget_Pass extends Component {
    constructor() {
        super();
        this.state = {
            displayFormForget: true,
            displayConfirm: true,
            tittle: 'Find Your Account'
        }
    }
    displayForget = () => {
        if (this.state.displayFormForget) {
            return (
                <div className="content_forget">
                    <div className="content_form">
                        <div className="tittle">{this.state.tittle}</div>
                        <hr />
                        <form>
                            <div className="content_input">
                                <div>Please enter your email address or phone number to search for your account.</div>
                                <div><input type="email" placeholder="Email" /></div>
                            </div>
                            <hr />
                            <div className="content_button">
                                <input type="button" value="Cancel" />
                                <input type="button" value="Search" onClick={this.displayConfirmID} />
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="content_forget">
                    <div className="content_form">
                        <div className="tittle">{this.state.tittle}</div>
                        <hr />
                        <form>
                            {this.displayNewPass()}
                        </form>
                    </div>
                </div>
            )
        }
    }
    displayConfirmID = () => {
        this.setState({
            displayFormForget: false,
            tittle: 'Confirm ID'
        })
    }
    changeNewPass = () => {
        this.setState({
            displayFormForget: false,
            displayConfirm: false,
            tittle: 'New Password'
        })
    }
    displayNewPass = () => {
        if (this.state.displayConfirm) {
            return (<div>
                <div className="content_input">
                    <div>Please enter your ID form your email</div>
                    <div><input type="number" placeholder="Your ID" /></div>
                </div>
                <hr />
                <div className="content_button">
                    <input type="button" value="Cancel" />
                    <input type="button" value="Confirm" onClick={this.changeNewPass} />
                </div>
            </div>
            )
        } else {
            return (
                <div>
                    <div className="content_input">
                        <div>Please enter new password</div>
                        <div><input type="text" placeholder="New Password" /></div>
                    </div>
                    <hr />
                    <div className="content_button">
                        <input type="button" value="Cancel" />
                        <input type="button" value="Confirm"  />
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <Header />
                {this.displayForget()}
            </div>
        );
    }
}
export default Forget_Pass;
