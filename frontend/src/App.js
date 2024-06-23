import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import React, { useState, useRef } from 'react';
import PetDetails from './components/PetDetails';
import Navbar from './components/Navbar';
import PetList from './components/PetList';
import Footer from './components/Footer';
import AdoptionForm from './components/AdoptForm';
import SignIn from './components/SignIn';
import Signup from './components/SignUp';

function HomePage() {
    const [selectedOption, setSelectedOption] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <div>
            <header className="App-header">
                <h1>Every Pet Deserves a Loving Home.<br /> <span className="highlight">Adopt</span> a Pet Today</h1>
                <p>Browse our available animals and learn more about the adoption process. Together, we can <span className="dark-highlight">rescue, rehabilitate, and rehome</span> pets in need.</p>
                <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="all">All</option>
                    <option value="Cats">Cats</option>
                    <option value="Dogs">Dogs</option>
                </select>
                <input type="text" placeholder="Search pet by breed..." value={searchQuery} onChange={handleSearchChange} />
                <button className="search-btn">Search</button>
            </header>
            <PetList selectedOption={selectedOption} searchQuery={searchQuery} />
        </div>
    )
}

function App() {
    return (
        <Router>
            <PageLayout />
        </Router>
    )
}

function PageLayout() {
    let location = useLocation()
    let showNavAndFooter = location.pathname !== '/signin' && location.pathname !== '/signup';

    const footerRef = useRef(null);

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div className='App'>
            {showNavAndFooter && <Navbar scrollToFooter={scrollToFooter} />}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/pet/:id" element={<PetDetails />} />
                <Route path="/adopt/:id" element={<AdoptionForm />} />
            </Routes>
            {showNavAndFooter && <Footer ref={footerRef} />}
        </div>
    )
}

export default App;
