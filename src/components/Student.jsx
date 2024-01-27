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


   return (

      <>
         Estudiantes Registrados
        {students && <ul>
         {students.map(item => <li 
            key={item.id}>
               Nombre:{item.name}-
               Edad:{item.age}-
               Nota:{item.note}               
         </li>)}
        </ul> }
      </>

   )
}

export default Student;