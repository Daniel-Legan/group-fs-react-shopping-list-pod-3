
function DeleteItem({ id, deleteBtn }) {
    console.log('DELETE BTN', deleteBtn);
    return (
        <>
            <button onClick={() => deleteBtn(id)} type="click">Remove</button>
        </>
    )
}

export default DeleteItem;