import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../../App'
import Book from '../../pages/Book'
import Profile from "../../pages/Profile";
import PageWrapper from "../../pages/PageWrapper";

function RouterContainer() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageWrapper><App /></PageWrapper>} />
                <Route path="profile" element={<PageWrapper><Profile /></PageWrapper>} />
                <Route path="book" element={<PageWrapper><Book /></PageWrapper>} />
            </Routes>
        </BrowserRouter>

    )
}


export default RouterContainer;