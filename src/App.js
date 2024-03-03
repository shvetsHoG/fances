import './App.css';
import Header from "./components/header/Header";
import MainSlider from "./components/mainSlider/MainSlider";
import OurWorks from "./components/ourWorks/OurWorks";
import Slider from "./components/slider/Slider";
import Variants from "./components/variants/Variants";
import Description from "./components/description/Description";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainSlider/>
            <OurWorks />
            <Slider />
            <Variants />
            <Description/>
            <Footer />
        </div>
    );
}

export default App;
