import PurchaseItem from "../PurchaseItem/PurchaseItem";


function GroceryList({shoppingList, markPurchased}){
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
                    <td>{item.status}</td>
                    <PurchaseItem id={item.id} purchaseBtn={markPurchased}/>
                    {/* <td><button onClick={()=> markPurchased(item)}>Buy</button></td>
                    <td><button onClick={()=> clearPurchases(item)}>Reset</button></td> */}
                </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default GroceryList;