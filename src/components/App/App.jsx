import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.jsx';
import GroceryList from '../GroceryList/GroceryList.jsx';

function App() {
    //Declaring shopping list variables
    let [shoppingList, setShoppingList] = useState([]);

    //On load, get shopping list
    useEffect(()=>{
        getItems()
    }, [])

    const addItem = (newItem) => {
        axios({
            method: 'POST',
            url: '/shopping',
            data: newItem
        })
        .then((response) => {
            console.log('POST response from server', response.data);
            getItems();
        })
        .catch((err) => {
            console.log('POST error from server', err);
        })
    }

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
            <ItemForm addItem={addItem}/>
            <GroceryList shoppingList={shoppingList} />
            </main>
        </div>
    );
}

export default App;
