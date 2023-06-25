const SuggestedNovels = [{before: "[Thập Niên 70]", name: "Nàng Dâu May Mắn", after: "", chapter: "Full"}, 
    {before: "[Thập Niên 70]", name: "Nữ Thanh Niên Trí Thức Dũng Cảm", after: "", chapter: "Full"}, 
    {before: "", name: "Mỹ Nhân Nõn Nà Ở Năm 80", after: "[Xuyên Thư]", chapter: "Full"}, 
    {before: "[Thập Niên 80]", name: "Mỹ Nhân Như Mật", after: "", chapter: "Full"}, 
    {before: "", name: "Vạn Cổ Đệ Nhất Con Rể", after: "", chapter: "Chương 907"}, 
    {before: "", name: "Cửu Tinh Bá Thể Quyết", after: "", chapter: "Chương 7330"}];

SuggestedNovels.map((novel, i) => novel.image = require(`./images/truyenDeCu${i + 1}.jpg`));
//---------------------------
const SelectedTranslationNovels = [{before: "", name: "Bắt Đầu Làm Thần Hào Từ Sau Khi Thi Đại Học", after: "", chapter: "Chương 3565"},
    {before: "", name: "Đan Hoàng Võ Đế", after: "", chapter: "Chương 3564"}, 
    {before: "", name: "Thì Ra Ta Là Tuyệt Thế Võ Thần", after: "", chapter: "Chương 1312"}, 
    {before: "Trở lại Thập Niên 70:", name: "Mang Theo Thành Thị Làm giàu", after: "", chapter: "Full"}, 
    {before: "", name: "Người Đọc Sách Đại Ngụy", after: "", chapter: "Chương 3565"}, 
    {before: "", name: "Bất Phụ Vinh Quang, Bất Phụ Em", after: "", chapter: "Chương 553"}, 
    {before: "[Thập Niên 60]", name: "Gây Dựng Lại Gia Đình", after: "", chapter: "Chương 163"}, 
    {before: "[Thập Niên 70]", name: "Kiều Tức Phụ", after: "", chapter: "Chương 246"}];

