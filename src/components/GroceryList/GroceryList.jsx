import DeleteItem from "../DeleteItem/DeleteItem";

function GroceryList({shoppingList, deleteItem}){
    console.log('DELETE ITEM', deleteItem)
    console.log('SHOPPING LIST', shoppingList)

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {shoppingList.map(item => (
                <tr key={item.id}>
                    <td>{item.item}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unit}</td>
                    <td>{item.status.toString()}</td>
                    <DeleteItem id = {item.id} deleteBtn = {deleteItem}/>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default GroceryList;