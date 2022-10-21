import DeleteItem from "../DeleteItem/DeleteItem";
import PurchaseItem from "../PurchaseItem/PurchaseItem";


function GroceryList({ shoppingList, markPurchased, deleteItem }) {
    return (
        <>
            <table>
                <tbody>
                    {shoppingList.map(item => (
                        <div class="item" key={item.id}>
                            <div>{item.item}</div>
                            <div>{item.quantity} {item.unit}</div>
                            <div>{item.status.toString()}</div>
                            {/* TODO: CONDITIONAL RENDERING */}
                            <PurchaseItem id={item.id} purchaseBtn={markPurchased} />
                            <DeleteItem id={item.id} deleteBtn={deleteItem} />
                        </div>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default GroceryList;