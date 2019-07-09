import React, { Component } from 'react';
import './mess.css';
class mess extends Component {
    kiemTraTrangThaiMess = () => {
        if (this.props.hienThiMess) {
            return (
                <div className="mess" onClick={this.props.tatMess}>
                <div className="top_mess">
                    <ul className="ul_top_mess">
                        <li className="li_left_top_mess">Recent</li>
                        <li className="li_left_top_mess">Message Requests</li>
                        <li className="li_right_top_mess">New Group</li>
                        <li className="li_right_top_mess">New Message</li>
                    </ul>
                </div>
                <div className="content_mess">
                    <ul >
                        <li className="li_content_mess">
                            <div className="left_content_mess">
                                <img src={require('../img/logo.jpg')} alt="imggg" />
                            </div>
                            <div className="center_content_mess">
                                <span>Hà</span>
                                <span>A ăn cơm chưa</span>
                            </div>
                            <div className="right_content_mess">
                                10:07 p.m
                            </div>
                        </li>

                        <li className="li_content_mess">
                            <div className="left_content_mess">
                                <img src={require('../img/logo.jpg')} alt="imggg" />
                            </div>
                            <div className="center_content_mess">
                                <span>Hà</span>
                                <span>A ăn cơm chưa</span>
                            </div>
                            <div className="right_content_mess">
                                10:07 p.m
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {
                    this.kiemTraTrangThaiMess()
                }
            </div>
        );
    }
}
export default mess;