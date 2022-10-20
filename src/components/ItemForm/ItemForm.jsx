import { useState } from 'react';

function ItemForm({ addItem }) {
    const [newItemName, setNewItemName] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        let newItem = {
            item: newItemName,
            quantity: newQuantity,
            unit: newUnit
        };

        addItem(newItem);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="item"
                    onChange={(evt) => setNewItemName(evt.target.value)}
                    value={newItemName}
                />
                <input
                    type="number"
                    placeholder="quantity"
                    onChange={(evt) => setNewQuantity(evt.target.value)}
                    value={newQuantity}
                />
                <input
                    type="text"
                    placeholder="unit"
                    onChange={(evt) => setNewUnit(evt.target.value)}
                    value={newUnit}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ItemForm;