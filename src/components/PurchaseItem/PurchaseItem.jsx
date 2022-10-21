

function PurchaseItem({ id, purchaseBtn }) {
    return (
        <button onClick={() => purchaseBtn(id)}>Buy</button>
    )
}

export default PurchaseItem;