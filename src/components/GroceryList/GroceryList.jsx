
function GroceryList({shoppingList}){
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
                </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default GroceryList;