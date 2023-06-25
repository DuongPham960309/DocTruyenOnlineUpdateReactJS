const ItemNav = props => {return <div><p className="d-inline-block pl-item color-main-list item-main-hover">{props.item}</p></div>}
//---------------------------
const TableOfList = props => {
    return <table className={props.cssTable}>
        <tbody>{props.rows.map(columnsPerRow)}</tbody>
    </table>
}

const columnsPerRow = (row, i) => {return <tr key={i}>{row.map(column => {return renderColumn(column);})}</tr>}

const renderColumn = (column) => {
    return <td key={column.type} className={column.cssTd} colSpan={column.colSpan} title={column.title}>
        <a className={column.cssLink} href="#0">
            <i className={column.cssIcon}></i>
            <div><p className={column.cssType}>{column.type}</p></div>
        </a>
    </td>
}
//---------------------------
const TitleSection = ({title}) => {
    return <h2><span className="hover-t-decoration" title={title}>{title}</span> <i className="fa fa-angle-right"></i></h2>
}
//---------------------------
const RenderTypeNovels = props => {
    return <div className="d-flex flex-wrap container-type-novel">{props.types.map(renderTypeNovel)}</div>
}

const renderTypeNovel = type => {
    return <a key={type} className="d-block text-white hover-t-decoration" href="#0">{type}</a>
}
//---------------------------
const titleNovel = novel => {
    novel.title = (novel.before !== "") ? (novel.before + " " + novel.name) : novel.name;
    novel.title = (novel.after !== "") ? (novel.title + " " + novel.after) : novel.title;
}
//---------------------------
const NameNovel = ({novel}) => {
    return <>{(novel.before !== "") && (novel.before + " ")}<cite>{novel.name}</cite>{(novel.after !== "") && (" " + novel.after)}</>
}
//---------------------------
const More = props => {
    return <div className="d-flex">
        <a className="d-flex align-items-center justify-content-center text-white mx-auto pill" title={props.title} href="#0">
            <p className="d-inline-block hover-t-decoration">XEM THÊM</p>
            <i className="d-inline-block fa fa-angle-down"></i>
        </a>
    </div>
}
//---------------------------
const horizontalDecription = novel => {
    return <div key={novel.title} className={novel.cssContainer}>
        <img src={novel.image} alt="" title={novel.title} />
        <a className="text-dark hover-t-decoration" title={novel.title} href="#0">{novel.title}</a>
    </div>
}
//---------------------------
const Components = {ItemNav, TableOfList, TitleSection, RenderTypeNovels, titleNovel, NameNovel, More, horizontalDecription};

export default Components;