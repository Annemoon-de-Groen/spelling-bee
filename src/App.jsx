import Home from "./Pages/Home"
import Info from "./Pages/Info";
import Spelers from "./Pages/Spelers";
import Spellen from "./Pages/Spellen";
import Top from "./Top"
import { Link, Route, Routes } from 'react-router-dom';
import './stylesheets/App.css'

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.qr-code-generator.com/

function App(){
    return(
        <>
        <div className="Everything">
        <Top/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/spelers" element={<Spelers/>}/>
            <Route path="/spellen" element={<Spellen/>}/>

            <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>
        </div>
        </>
    )
}

export default App