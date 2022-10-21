function DeleteList({ listToDelete, deleteFunc }) {

    return (
        <>
            <button onClick={() => listToDelete.map(list => (
                deleteFunc(list.id)))}>Clear</button>
        </>
    )
};

//function DeleteList({deleteList}) {
//    return (
//       <>
//           <button onClick={(deleteList)}>Clear</button>
//        </>
//    );
//}

export default DeleteList;