import React, { Component } from 'react';
import './css/style.css';
import Auth from '../../controllers/auth';
import Right from './right_home';
class home extends Component {
    constructor(props) {
        super(props);
        this.Auth = new Auth();
    }
    componentWillMount() {
        if (!this.Auth.loggedIn()) {
            this.props.history.replace('/login');
        }
    }
    componentDidMount() {
        var height = window.innerHeight - 75;
        document.getElementById('control_list').style.height = `${height}px`;
    }
    render() {
        return (
            <div className="control_Content">
                <div className="control_box">
                    <div className="One">
                        <div className="icon-text">
                            <img src={require("../img/logo.jpg")} />
                            <p>XXX</p>
                        </div>
                        <ul>
                            <li id="news"><a href="#"><img src={require("../img/text-lines.png")} /><span>Bảng tin</span></a></li>
                            <li><a href="#"><img src={require("../img/messenger.png")} /><span>Tin nhắn</span></a></li>
                            <li><a href="#"><img src={require("../img/presentation.png")} /><span>Có gì hot ?</span></a></li>
                            <li><a href="#"><img src={require("../img/online-shop.png")} /><span>Chợ trực tuyến</span></a></li>
                        </ul>
                        <div className="control_group_discovery">
                            <p>Lối tắt</p>
                            <ul>
                                <li><a href="#"><img src={require("../img/meeting.png")} alt="img" /><span>ASP.net</span></a></li>
                                <li><a href="#"><img src={require("../img/meeting.png")} alt="img" /><span>CTT11CD3A</span></a></li>
                                <li><a href="#"><img src={require("../img/meeting.png")} alt="img" /><span>Linux Việt Nam</span></a></li>
                                <li><a href="#"><img src={require("../img/meeting.png")} alt="img" /><span>J2TEAM_</span></a></li>
                            </ul>
                        </div>
                        <div className="control_group_discovery">
                            <p>Khám phá</p>
                            <ul>
                                <li><a href="#"><img src={require("../img/save.png")} alt="img" /><span>Đã lưu</span></a></li>
                                <li><a href="#"><img src={require("../img/flag.png")} alt="img" /><span>Trang</span></a></li>
                                <li><a href="#"><img src={require("../img/networking.png")} alt="img" /><span>Nhóm</span></a></li>
                                <li><a href="#"><img src={require("../img/fireworks.png")} alt="img" /><span>Sự kiện</span></a></li>
                                {/* <li><a href="#"><img src={require("img/hands.png" alt="img"><span></span>Trang gây quỹ</img></a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="Two">
                        <div className="create_post">
                            <div className="title_post">
                                <p>Tạo bài viết</p>
                            </div>
                            <div className="post">
                                <div className="control_post_img">
                                    <img src={require("../img/logo.jpg")} />
                                </div>
                                <input type="text" name="post" placeholder="Ủa, bạn đang nghĩ gì thế?" />
                                <hr />
                                <ul>
                                    <li><a href="#"><img src={require("../img/image.png")} alt="img" /><span>Ảnh/Video</span></a></li>
                                    <li><a href="#"><img src={require("../img/label.png")} alt="img" /><span>Gắn thẻ bạn bè</span></a></li>
                                    <li><a href="#"><img src={require("../img/happy.png")} alt="img" /><span>Cảm xúc</span></a></li>
                                    <li><a href="#"><img src={require("../img/options.png")} alt="img" /></a></li>
                                </ul>
                            </div>
                        </div>
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
                    <div className="Three">
                        <div className="event">
                            <div className="event_one">
                                <ul>
                                    <li><a href="#">
                                        <img src={require("../img/event.png")} alt="img" />
                                        <p>Thanh niên<span> 30-4/1-5</span> vẫn ở nhà <strong>code</strong>.</p>
                                    </a></li>
                                    <li><a href="#">
                                        <img src={require("../img/javascript.png")} alt="img" />
                                        <p>Khóa học <span>JS+</span> sắp hoàn thành.</p>
                                    </a></li>
                                    <li><a href="#">
                                        <img src={require("../img/popcorn.png")} alt="img" />
                                        <p>Xem <span>Avengers-Endg..</span> với bạn bè nào.</p>
                                    </a></li>
                                    <li><a href="#">
                                        <img src={require("../img/github-logo.png")} alt="img" />
                                        <p><span>GitHub</span> đã nhắc nhở bạn trước đó.</p>
                                    </a></li>
                                </ul>
                            </div>
                            <div className="event_two">
                                <h1>Lời mời kết bạn</h1>
                                <ul>
                                    <li>
                                        <img src={require("../img/c2.jpg")} alt="img" />
                                        <div className="control_text_two">
                                            <h2> <a href="people" id="get_daSha" onClick="x_daSha()">Dasha Taran</a> </h2>
                                            <p>5 thằng bạn chung</p>
                                            <div className="control_btn_two"><button>Xác nhận</button><button>Xóa</button></div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require("../img/hotgirl-tram-anh-ava.jpg")} alt="img" />
                                        <div className="control_text_two">
                                            <h2> <a href="people" id="get_tramAnh" onClick="x_tramAnh()">Trâm Anh</a> </h2>
                                            <p>Cã lớp là bạn chung</p>
                                            <div className="control_btn_two"><button>Xác nhận</button><button>Xóa</button></div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={require("../img/hqdefault.jpg")} alt="img" />
                                        <div className="control_text_two">
                                            <h2> <a href="people" id="get_thuyLinh" onClick="x_thuyLinh()">Hoàng Thùy Linh</a> </h2>
                                            <p>17 thằng bạn chung</p>
                                            <div className="control_btn_two"><button>Xác nhận</button><button>Xóa</button></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Right />
                </div>
            </div>

        );
    }
}
export default home;
