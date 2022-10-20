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
    
    import GroceryList from '../GroceryList/GroceryList.jsx';


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
                <ItemForm addItem={addItem}/>
            </main>
        </div>
    );
}

export default App;
