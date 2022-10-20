import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    //Declaring shopping list variables
    let [shoppingList, setShoppingList] = useState([]);

    //On load, get shopping list
    useEffect(()=>{
        getItems()
    }, [])

    const getItems = () => {
        axios.get('/shopping')
        .then(response => {
            setShoppingList(response.data)
            console.log(response.data);
          })
          .catch(err => {
            alert('error getting items');
            console.log(err);
          })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
