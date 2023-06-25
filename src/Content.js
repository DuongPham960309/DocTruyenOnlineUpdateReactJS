import Sections from './Sections.js';
import { connect } from "react-redux";
import MapState from './MapState.js';
import ConnectTemplate from './ConnectTemplate.js';

const Content = () => {
    return <div className="content">
        <div className="max-width-main mx-auto">
            <div className="d-flex flex-wrap mh-content-negative">
                <Main />
                <Aside />
            </div>
        </div>
    </div>
}

const Main = () => {
    return <main className="max-860-w-full col-8">
        <div className="m-content">
            <Sections.SuggestedNovels />
            <Sections.ShowNovels sectionName="TRUYỆN DỊCH CHỌN LỌC" haveTypeNovels={0} VerticalDecriptionHOC={TranslationNovelsHOC} />
            <Sections.UpdatedNovels />
            <Sections.ShowNovels sectionName="TRUYỆN FULL" haveTypeNovels={1} VerticalDecriptionHOC={FullNovelsHOC} />
            <Sections.ShortNovels />
        </div>
    </main>
}

const TranslationNovelsHOC = connect(MapState.mapSelectedTranslationNovels)(ConnectTemplate.VerticalDecription);
const FullNovelsHOC = connect(MapState.mapFullNovels)(ConnectTemplate.VerticalDecription);

const Aside = () => {
    return <aside className="max-860-w-full col-4">
        <div className="m-content">
            <Sections.TypeNovels />
            <Sections.ReviewNovels />
            <Sections.NovelsList sectionName="TOP TRUYỆN HAY" RenderNovelsList={TopGoodNovelsHOC} />
            <Sections.NovelsList sectionName="TRUYỆN MỚI ĐĂNG" RenderNovelsList={NewUpdateNovelsHOC} />
        </div>
    </aside>
}

const TopGoodNovelsHOC = connect(MapState.mapTopGoodNovels)(ConnectTemplate.RenderNovelsList);
const NewUpdateNovelsHOC = connect(MapState.mapNewUpdateNovels)(ConnectTemplate.RenderNovelsList);

export default Content;