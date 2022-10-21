import DeleteItem from "../DeleteItem/DeleteItem";
import PurchaseItem from "../PurchaseItem/PurchaseItem";


function GroceryList({shoppingList, markPurchased, deleteItem}){
    return(
        <>
            <tbody>
                {shoppingList.map(item => (
                <tr key={item.id}>
                    <td>{item.item}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unit}</td>
                    <PurchaseItem id={item.id} purchaseBtn={markPurchased}/>
                    <DeleteItem id = {item.id} deleteBtn = {deleteItem}/>
                </tr>
                ))}
            </tbody>
        </>
    );
}

export default GroceryList;