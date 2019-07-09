import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import Mess from '../messenger/mess';
import './css/style.css';
class top extends Component {
    constructor(props){
        super(props);
        this.state = {
            hienThiMess: false 
        }
    }
    doiTrangThaiMess = () =>{
        this.setState({
            hienThiMess: !this.state.hienThiMess
        })
    }
    tatMess = () =>{
        this.setState({
            hienThiMess:false
        })
    }
    render() {
        return (
            <header>
                <div className="header_control">
                    <div className="logo_search">
                        <div className="logo">
                            <Link to="/"><img src={require("../img/facebook.png")} alt="logo" /></Link>
                        </div>
                        <div className="search">
                            <input type="text" name="search" placeholder="Tìm kiếm" />
                        </div>
                    </div>
                    <div className="next_pages">
                        <ul>
                            <li>
                                <NavLink to="/profile" activeClassName="selected">
                                    <img src={require("../img/logo.jpg")} alt="img"/><span>XXX</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sss" activeClassName="selected">Tìm bạn bè</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ss" activeClassName="selected">Tạo</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="fr_mes_no">
                        <div className="control_img">
                            <i className="fas fa-user-friends">
                                <Mess />
                            </i>
                        </div>
                        <div className="control_img">
                            <i className="fas fa-comment" onClick ={this.doiTrangThaiMess}>
                                <Mess 
                                    hienThiMess={this.state.hienThiMess}  
                                    tatMess={this.tatMess}/>
                            </i>
                            
                        </div>
                        <div className="control_img">
                            <i className="fas fa-bell"></i>
                        </div>
                    </div>
                    <div className="fr_mes_no">
                        <div className="control_img">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="control_img">
                            <i className="fas fa-question-circle"></i>
                        </div>
                        <div className="control_img">
                            {/* <NavLink to="/login"> */}
                            <i class="fas fa-sort-down"></i>
                            {/* </NavLink> */}
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}
export default top;

