
function DeleteItem({ id, deleteBtn }) {
    console.log('DELETE BTN', deleteBtn);
    return (
        <>
            <td>
                <button onClick={() => deleteBtn(id)} type="click">Remove</button>
            </td>

        </>
    )
}

export default DeleteItem;