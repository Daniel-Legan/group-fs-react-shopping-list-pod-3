import DeleteItem from "../DeleteItem/DeleteItem";
import PurchaseItem from "../PurchaseItem/PurchaseItem";

//RENDER TABLE HEAD AND BODY TO DOM (pass in list, status button, delete button)
function GroceryList({ shoppingList, markPurchased, deleteItem }) {

//RENDER GROCERYLIST TO DOM
    return (
        <>
            <table>

                <thead>
                </thead>

                <tbody>
                    {/* FOR EACH ITEM RENDER ATTRIBUTES AND BUTTONS */}
                    {shoppingList.map(item => (
                        <div key={item.id} class="item">
                            <div>{item.item}</div>
                            <div>{item.quantity}</div>
                            <div>{item.unit}</div>
                            <div>{item.status.toString()}</div>
                            {/* (pass in item id and toggle status function) */}
                            <PurchaseItem id={item.id} purchaseBtn={markPurchased} />
                            {/* (pass in item id and function to delete) */}
                            <DeleteItem id={item.id} deleteBtn={deleteItem} />
                        </div>
                    ))}
                </tbody>

            </table>
        </>
    );
}

export default GroceryList;