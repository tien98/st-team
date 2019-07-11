import React, {Component} from 'react';
import './css/style.css';
class right_home extends Component {
    render() {
        return (
            <div>
                <div className="Four">
                        <div className="control_list" id="control_list">
                            <ul>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/chanh.jpg")} alt="img" />
                                        <p>Minh Chánh</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/lina.jpg")} alt="img" />
                                        <p>Lina</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/tam.jpg")} alt="img" />
                                        <p>Văn Tâm Hà</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/mi.jpg")} alt="img" />
                                        <p>Hồng Mi</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/tr.jpg")} alt="img" />
                                        <p>Tran Thuy Trang</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/th.jpg")} alt="img" />
                                        <p>Thanh Thương</p>
                                        <p>Bận</p>
                                        {/* <img src={require("img/propose.png" alt="img"> */}
                                    </div>
                                    <div className="action action_Off" />
                                </li>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/linh.jpg")} alt="img" />
                                        <p>Diệu Linh</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/ha.jpg")} alt="img" />
                                        <p>Nguyễn Thanh Hà</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/duyen.jpg")} alt="img" />
                                        <p>Phan Duyên</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/ly.jpg")} alt="img" />
                                        <p>Pé Ly</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/tran.jpg")} alt="img" />
                                        <p>Trân PiA</p>
                                        <p>Bận</p>
                                    </div>
                                    <div className="action action_Off" />
                                </li>
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/hau.jpg")} alt="img" />
                                        <p>Phúc's Hậu</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li>
                                {/*  */}
                                <li>
                                    <div className="friends">
                                        <img src={require("../img/quyen.jpg")} alt="img" />
                                        <p>Đỗ Ngọc Quyên</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li><li>
                                    <div className="friends">
                                        <img src={require("../img/hoa.jpg")} alt="img" />
                                        <p>Nguyễn Thị Hòa</p>
                                        <img src={require("../img/propose.png")} alt="img" />
                                    </div>
                                    <div className="action action_On" />
                                </li>
                                {/*  */}
                            </ul>
                        </div>
                        <div className="search_friends">
                            <input type="text" name="friends" placeholder="Tìm kiếm" />
                            <div className="control_sear_friends">
                                <img className="img_search" src={require("../img/settings-work-tool.png")} alt />
                                <img className="img_search" src={require("../img/mail.png")} alt />
                                <img className="img_search" src={require("../img/add-friend.png")} alt />
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default right_home;
