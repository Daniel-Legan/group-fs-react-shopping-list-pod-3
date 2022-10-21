//DELETE INDIVIDUAL ITEM BY ID(pass in id, and function to delete by id)
function DeleteItem({ id, deleteBtn }) {
    console.log('DELETE BTN', deleteBtn);

//RENDER DELETE BUTTON FOR EACH ITEM TO DOM    
    return (
        <>
            <td>
                {/* (pass in id to delete function) */}
                <button onClick={() => deleteBtn(id)} type="click">Remove</button>
            </td>

        </>
    )
}

export default DeleteItem;