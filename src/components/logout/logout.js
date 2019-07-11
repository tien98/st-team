import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Auth from '../../controllers/auth';
import '../logout/logout.css';
class logout extends Component {
    constructor(props){
        super(props);
        this.Auth = new Auth();
    }
    logOut = ()=>{
        this.Auth.logOut();    
    }
    //start laua nhir ? doi xiu
    kiemTraFormLogOut = () => {
        if (this.props.trangThaiLogOut) {
            return (
                <div className="content_logout">
                    <div className="a">
                        <div className="div1">Nhóm</div>
                        <div className="div1">Cài Đặt </div>
                        <div className="div1">Đăng xuất</div>
                        <div className="div1">Nhóm</div>
                        <div className="div1">Cài Đặt </div>
                        <div className="div1">Đăng xuất</div>
                        <div className="div1">Nhóm</div>
                        <div className="div1">Cài Đặt </div>
                        <div className="div1">Đăng xuất</div>
                        <div className="div1">Nhóm</div>
                        <div className="div1">Cài Đặt </div>
                        <div className="div1"><Link to="/login" onClick={this.logOut}>Đăng xuất</Link></div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div >
                {this.kiemTraFormLogOut()}
            </div>
        );
    }
}
export default logout;
