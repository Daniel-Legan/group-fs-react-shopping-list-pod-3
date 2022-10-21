// TOGGLE STATUS BETWEEN TRUE AND FALSE (pass in item id, function to toggle status)
function PurchaseItem({ id, purchaseBtn }) {

    // RENDER BUY BUTTON FOR EACH ITEM TO DOM
    return (
        <td>
            {/* (pass in id to update items status) */}
            <button onClick={() => purchaseBtn(id)}>Buy</button>
        </td>
    )
}

export default PurchaseItem;