import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.jsx';
import GroceryList from '../GroceryList/GroceryList.jsx';
import DeleteList from '../DeleteList/DeleteList.jsx';
import ResetPurchases from "../ResetPurchases/ResetPurchases";
//import { response } from 'express';

function App() {
    //Declaring shopping list variables
    let [shoppingList, setShoppingList] = useState([]);

    //On load, get shopping list
    useEffect(() => {
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
        
            method: 'DELETE',
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

// CALL TO DELETE ALL BY ENDPOINT
    // const deleteList = () => {

    //     axios({

    //         method: 'DELETE',
    //         url: `/shopping`
    
    //     })
    //         .then((response) => {
    //             console.log('Item deleted', response);

    //             getItems()
    //         })
    //         .catch((err) => {
    //             console.log('Error in delete', err);

    //         })
    // }

    const resetPurchases = (shoppingList) => {
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
                <h3>Add an Item</h3>

                {/* (pass in function to add new object to table) */}
                <ItemForm addItem={addItem} />

                <h3>Shopping List</h3>
                
                {/* (pass in function to reset all status to false) */}
                <ResetPurchases resetPurchases={resetPurchases} />

                {/* (pass in array list and function to delete by id) */}
                <DeleteList listToDelete={shoppingList} deleteFunc={deleteItem} />
                {/*<DeleteList deleteList={deleteList} /> CALL TO DELETE BY NEW ENDPOINT*/}

                {/* pass in function to toggle status and function to delete item by id */}
                <GroceryList shoppingList={shoppingList} markPurchased={markPurchased} deleteItem={deleteItem} />
            </main>
        </div>
    );
}

export default App;
