import Components from './Components.js';

const Header = () => {
    return <header className="header">
        <nav className="max-width-main mx-auto">
            <div className="d-flex flex-wrap mx-nav-negative">
                <ReadNovelOnline />
                <ListOfTypeNovels />
                <Arrange />
                <UpLoad />
                <Search />
                <LogIn />
            </div>
        </nav>
    </header>
}

const ReadNovelOnline = () => {
    const logo = require("./images/logo.png");

    return <div className="d-flex align-items-center p-item-main title-main-hover" title="doc truyen online">
        <img className="d-block img" src={logo} alt="" />
        <h1><a className="d-inline-block color-main-list" href="#0">Doc Tryen Online</a></h1>
    </div>
}

const ListOfTypeNovels = () => {
    const rows = [[{type: "Tiên Hiệp"}, {type: "Kiếm Hiệp"}], [{type: "Ngôn Tình"}, {type: "Truyện Teen"}], 
        [{type: "Đô Thị"}, {type: "Quân Sự"}], [{type: "Lịch Sử"}, {type: "Xuyên Không"}], [{type: "Truyện Ma"}, {type: "Trinh Thám"}],
        [{type: "Huyền Huyễn"}, {type: "Khoa Huyễn"}], [{type: "Dị Giới"}, {type: "Võng Du"}], 
        [{type: "Truyện Ngắn"}, {type: "Truyện Cười"}], [{type: "Tiểu Thuyết"}, {type: "Review"}]];

    rows.map(row => row.map(propsColumnOfListTypeNovels));
    rows[8][1].title = "Review Truyện";

    return <div className="max-460-none d-flex-edit align-items-center p-item-main position-relative hover-show">
        <i className="d-block fa fa-tags color-main-list"></i>
        <Components.ItemNav item="Thể loại" />
        <Components.TableOfList cssTable="position-absolute top-100 start-0 table table-bordered bg-white w-table" rows={rows} />
    </div>
}

const propsColumnOfListTypeNovels = column => {
    column.cssTd = "item-sub-hover";
    column.colSpan = 1;
    column.cssLink = "d-flex align-items-center item";
    column.cssIcon = "d-block fa fa-tags";
    column.cssType = "d-inline-block pl-item";
    column.title = column.type.includes("Truyện") ? column.type : ("Truyện " + column.type);
}

const Arrange = () => {
    const rows = [[{cssIcon: "d-block fa fa-diamond", title: "Truyện Dịch", type: "Truyện Dịch"}, 
        {cssIcon: "d-block fa fa-refresh", title: "Truyện Mới Cập Nhật", type: "Mới Cập Nhật"}],
        [{cssIcon: "d-block fa fa-cloud-upload", title: "Truyện Mới Đăng", type: "Mới Đăng"}, 
        {cssIcon: "d-block fa fa-eye", title: "Truyện Đọc Nhiều", type: "Xem Nhiều"}],
        [{cssIcon: "d-block fa fa-thumbs-o-up", title: "Truyện Được Yêu Thích", type: "Yêu Thích"}, 
        {cssIcon: "d-block fa fa-signal", title: "Truyện Full", type: "Truyện Full"}],
        [{cssIcon: "d-block fa fa-star", title: "Truyện Sáng Tác", type: "Thành Viên Sáng Tác"}]];

    rows.map(row => row.map(propsColumnOfArrange));
    rows[0][0].cssLink = "d-flex align-items-center text-hot";
    rows[3][0].colSpan = 2;
    rows[3][0].cssLink = "d-flex align-items-center justify-content-center text-hot";

    return <div className="max-460-none d-flex-edit align-items-center p-item-main position-relative hover-show">
        <i className="d-block fa fa-list color-main-list"></i>
        <Components.ItemNav item="Sắp xếp" />
        <Components.TableOfList cssTable="position-absolute top-100 start-0 table table-bordered bg-white w-table" rows={rows} />
    </div>
}

const propsColumnOfArrange = column => {
    column.cssLink = "d-flex align-items-center item";
    column.colSpan = 1;
}

const UpLoad = () => {
    return <div className="d-flex align-items-center p-item-main bg-upload" title="Đăng truyện">
        <i className="d-block fa fa-cloud-upload color-main-list"></i>
        <Components.ItemNav item="Đăng truyện" />
    </div>
}

const Search = () => {
    return <form className="d-flex  p-item-main col" action="">
        <input className="d-block col" type="text" placeholder="Tìm truyện, tác giả..." />
        <button className="d-block ml-sub-item" type="button"><i className="d-block fa fa-search"></i></button>
    </form>
}

const LogIn = () => {
    return <div className="max-778-none d-flex-edit align-items-center p-item-main log-in-hover" title="Đăng nhập">
        <i className="d-block fa fa-user color-main-list"></i>
        <Components.ItemNav item="Thành viên" />
    </div>
}

export default Header;