import DeleteItem from "../DeleteItem/DeleteItem";
import PurchaseItem from "../PurchaseItem/PurchaseItem";


function GroceryList({shoppingList, markPurchased, deleteItem}){
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
                    <PurchaseItem id = {item.id} purchaseBtn = {markPurchased}/>
                    <DeleteItem id = {item.id} deleteBtn = {deleteItem}/>


                </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default GroceryList;