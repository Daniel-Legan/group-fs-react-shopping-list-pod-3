

function PurchaseItem({item, purchaseBtn}){
    console.log(item.status);
    return(
        <>
            <button onClick={()=> {(item.status) == true ? 'PURCHASED' : purchaseBtn(item.id)}}>Buy</button>
            {/* <td>{(item.status) === 'true' ? purchaseBtn(item.id) : 'PURCHASED'}</td> */}
        </>
    )
}
export default PurchaseItem;