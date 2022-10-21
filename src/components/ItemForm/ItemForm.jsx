import { useState } from 'react';

// CREATE ITEM FORM
function ItemForm({ addItem }) {

// STATE FUNCTIONS AND VARIABLES
    const [newItemName, setNewItemName] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');

// PREVENT RELOAD, ON FORM SUBMIT SET INPUTS TO NEW OBJECT
    const handleSubmit = (evt) => {
        evt.preventDefault();

// NEW OBJECT         
        let newItem = {
            item: newItemName,
            quantity: newQuantity,
            unit: newUnit
        };

// ADD NEW OBJECT TO TABLE
        addItem(newItem);
    }

// RENDER INPUTS AND SUBMIT BUTTON TO DOM    
    return (
        <>
            <form onSubmit={handleSubmit}>

                {/* INPUT ITEM NAME */}
                <input
                    type="text"
                    placeholder="item"
                    onChange={(evt) => setNewItemName(evt.target.value)}
                    value={newItemName}
                />

                {/* INPUT ITEM QUANTITY */}
                <input
                    type="number"
                    placeholder="quantity"
                    onChange={(evt) => setNewQuantity(evt.target.value)}
                    value={newQuantity}
                />

                {/* INPUT ITEM UNIT */}
                <input
                    type="text"
                    placeholder="unit"
                    onChange={(evt) => setNewUnit(evt.target.value)}
                    value={newUnit}
                />

                {/* SUBMIT FORM BUTTON */}
                <button type="submit">Submit</button>

            </form>
        </>
    );
}

export default ItemForm;