import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import data from './Data.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';

const Reducer = (state = data) => {return state;}
const store = legacy_createStore(Reducer);

function App() {
    return <Provider store={store}>
        <Header />
        <Content />
        <Footer />
    </Provider>
}

export default App;
