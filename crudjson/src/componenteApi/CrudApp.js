import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { useState, useEffect } from "react";

const CrudApp=()=>{
    const[dataToEdit,setDataToEdit]=useState(null)
    const [db,setDb] = useState([]);
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(res => {
            setDb(res)
            setLoad(false)
            console.log(res)
        });

    }, [load])

    const createData=async(data)=>{
        console.log(data)
        await fetch('http://localhost:5000/users/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(()  => setLoad(true))
    };
    
    const updateData=async(data)=>{
        await fetch('http://localhost:5000/users/' + data.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(()  => setLoad(true))
    }

    const deleteData=async(id)=>{
        await fetch('http://localhost:5000/users/' + id, {
            method: 'DELETE',
        })
        .then(()  => setLoad(true))
    };

    console.log(db)

    return(
        
        <div>
            <h1>CRUD App</h1>
            <CrudForm create={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
        )
        
        
}
export default CrudApp;