SelectedTranslationNovels.map((novel, i) => novel.image = require(`./images/truyenDich${i + 1}.jpg`));
//---------------------------
const UpdatedNovels = [{before: "", name: "Người Đọc Sách Đại Ngụy", after: "", note: "DỊCH", chapter: "Chương 612", time: "21 phút trước"},
    {before: "", name: "Ngài tiên Sinh, Hãy Kiềm Chế", after: "", note: "DỊCH", chapter: "Chương 3392", time: "39 phút trước"},
    {before: "[Thập Niên 70]", name: "Kiều Tức Phụ", after: "", note: "DỊCH", chapter: "Chương 258", time: "31 phút trước"},
    {before: "[Thập Niên 70]", name: "Xuyên Thành Tẩu Tử Của Nam Chủ", after: "", note: "DỊCH", chapter: "Full", time: "31 phút trước"},
    {before: "[Thập Niên 80]", name: "Mỹ Nhân Như Mật", after: "", note: "DỊCH", chapter: "Chương 591", time: "31 phút trước"},
    {before: "[Trọng Sinh]", name: "Thiên Kim Tiểu Thư Có Chút Tàn Nhẫn", after: "", note: "DỊCH", chapter: "Chương 55", 
    time: "56 phút trước"},
    {before: "", name: "Dạy Dỗ Công Chúa Nữ Nô", after: "", note: "DỊCH", chapter: "Chương 153", time: "1 giờ trước"},
    {before: "", name: "Ta Là Người Ở Rễ", after: "", note: "DỊCH", chapter: "Chương 2894", time: "1 giờ trước"},
    {before: "[Một Thai Hai Bảo]", name: "Mật Sủng Tiểu Manh Thê", after: "", note: "DỊCH", chapter: "Chương 910", time: "1 giờ trước"},
    {before: "[Mật Sủng Sau Cưới]", name: "Lão Công Thật Cao Lạnh", after: "", note: "DỊCH", chapter: "Chương 734", time: "1 giờ trước"},
    {before: "[Tổng Tài Truy Thê]", name: "Cô Vợ Cũ Và Đứa Con Thiên Tài", after: "", note: "DỊCH", chapter: "Full", time: "1 giờ trước"},
    {before: "", name: "Sử Thượng Tối Cường Luyện Khí Kỳ", after: "(Dịch)", note: "DỊCH", chapter: "Chương 516", time: "1 giờ trước"},
    {before: "", name: "Thái Tử Đến Từ Tương Lai", after: "", note: "DỊCH", chapter: "Chương 360", time: "2 giờ trước"},
    {before: "", name: "Xuyên Qua Chi Phu Phu", after: "", note: "DỊCH", chapter: "Chương 17", time: "2 giờ trước"},
    {before: "", name: "Có Một Ma Quân Rất Cưng Chiều Ta", after: "", note: "DỊCH", chapter: "Chương 87", time: "2 giờ trước"},
    {before: "[Cưới Trước Yêu Sau]", name: "Cạm Bẫy Hôn Nhân", after: "", note: "", chapter: "Chương 175", time: "2 giờ trước"},
    {before: "[Gả Thay]", name: "Cô Dâu Thần Y Của Tiêu Thiếu Gia", after: "", note: "", chapter: "Chương 155", time: "2 giờ trước"},
    {before: "[Thập Niên 70]", name: "Mẹ Kế Nuôi Con", after: "", note: "DỊCH", chapter: "Chương 420", time: "2 giờ trước"},
    {before: "", name: "Tình Yêu To Lớn", after: "", note: "SÁNG TÁC", chapter: "Chương 38", time: "2 giờ trước"},
    {before: "[77 Ngày Giao Dịch]", name: "Hàng Đêm Triền Miên", after: "", note: "DỊCH", chapter: "Full", time: "3 giờ trước"}, 
    {before: "", name: "Hiên Gia Tọa Quốc", after: "", note: "SÁNG TÁC", chapter: "Full", time: "3 giờ trước"},
    {before: "", name: "Cực Phẩm Hệ Thống Tróc Quỷ", after: "", note: "DỊCH", chapter: "Chương 1017", time: "3 giờ trước"},
    {before: "[Thập Niên 70]", name: "Tiểu Bánh Bao Pk Mẹ Kế", after: "", note: "DỊCH", chapter: "Chương 152", time: "3 giờ trước"},
    {before: "[Thập Niên 70]", name: "Nhật Ký Phu Tra Thê Lười", after: "", note: "DỊCH", chapter: "Full", time: "3 giờ trước"},
    {before: "[Thập Niên 70]", name: "Người Ngoài Hành Tinh Làm Giàu", after: "", note: "DỊCH", chapter: "Full", time: "3 giờ trước"}];
//---------------------------
const FullNovels = [{before: "", name: "Kẻ Thủ Hộ Vũ Trụ", after: "", chapter: "Full"}, 
    {before: "[Bjyx]", name: "Minh Hôn Ám Luyến", after: "", chapter: "Full"}, 
    {before: "", name: "Hiên Gia Tọa Quốc", after: "", chapter: "Full"}, {before: "", name: "Sao Ngụ Nam Thành", after: "", chapter: "Full"},
    {before: "", name: "Boss Hệ Mộc Chỉ Muốn Làm Cá Mặn Vườn Trường", after: "", chapter: "Full"}, 
    {before: "", name: "Từ Khi Có Con Của Đối Thủ Một Mất Một Còn", after: "", chapter: "Full"}, 
    {before: "", name: "Cậu Thiếu Niên Tai Mèo Của Cô", after: "", chapter: "Full"}, 
    {before: "", name: "Tránh xa Tôi Ra Một Chút!", after: "", chapter: "Full"}, 
    {before: "", name: "Cảm Nắng?!", after: "", chapter: "Full"}, 
    {before: "", name: "Hương Vị Ngọt Ngào Của Thanh Xuân", after: "", chapter: "Full"}, 
    {before: "Sủng Tình:", name: "Sủng Tình: Sự Giam Cầm Cả Đời", after: "", chapter: "Full"}, 
    {before: "", name: "Dã Thú Dưới Váy Em", after: "", chapter: "Full"}];

