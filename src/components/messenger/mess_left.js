import React, {Component} from 'react';
import './mess_left.css';
class mess_left extends Component {
    render() {
        return (
            <div className="content_mess_left">
                <div className="top_left_mess">
                    <div className="top1">
                        <img src={require("../img/logo.jpg")} alt="img"/>
                    </div>
                    <div className="top1">
                        Nguyễn Văn A
                    </div>
                    <div className="content_icon">
                        <div className="top1_1"><i className="fas fa-video"></i></div>
                        <div className="top1_1"><i class="fas fa-phone"></i></div>
                        <div className="top1_1"><i className="fas fa-cog"></i></div>
                        <div className="top1_1"><i className="fas fa-times"></i></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default mess_left;
