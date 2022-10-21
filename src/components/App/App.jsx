import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.jsx';
import GroceryList from '../GroceryList/GroceryList.jsx';
import ResetPurchases from "../ResetPurchases/ResetPurchases";
//import { response } from 'express';

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


    const markPurchased = (id) => {
        axios.put(`/shopping/${id}`)
        
        .then(response => {
            console.log(response.data);
            getItems();
          })
         
          .catch(err => {
            alert('error marking items as purchased');
            console.log(err);
          })
    }

    const deleteItem = (id) => {

        axios({
            method:'DELETE',
            url: `/shopping/${id}`
        })
        .then((response) => {
            console.log('Item deleted', response);

            getItems()
        })
        .catch((err) => {
            console.log('Error in delete', err);

        })
    }

    const resetPurchases = (shoppingList) =>{
        axios.put('/shopping')
        
        .then(response => {
            console.log(response.data);
            getItems(response.data);
          })
         
          .catch(err => {
            alert('error resetting items');
            console.log(err);
          })
        }

   

    return (
        <div className="App">
            <Header />
            <main>
            <ItemForm addItem={addItem}/>
            <ResetPurchases resetPurchases= {resetPurchases} />
            <GroceryList shoppingList={shoppingList} markPurchased={markPurchased} deleteItem={deleteItem} resetPurchases={resetPurchases}/>
            </main>
        </div>
    );
}

export default App;
