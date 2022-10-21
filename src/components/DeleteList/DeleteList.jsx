// DELETE ALL ITEMS IN LIST (pass in array list, function to delete by id)
function DeleteList({ listToDelete, deleteFunc }) {

//RENDER DELETE BUTTON TO DOM
    return (
        <>
        {/* (loop through array list and call delete function for each id) */}
            <button onClick={() => listToDelete.map(list => (
                deleteFunc(list.id)))}>Clear</button>
        </>
    )
};

// DELETE ALL BY ENDPOINT BUTTON
//function DeleteList({deleteList}) {
//    return (
//       <>
//           <button onClick={(deleteList)}>Clear</button>
//        </>
//    );
//}

export default DeleteList;