// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import PetDetails from './components/PetDetails';
import Navbar from './components/Navbar';
import PetList from './components/PetList';
import Footer from './components/Footer';
import AdoptForm from './components/AdoptForm';

function App() {
    const [selectedOption, setSelectedOption] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <div>
                            <header className="App-header">
                                <h1>Every Pet Deserves a Loving Home.<br /> <span className="highlight">Adopt</span> a Pet Today</h1>
                                <p>Browse our available animals and learn more about the adoption process. Together, we can <span className="dark-highlight">rescue, rehabilitate, and rehome</span> pets in need.</p>
                                <select value={selectedOption} onChange={handleOptionChange}>
                                    <option value="all">All</option>
                                    <option value="cat">Cats</option>
                                    <option value="dog">Dogs</option>
                                </select>
                                <input type="text" placeholder="Search pet by breed..." value={searchQuery} onChange={handleSearchChange} />
                                <button className="search-btn">Search</button>
                            </header>
                            <PetList selectedOption={selectedOption} searchQuery={searchQuery} />
                        </div>
                    } />
                    <Route path="/pet/:id" element={<PetDetails />} />
                    <Route path="/adopt" element={ AdoptForm } />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
