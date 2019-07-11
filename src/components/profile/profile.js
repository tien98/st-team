import React, { Component } from 'react';
import './css/style_.css';
import Auth from '../../controllers/auth';
class profile extends Component {
    constructor(props) {
        super(props);
        this.Auth = new Auth();
    }
    componentWillMount() {
        if (!this.Auth.loggedIn()) {
            this.props.history.replace('/login');
        }
    }
    render() {
        return (
            <div>
                <div className="control_Content">
                    <div className="control_box_2">
                        <div className="profile-name" style={{ height: '250px' }}>
                            <div className="head_bgd_img">
                                <div className="profile_bgd_img"
                                    style={{ background: `url(${require("../img/bgd.png")})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '0 -100px' }}>
                                    <img src={require("../img/logo.jpg")} alt="img" />
                                </div>
                            </div>
                            <div className="name_profile">
                                <div className="text font">
                                    <h2>XXX</h2>
                                    <p>"_Front-end_"</p>
                                </div>
                            </div>
                        </div>
                        <div className="bar_profile font">
                            <div className="left_bar_profile">
                                <ul>
                                    <li>Dòng thời gian</li>
                                    <li>Giới thiệu</li>
                                    <li>Bạn bè</li>
                                    <li>Ảnh</li>
                                    <li>Video</li>
                                    <li>Thêm</li>
                                </ul>
                            </div>
                            <div className="right_bar_profile">
                                <select>
                                    <option value={0}>Công khai</option>
                                    <option value={1}>Bạn bè</option>
                                    <option value={2}>Cá nhân</option>
                                    <option value={3}>Tùy chỉnh...</option>
                                </select>
                                <ul>
                                    <li><img src={require("../img/messenger.png")} alt="img" /></li>
                                    <li><img src={require("../img/options.png")} alt="img" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_middle_profile">
                            <div className="left_content_profile">
                                <div className="about">
                                    <div className="text_about">
                                        <h4 className="font">Giới thiệu</h4>
                                        <p className="font ">Web này đơn giản lắm.</p>
                                    </div>
                                    <ul className="font">
                                        <li><img src={require("../img/maps-and-flags.png")} alt="img" />
                                            <p>Đến từ <span>Ninh Hòa, Khánh Hòa, Vietnam</span></p>
                                        </li>
                                        <li><img src={require("../img/insurance.png")} alt="img" />
                                            <p>Sống tại <span>Nha Trang</span></p>
                                        </li>
                                        <li><img src={require("../img/graduation.png")} alt="img" />
                                            <p>Học tại<span> Trường CĐ-KTCN Nha Trang</span></p>
                                        </li>
                                        <li><img src={require("../img/portfolio.png")} alt="img" />
                                            <p>Là một <span>Front-end tự do</span></p>
                                        </li>
                                        <li><img src={require("../img/wifi-signal.png")} alt="img" />
                                            <p>Có tận<span> 1254 người</span> theo dỗi</p>
                                        </li>
                                    </ul>
                                    <div className="add_about font">
                                        <p>Giới thiệu những điều quan trọng với bạn bằng cách <br /> thêm ảnh, Trang, nhóm và nhiều
              thứ khác vào phần <br /> đáng chú ý trên trang cá nhân công khai của bạn.</p>
                                        <p>Thêm mục đáng chú ý</p>
                                        <div className="add_other">
                                            <ul className="font">
                                                <li><img src={require("../img/github-logo.png")} alt="img" /><span>github97</span></li>
                                                <li><img src={require("../img/twitter-logo-silhouette.png")} alt="img" /><span>kulinhz</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="friends">
                                </div>
                            </div>
                            <div className="right_content_profile">
                                <div className="post_profile">
                                    <div className="post_head" id="post_head">
                                        <img src={require("../img/hqdefault.jpg")} />
                                        <div className="post_title" id="post_title">
                                            <p><span id="post_title_me" className="font_post">Hoàng Thùy Linh</span> cùng với <span id="post_title_you" className="font_post" /> và <span id="post_title_number">120</span> người khác</p>
                                            <p id="post_time">31 tháng 1 lúc 14:48 · Công khai</p>
                                            <p id="post_status">Nếu ai hỏi tào lao về quá khứ, tôi sẽ gửi lá ngót đến tận nhà.</p>
                                        </div>
                                    </div>
                                    <div className="post_body" id="post_body" style={{ backgroundImage: `url(${require("../img/postlinh.jpg")})` }}>
                                    </div>
                                    <div className="post_end" id="post_end">
                                        <div className="post_end_1">
                                            <img src={require("../img/in-love.png")} alt="error" />
                                            <img src={require("../img/like.png")} alt="error" />
                                            <img src={require("../img/scared.png")} alt="error" />
                                            <p> <span id="post_firend_like" className="font_post">Cường Tỏi</span> và <span id="post_like" className="font_post">12.458.120</span> thích điều này</p>
                                            <hr />
                                        </div>
                                        <div className="post_end_2">
                                            <div className="post_end_2-IMG">
                                                <img src={require("../img/thumb-up.png")} alt="error" />
                                            </div>
                                            <div className="post_end_2-IMG">
                                                <img src={require("../img/chat.png")} alt="error" />
                                            </div>
                                            <div className="post_end_2-IMG">
                                                <img src={require("../img/forward.png")} alt="error" />
                                            </div>
                                        </div>
                                        <div className="post_end_3">
                                            <img src={require("../img/logo.jpg")} alt="error" />
                                            <input type="text" placeholder="Viết bình luận..." />
                                            {/* <div class="send"> */}
                                            <img src={require("../img/send.png")} id="send" alt="error" />
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default profile;
