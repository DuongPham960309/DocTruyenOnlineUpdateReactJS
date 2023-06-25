import React from "react";
import { connect } from "react-redux";
import MapState from "./MapState";

const Footer = () => {
    const text1 = ["Website ",{title: "đọc truyện online", marker: "đọc truyện"}," online chất lượng hàng đầu Việt Nam, với nhiều ",
        {title: "Truyện Tiên Hiệp", marker: "truyện tiên hiệp"},", ",{title: "Truyện Kiếm Hiệp", marker: "truyện kiếm hiệp"},", ",
        {title: "Truyện Ngôn Tình", marker: "truyện ngôn tình"},", ",{title: "Truyện Teen", marker: "truyện teen"},", ",
        {title: "Truyện Đô Thị", marker: "truyện đô thị"}," được tác giả và dịch giả chọn lọc và đăng tải. Truy cập website nghĩa là bạn đã " 
        + "đồng ý với các quy định và điều khoản của chúng tôi. Vui lòng đọc kỹ các thông tin liên quan ở phía dưới."];
    const text2 = [{title: "Privacy Policy", marker: "Chính sách bảo mật"}," - ",{title: "Terms", marker: "Điều khoản sử dụng"}," - ",
        {title: "Content Rules", marker: "Quy định về nội dung"}," - ",{title: "DMCA Guidelines", marker: "Vấn đề bản quyền"}," - ",
        {title: "Privacy agreement", marker: "Thỏa thuận quyền riêng tư"}];
    const dmca = require("./images/dmca.png");
    const ccBy = require("./images/ccBy.png");

    return <footer className="footer">
        <div className="max-width-main mx-auto">
            <div className="bg-dark p-top-novel-month">
                <h2 className="text-white h2">Top truyện nổi bật của tháng</h2>
                <FooterHOC />
            </div>
            <div className="d-flex flex-wrap pv-description">
                <div className="max-860-w-full col-8">
                    <Paragraph text={text1} />
                    <Paragraph text={text2} />
                    <p className="text-white">Website hoạt động dưới <a className="text-link hover-t-decoration" href="/#">Giấy phép truy cập 
                    mở Creative Commons Attributio 4.0 International License.</a></p>
                    <div className="d-flex align-items-center">
                        <a className="pr-logo" title="DMCA.com Protection Program" href="/#"><img src={dmca} alt=""/></a>
                        <a title="Creative Commons License" href="#0"><img src={ccBy} alt=""/></a>
                    </div>
                </div>
                <div className="max-860-w-full col-4">
                    <p className="text-white text-center">Copy right 2021 <a className="text-link" href="#0">DTruyen.Com</a></p>
                </div>
            </div>
        </div>
    </footer>
}

const FooterHOC = connect(MapState.mapFooter)(props => {return props.novels.map(renderNovel);});
const renderNovel = novel => {return <a key={novel} className="d-inline-block top-novel hover-t-decoration" href="#0">{novel}</a>}
const Paragraph = props => {return <p className="text-white">{props.text.map(renderParagraph)}</p>}

const renderParagraph = (text, i) => {
    return <React.Fragment key={i}>{(typeof text === "string") ? text : highLigh(text)}</React.Fragment>
}

const highLigh = data => {return <a className="text-link hover-t-decoration" title={data.title} href="#0">{data.marker}</a>}

export default Footer;