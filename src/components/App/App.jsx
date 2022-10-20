import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.jsx';

function App() {

    const addItem = (newItem) => {
        axios({
            method: 'POST',
            url: '/shopping',
            data: newItem
        })
        .then((response) => {
            console.log('POST response from server', response.data);
            // TODO: CALL GET FUNCTION
        })
        .catch((err) => {
            console.log('POST error from server', err);
        })
    }


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ItemForm addItem={addItem}/>
            </main>
        </div>
    );
}

export default App;
