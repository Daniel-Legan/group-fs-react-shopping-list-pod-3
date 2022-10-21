//RESET ALL STATUS TO FALSE (pass in function to reset all)
function ResetPurchases({ resetPurchases }) {

//RENDER RESET BUTTON TO DOM
    return (
        <>
        {/* (reset all status to false) */}
            <button onClick={(resetPurchases)}>Reset</button>
        </>
    );
}

export default ResetPurchases;