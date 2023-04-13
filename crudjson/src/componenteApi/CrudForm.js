
import {useState} from 'react';
const initialForm={
    id: null,
    name:'',
    lastname:''

}

const CrudForm=({create, updateData,setDataToEdit, dataToEdit})=>{
    const [form, setForm] = useState(initialForm);


    console.log(dataToEdit)

    const handleChance=(e)=>{
        // console.log(e.target.value)
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.name || !form.lastname){
            alert('Datos incompletos')
            return;
        }
        if(dataToEdit!==null){
            updateData({
                id: dataToEdit,
                name: form.name,
                lastname: form.lastname
            })
        }
        else{
            create({
                id: Date.now(),
                name: form.name,
                lastname: form.lastname
            })
        }
    }
    const handleRest=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }

    return(
        <div>
            <h3>Crear</h3>
            <form>
                <input type='text' name='name' placeholder='Nombre' onChange={handleChance}/>
                <input type='text' name='lastname'placeholder='Apellido' onChange={handleChance}/>
                <input type='submit' value='Enviar'onClick={handleSubmit}/>
                <input type='reset' value='limpiar'/>
            </form>
        </div>
    )
}
export default CrudForm;
