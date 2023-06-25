import Components from './Components.js';
import { connect } from "react-redux";
import MapState from './MapState.js';
import ConnectTemplate from './ConnectTemplate.js';
//---------------------------
const SuggestedNovels = () => {
    const types = ["Ngôn Tình", "Truyện Teen", "Tiên Hiệp", "Kiếm Hiệp", "Xuyên Không"];

    return <section className="bg-white">
        <Components.TitleSection title="TRUYỆN ĐỀ CỬ" />
        <Components.RenderTypeNovels types={types} />
        <Carousels />
    </section>
}

const Carousels = () => {
    return <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner"><CarouselsHOC /></div>
        <button className="carousel-control-prev size-angle-icon" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <i className="fa fa-angle-left size-icon"></i>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <i className="fa fa-angle-right size-icon"></i>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}

const CarouselsHOC = connect(MapState.mapSuggestedNovels)(ConnectTemplate.CarouselsTemplate);
//---------------------------
const ShowNovels = props => {
    const sectionName = props.sectionName;
    const types = ["Ngôn Tình", "Truyện Teen", "Tiên Hiệp", "Kiếm Hiệp", "Xuyên Không"];

    return <section className="bg-white">
        <Components.TitleSection title={sectionName} />
        {(props.haveTypeNovels === 1) && <Components.RenderTypeNovels types={types} />}
        <ContainerNovels VerticalDecriptionHOC={props.VerticalDecriptionHOC} />
        <Components.More title={sectionName} />
    </section>
}

const ContainerNovels = ({VerticalDecriptionHOC}) => {
    return <div className="row cols-novel row-cols-4 m-0"><VerticalDecriptionHOC /></div>
}
//---------------------------
const UpdatedNovels = () => {
    const sectionName = "TRUYỆN MỚI CẬP NHẬT";
    const types = ["Ngôn Tình", "Truyện Teen", "Tiên Hiệp", "Kiếm Hiệp", "Xuyên Không"];

    return <section className="bg-white">
        <Components.TitleSection title={sectionName} />
        <Components.RenderTypeNovels types={types} />
        <RenderUpdatedNovels />
        <Components.More title={sectionName} />
    </section>
}

const RenderUpdatedNovels = () => {
    return <table className="table table-hover table-update-novel align-middle">
        <tbody><UpdatedNovelsHOC /></tbody>
    </table>
}
const UpdatedNovelsHOC = connect(MapState.mapUpdatedNovels)(ConnectTemplate.UpdatedNovelsTemplate);
//---------------------------
const ShortNovels = () => {
    return <section className="bg-white">
        <Components.TitleSection title="TRUYỆN NGẮN" />
        <div className="d-flex flex-wrap col-short-novel row-cols-2 pb-shorts-novel"><ShortNovelsHOC /></div>
    </section>
}

const ShortNovelsHOC = connect(MapState.mapShortNovels)(ConnectTemplate.ShortNovelsTemplate);
//---------------------------
const TypeNovels = () => {
    const rows = [[{type: "Tiên Hiệp"}, {type: "Kiếm Hiệp"}], [{type: "Truyện Teen"}, {type: "Ngôn Tình"}], 
        [{type: "Đoản Văn"}, {type: "Đông Phương"}], [{type: "Gia Đấu"}, {type: "Nữ Cường"}], [{type: "Cung Đấu"}, {type: "Truyện Sủng"}],
        [{type: "Truyện Ngược"}, {type: "Linh Dị"}], [{type: "Thám Hiểm"}, {type: "Bách Hợp"}], [{type: "Hài Hước"}, {type: "Hiện Đại"}],
        [{type: "Việt Nam"}, {type: "Light Novel"}], [{type: "Nữ Phụ"}, {type: "Phương Tây"}], [{type: "Mạt Thế"}, {type: "Cổ Đại"}],
        [{type: "Điền Văn"}, {type: "Đồng Nhân"}], [{type: "Trọng Sinh"}, {type: "Dị Năng"}], [{type: "Huyền Huyễn"}, {type: "Dị Giới"}],
        [{type: "Võng Du"}, {type: "Quân Sự"}], [{type: "Khoa Học"}, {type: "Lịch Sử"}], [{type: "Truyện Khác"}, {type: "Đô Thị"}],
        [{type: "Khoa Huyễn"}, {type: "Xuyên Không"}], [{type: "Truyện Ma"}, {type: "Xuyên Nhanh"}], 
        [{type: "Quan Trường"}, {type: "Đam Mỹ"}], [{type: "Hệ Thống"}, {type: "Tiểu Thuyết"}], 
        [{type: "Truyện Cười"}, {type: "Truyện Ngắn"}], [{type: "Truyện Trinh Thám"}, {type: "Truyện Sắc"}]];

    rows.map(row => row.map(propsColumnOfTypeNovels));

    for (let i = 0; i < 2; i++)
    {
        for (let i2 = 0; i2 < 2; i2++)
        {
            rows[i][i2].cssLink = "d-flex align-items-center text-hot";
            rows[i][i2].cssIcon = "fa fa-diamond";
        }
    }

    return <section className="bg-white type-novel">
        <Components.TitleSection title="THỂ LOẠI TRUYỆN" />
        <Components.TableOfList cssTable="table bg-white w-100" rows={rows} />
    </section>
}

const propsColumnOfTypeNovels = column => {
    column.cssTd = "";
    column.colSpan = 1;
    column.title = column.type;
    column.cssLink = "d-flex align-items-center text-dark";
    column.cssIcon = "fa fa-tags";
    column.cssType = "d-inline-block pl-item hover-t-decoration";
}
//---------------------------
const ReviewNovels = () => {
    const sectionName = "REVIEW TRUYỆN";

    return <section className="bg-white review-novel">
        <Components.TitleSection title={sectionName} />
        <ReviewNovelsHOC />
        <Components.More title={sectionName} />
    </section>
}

const ReviewNovelsHOC = connect(MapState.mapReviewNovels)(ConnectTemplate.ReviewNovelsTemplate);
//---------------------------
const NovelsList = ({sectionName, RenderNovelsList}) => {
    return <section className="bg-white">
        <Components.TitleSection title={sectionName} />
        <RenderNovelsList />
        <Components.More title={sectionName} />
    </section>
}
//---------------------------
const Sections = {SuggestedNovels, ShowNovels, UpdatedNovels, ShortNovels, TypeNovels, ReviewNovels, NovelsList};

export default Sections;