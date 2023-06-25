const mapSuggestedNovels = state => {return {SuggestedNovels: state.SuggestedNovels};}
const mapSelectedTranslationNovels = state => {return {novels: state.SelectedTranslationNovels};}
const mapUpdatedNovels = state => {return {novels: state.UpdatedNovels};}
const mapFullNovels = state => {return {novels: state.FullNovels};}
const mapShortNovels = state => {return {novels: state.ShortNovels};}
const mapReviewNovels = state => {return {novels: state.ReviewNovels};}
const mapTopGoodNovels = state => {return {novels: state.TopGoodNovels};}
const mapNewUpdateNovels = state => {return {novels: state.NewUpdateNovels};}
const mapFooter = state => {return {novels: state.Footer};}

const MapState = {mapSuggestedNovels, mapSelectedTranslationNovels, mapUpdatedNovels, mapFullNovels, mapShortNovels, mapReviewNovels, 
    mapTopGoodNovels, mapNewUpdateNovels, mapFooter};

export default MapState;