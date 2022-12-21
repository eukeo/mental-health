import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar"
import HomePage from "../HomePage/HomePage"
import InformationPage from "../InformationPage/InformationPage"
import QuotePage from "../QuotePage/QuotePage"
import HelpPage from "../HelpPage/HelpPage"
import Footer from '../../components/NavBar/Footer/Footer';

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quotes" element={<QuotePage />} />
                <Route path="/information" element={<InformationPage />} />
                <Route path="/help" element={<HelpPage />} />
            </Routes>
            <Footer />
        </>
    )
}