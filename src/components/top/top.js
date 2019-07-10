import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import Mess from '../messenger/mess';
import Logout from '../logout/logout';
import './css/style.css';
class top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hienThiMess: false,
            hienThiLogOut: false
        }
    }
    doiTrangThaiMess = () => {
        this.setState({
            hienThiMess: !this.state.hienThiMess
        })
    }
    doiTrangThaiMess = () => {
        this.setState({
            hienThiLogOut: !this.state.hienThiLogOut
        });
    }
    render() {
        return (
            <header>
                <div className="header_control">
                    <div className="logo_search">
                        <div className="logo">
                            <Link to="/home"><img src={require("../img/facebook.png")} alt="logo" /></Link>
                        </div>
                        <div className="search">
                            <input type="text" name="search" placeholder="Tìm kiếm" />
                        </div>
                    </div>
                    <div className="next_pages">
                        <ul>
                            <li>
                                <NavLink to="/profile" activeClassName="selected">
                                    <img src={require("../img/logo.jpg")} alt="img" /><span>XXX</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/home">Trang chủ</NavLink>
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
                            <i className="fas fa-comment" onClick={this.doiTrangThaiMess}>
                                <Mess
                                    hienThiMess={this.state.hienThiMess} />
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
                            <i class="fas fa-sort-down" onClick={this.doiTrangThaiMess}>
                                <Logout trangThaiLogOut={this.state.hienThiLogOut} />
                            </i>
                        </div>

                    </div>
                </div>
            </header>

        );
    }
}
export default top;

