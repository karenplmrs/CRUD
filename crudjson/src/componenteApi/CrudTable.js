

const CrudTable=({data,setDataToEdit,deleteData})=>{

    
    return(
        <div>
              <h3>Tabla de Datos</h3>
              <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Accion</th>
                    </tr>
                </thead>
              </table>
              <tbody>
                {
                  data.length === 0 ? (
                        <tr>
                            <td colSpan="3">No existen elementos</td>
                        </tr>                      
                    )
                    :
                    (
                       data.map(item =>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td><button onClick={() => setDataToEdit(item.id)}>Editar</button><button onClick={() => deleteData(item.id)}>Eliminar</button></td>

                        </tr>
                       )
                        ) 
                    )
                 
                }
             </tbody>


        </div>
    )
}
export default CrudTable;
