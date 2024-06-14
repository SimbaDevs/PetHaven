import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import PetDetails from './components/PetDetails';
import Navbar from './components/Navbar';
import PetList from './components/PetList';
import Footer from './components/Footer';
import AdoptionForm from './components/AdoptForm';
import SignIn from './components/SignIn';

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
                <Routes>
                    <Route path="/" element={
                        <div>
                            <Navbar />
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
                            <Footer />
                        </div>
                    } />
                    <Route path="/pet/:id" element={<PetDetails />} />
                    <Route path="/adopt/:id" element={<AdoptionForm />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
