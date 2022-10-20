

function PurchaseItem({id, purchaseBtn}){
    return(
        <td><button onClick={()=> purchaseBtn(id)}>Buy</button></td>

    )
}

export default PurchaseItem;