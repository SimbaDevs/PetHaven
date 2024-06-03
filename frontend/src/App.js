// src/App.js
import React, { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import PetList from './components/PetList';
import Footer from './components/Footer';

function App() {
    const [selectedOption, setSelectedOption] = useState('all');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <h1>Every Pet Deserves a Loving Home.<br /> <span className="highlight">Adopt</span> a Pet Today</h1>
                <p>Browse our available animals and learn more about the adoption process. Together, we can <span class="dark-highlight">rescue, rehabilitate, and rehome</span> pets in need.</p>
                <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="all">All</option>
                    <option value="cats">Cats</option>
                    <option value="dogs">Dogs</option>
                </select>
                <input type="text" placeholder="Search dogs..." />
                <button className="search-btn">Search</button>
            </header>
            <PetList selectedOption={selectedOption} />
            <Footer />
        </div>
    );
}

export default App;
