// src/App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PetList from './components/PetList';
import Footer from './components/Footer';

function App() {
    const [selectedOption, setSelectedOption] = useState('all');
    const [searchQuery, setSearchQuery] = useState('')

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <h1>Every Pet Deserves a Loving Home.<br /> <span className="highlight">Adopt</span> a Pet Today</h1>
                <p>Browse our available animals and learn more about the adoption process. Together, we can <span class="dark-highlight">rescue, rehabilitate, and rehome</span> pets in need.</p>
                <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="all">All</option>
                    <option value="cat">Cats</option>
                    <option value="dog">Dogs</option>
                </select>
                <input type="text" placeholder="Search pet by bread..." value={searchQuery} onChange={handleSearchChange} />
                <button className="search-btn">Search</button>
            </header>
            <PetList selectedOption={selectedOption} searchQuery={searchQuery} />
            <Footer />
        </div>
    );
}

export default App;
