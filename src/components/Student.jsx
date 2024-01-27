import { useEffect, useState } from 'react'

function Student() {
   const [students, setStudents] = useState([]);

   useEffect(() => {
      fetch('http://localhost:4000/student/')
         .then(response => response.json())
         .then(data => {
            console.log(data)
            setStudents(data)
         });
   }, [])

   const Eliminar = async (id) => {

      //Implementando el metodo DELETE del Backend
      //Usar await
      const response = await fetch(`http://localhost:4000/student/${id}`,{         
         method: 'DELETE'
      });
      if(response.status==404){
         console.log("No se pudo eliminar el estudiante")
      }
      if(response.status==200){
         console.log("Estudiante Eliminado")
      }
      console.log(response)

   }

   return (

      <>
         Estudiantes Registrados
         {students && <ul>
            {students.map(item => <li
               key={item.id}>
               <h4>{item.name}</h4>
               <p>Nota:{item.note} </p>
               <p>Edad:{item.age} </p>
               <div>
                  <button onClick={()=>Eliminar(item.id)}>Eliminar</button>
                  <button>Actualizar</button>
               </div>
            </li>)}
         </ul>}
      </>

   )
}

export default Student;