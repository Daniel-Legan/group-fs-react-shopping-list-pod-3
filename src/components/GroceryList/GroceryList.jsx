import DeleteItem from "../DeleteItem/DeleteItem";
import PurchaseItem from "../PurchaseItem/PurchaseItem";

//RENDER TABLE HEAD AND BODY TO DOM (pass in list, status button, delete button)
function GroceryList({ shoppingList, markPurchased, deleteItem }) {

//RENDER GROCERYLIST TO DOM
    return (
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
                    {/* FOR EACH ITEM RENDER ATTRIBUTES AND BUTTONS */}
                    {shoppingList.map(item => (
                        <tr key={item.id}>
                            <td>{item.item}</td>
                            <td>{item.quantity}</td>
                            <td>{item.unit}</td>
                            <td>{item.status.toString()}</td>
                            {/* (pass in item id and toggle status function) */}
                            <PurchaseItem id={item.id} purchaseBtn={markPurchased} />
                            {/* (pass in item id and function to delete) */}
                            <DeleteItem id={item.id} deleteBtn={deleteItem} />
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    );
}

export default GroceryList;