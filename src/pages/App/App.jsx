import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from "../../components/NavBar"
import HomePage from "../HomePage/HomePage"
import QuotePage from "../QuotePage/QuotePage"
import HelpPage from "../HelpPage/HelpPage"

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quotes" element={<QuotePage />} />
                <Route path="/help" element={<HelpPage />} />
            </Routes>
        </>
    )
}