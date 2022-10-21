function DeleteList({ listToDelete, deleteFunc }) {

    return (
        <>
            <button onClick={() => listToDelete.map(list => (
                deleteFunc(list.id)))}>Clear All</button>
        </>
    )
};

export default DeleteList;