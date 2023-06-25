import Components from "./Components";
//---------------------------
const CarouselsTemplate = ({SuggestedNovels}) => {
    const carouselsLength = Math.ceil(SuggestedNovels.length/3);
    const carousels = new Array(carouselsLength);

    for (let i = 0; i < carouselsLength; i++)
    {
        carousels[i] = {carousel: "carousel-item"};
        carousels[i].novels = [];
    }

    SuggestedNovels.map((novel, i) => carousels[Math.floor(i/3)].novels.push(novel));
    carousels[0].carousel = "carousel-item active";

    return carousels.map(renderSuggestedNovels);
}

const renderSuggestedNovels = (suggestedNovels, i) => {
    return <div key={i} className={suggestedNovels.carousel}>
        <div className="d-grid grid-novel">{suggestedNovels.novels.map(renderSuggestedNovel)}</div>
    </div>
}

const renderSuggestedNovel = novel => {
    Components.titleNovel(novel);

    return <div key={novel.name} className="position-relative">
        <img className="d-block" src={novel.image} alt="" title={novel.title} />
        <div className="position-absolute start-0 end-0 bottom-0 bg-black-opacity p-above">
            <a className="d-block text-white text-center hover-t-decoration" title={novel.title} href="#0">
                <Components.NameNovel novel={novel} />
            </a>
            <p className="text-white text-center">{novel.chapter}</p>
        </div>
    </div>
}
//---------------------------
const VerticalDecription = props => {
    return props.novels.map(_verticalDecription);
}

const _verticalDecription = novel => {
    Components.titleNovel(novel);

    return <div key={novel.name} className="container-novel">
        <div><img src={novel.image} alt="" title={novel.title} /></div>
        <div className="container-infor-novel">
            <a className="d-block text-dark hover-t-decoration" title={novel.title} href="#0">
                <Components.NameNovel novel={novel} />
            </a>
            <p className="text-secondary">{novel.chapter}</p>
        </div>
    </div>
}
//---------------------------
const UpdatedNovelsTemplate = props => {return props.novels.map(renderUpdatedNovel);}

const renderUpdatedNovel = novel => {
    Components.titleNovel(novel);

    return <tr key={novel.name}>
        <td className="d-flex align-items-center">
            <a className="d-inline-block text-dark hover-t-decoration title-novel-update" title={novel.title} href="#0">
                <Components.NameNovel novel={novel} />
            </a>
            {(novel.note !== "") && <p className="note text-hot size-text-secondary">{novel.note}</p>}
        </td>
        <td className="text-secondary td-secondary size-text-secondary">{novel.chapter}</td>
        <td className="text-secondary td-secondary size-text-secondary">{novel.time}</td>
    </tr>
}
//---------------------------
const ShortNovelsTemplate = ({novels}) => {
    return <>
        <LeftOfShortNovels novel={novels.LeftOfShortNovels} />
        <RightOfShortNovels novels={novels.RightOfShortNovels} />
    </>
}

const LeftOfShortNovels = ({novel}) => {
    return <div className="position-relative">
        <img src={novel.image} alt="" title={novel.title} />
        <a className="d-inline-block text-white hover-t-decoration position-absolute start-0 end-0 bottom-0 p-above" title={novel.title} href="#0">
            {novel.title}
        </a>
    </div>
}

const RightOfShortNovels = ({novels}) => {
    novels.map(novel => novel.cssContainer = "d-flex pb-short-novel");

    return <div className="right-novel">{novels.map(Components.horizontalDecription)}</div>
}
//---------------------------
const ReviewNovelsTemplate = ({novels}) => {
    novels.map(novel => novel.cssContainer = "d-flex p-short-novel");

    return novels.map(Components.horizontalDecription);
}
//---------------------------
const RenderNovelsList = ({novels}) => {
    rank(novels);
    classRank(novels);

    return <table className="table top-list">
        <tbody>{novels.map(renderRankNovel)}</tbody>
    </table>
}

const rank = novels => {
    let numberNovels = novels.length;
    let count = numberNovels.toString().length;

    for (let i = 0; i < numberNovels; i++)
    {
        novels[i].rank = (i + 1) + "";
        novels[i].rank = novels[i].rank.padStart(count, "0");
    }
}

const classRank = novels => {
    novels.map(novel => novel.cssRank = "rank text-under-r-3");
    novels[0].cssRank = "rank text-r-1";
    novels[1].cssRank = "rank text-r-2";
    novels[2].cssRank = "rank text-r-3";
}

const renderRankNovel = (novel) => {
    return <tr key={novel.title}>
        <td className={novel.cssRank}>{novel.rank}</td>
        <td>
            <a className="d-inline-block text-dark hover-t-decoration" title={novel.title} href="#0">{novel.title}</a>
            <div className="d-flex align-items-center view text-secondary">
                <i className="fa fa-eye"></i>
                <p>{novel.view}</p>
            </div>
        </td>
    </tr>
}
//---------------------------
const ConnectTemplate = {CarouselsTemplate, VerticalDecription, UpdatedNovelsTemplate, ShortNovelsTemplate, ReviewNovelsTemplate, 
    RenderNovelsList};

export default ConnectTemplate;