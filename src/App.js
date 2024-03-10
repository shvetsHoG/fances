import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./pages/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Modal/>
                <Header/>
                <AppRouter/>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