FullNovels.map((novel, i) => novel.image = require(`./images/truyenFull${i + 1}.jpg`));
//---------------------------
const LeftOfShortNovels = {title: "Ánh Trăng Và Kẻ Hai Lòng"};

LeftOfShortNovels.image = require(`./images/truyenNganMain.jpg`);

const RightOfShortNovels = [{title: "Cầu Tôi Mãi Một Đời Yêu Em"}, 
    {title: "Tình Yêu Vốn Dĩ Không Cần Quá Tự Cao, Muốn Ở Cạnh Nhau Hãy Dẹp Bỏ Kiêu Ngạo"}, 
    {title: "Phụ Nữ Khi 'yêu' Phải Biết Bảo Vệ Mình"}, {title: "Em Buông Tay Bởi Anh Không Biết Giữ"}];

RightOfShortNovels.map((novel, i) => novel.image = require(`./images/truyenNgan${i + 1}.jpg`));
//---------------------------
const ReviewNovels = [{title: "Top Truyện Xuyên Không Được Đề Cử Tháng 8-2021"}, {title: "Top Truyện Xuyên Không Hay Nhất Mọi Thời Đại"},
    {title: "Top Truyện Trọng Sinh Hay Nhất Nửa Đầu Năm 2021"}, {title: "Top Truyện Tiên Hiệp Hay Nhất Dành Cho Fan Nam 2021"},
    {title: "Top Truyện Sinh Tồn Hay Nhất Mọi Thời Đại"}];

ReviewNovels.map((novel, i) => novel.image = require(`./images/truyenReview${i + 1}.jpg`));
//---------------------------
const TopGoodNovels = [{title: "Ngạo Thế Đan Thần", view: "287,331,252"}, {title: "Kiếm Ngạo Độc Tôn", view: "85,756,094"}, 
    {title: "Linh Vũ Thiên Hạ", view: "81,893,396"}, {title: "Độc Y Thần Nữ: Phúc Hắc Lãnh Đế Cuồng Sủng Thê", view: "74,628,662"}, 
    {title: "Hôn Trộm 55 Lần", view: "55,185,032"}, {title: "Ép Yêu 100 Ngày", view: "53,212,018"}, 
    {title: "Tuyệt Sắc Đan Dược Sư: Quỷ Vương Yêu Phi", view: "52,128,456"}, {title: "Hợp Đồng Hôn Nhân 100 Ngày", view: "47,532,135"}, 
    {title: "Ngạo Thế Cửu Trọng Thiên", view: "41,404,354"}, {title: "Cô Vợ Ngọt Ngào Có Chút Bất Lương", view: "40,124,578"}];
//---------------------------
const NewUpdateNovels = [{title: "Game Khuya", view: "0"}, {title: "Nhặt Được Sức Mạnh Của Thần", view: "0"}, 
    {title: "Xuyên Không Mất Rồi!", view: "0"}, {title: "Tình Sói Chi Dao", view: "50"}, 
    {title: "Siêu Năng Lực Gia Tại Thời Đại Vua Hải Tặc", view: "50"}, {title: "Lao Sơn Đạo Sĩ", view: "0"}, 
    {title: "Thầy Giáo Đã Kết Hôn Dụ Dỗ Tôi", view: "150"}, {title: "Những Năm Ấy Tôi Làm Chó Liếm", view: "50"}, 
    {title: "Trở Thành Đồ Chơi Trong Game Otome", view: "0"}, {title: "Tận Thế Lưu Vong", view: "0"}];
//---------------------------
const Footer = ["mẹ 17 tuổi con trai thiên tài cha phúc hắc", "thần ma hệ thống", "truyện trinh thám", "năm tháng vội vã", 
    "truyen sac dep kho cuong", "vô tận đan điền", "ngôn tình cung đấu", "bên nhau trọn đời", "huyền của ôn noãn", "bach luyen thanh tien"];
//---------------------------
const data = {SuggestedNovels, SelectedTranslationNovels, UpdatedNovels, FullNovels, 
    ShortNovels: {LeftOfShortNovels, RightOfShortNovels}, ReviewNovels, TopGoodNovels, NewUpdateNovels, Footer};

export default data;