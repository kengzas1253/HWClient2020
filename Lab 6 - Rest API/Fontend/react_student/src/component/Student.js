import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Student = ()=>{
    const [students,setStudents] = useState({})
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [id,setId] = useState('')
    const [Major,setMajor] = useState('')
    const [GPA,setGPA] = useState( )

    let URL ='http://localhost/api/students'
    useEffect(()=>{
        getStudents();
    },[])
    //get API students
    const getStudents = async ()=>{
        const result = await axios.get(URL)
        setStudents(result.data);
        console.log(result.data)
    }
    //add students
    const addStudent = async()=>{
        const result = await axios.post(URL,{
            name,surname,id,Major,GPA
        })
        console.log(result.data)
        getStudents();
    }
    //get students
    const getStudent = async (no) => {
        const result = await axios.get(`http://localhost/api/students/${no}`)
        console.log(result.data)

        setName(result.data.name)
        setSurname(result.data.surname)        
        setId(result.data.id)        
        setMajor(result.data.Major)        
        setGPA(result.data.GPA)        
    }
    //update students
    const updateStudent = async (no) => {
        const result = await axios.put(`http://localhost/api/students/${no}`,{
            name,surname,id,Major,GPA
        })
        console.log(result.data)
        setName(result.data.name)
        setSurname(result.data.surname)        
        setId(result.data.id)        
        setMajor(result.data.Major)        
        setGPA(result.data.GPA) 
        getStudents()       
    }
    //Delete
    const delStudent = async (no) => {
        const result = await axios.delete(`http://localhost/api/students/${no}`)       
        getStudents()
    }

    const printStudents = ()=>{
        if(students && students.length){
            return students.map((student,index)=>{
                return(
                    <li key={index}>
                            {student.name}  {student.surname  } : 
                            {student.id} Major: {student.Major} GPA:{student.GPA}
                            <br/>
                            <button className="badge badge-primary" onClick = { ()=>getStudent(student.no)}>Get</button>
                            <button className="badge badge-success" onClick = { ()=>updateStudent(student.no)}>Update</button>
                            <button className="badge badge-danger" onClick = { ()=>delStudent(student.no)}>Delete</button>
                    </li>
                    
                )
            })
        }
        else{
            return(<h1>No data</h1>)
        }
    }
    
    return(
        <div>
            Student
            <ul>
                {printStudents()}
            </ul>
            <div className="container">
            <h2>Add student</h2>
            <h3>Get student</h3>
            Get: {name}  {surname} :{id} : {Major} : {GPA}
            
            <div class="form-group">
            <label for="name">Name:</label>
            <input class="form-control" 
            placeholder="Enter name"
            name="name"
            type="text" 
            onChange={ (e)=> setName(e.target.value)} />
            </div>

            <div class="form-group">
            <label for="surname">Surname:</label>
            <input class="form-control"
            placeholder="Enter surname"
            name="surname"
            type="text" 
            onChange ={(e)=> setSurname(e.target.value)}/>
            </div>

            <div class="form-group">
            <label for="id">Student ID:</label>
            <input class="form-control"
            placeholder="Enter student id"
            name="id"
            type="text" 
            onChange ={(e)=> setId(e.target.value)}/>
            </div>

            <div class="form-group">
            <label for="Major">Major:</label>
            <input  class="form-control"
            placeholder="Enter major"
            name="Major"
            type="text" 
            onChange ={(e)=> setMajor(e.target.value)}/>
            </div>
           
            <div class="form-group">
            <label for="GPA">GPA:</label>
            <input class="form-control"
            placeholder="Enter student GPA"
            name="GPA"
            type="number" 
            onChange ={(e)=> setGPA(e.target.value)}/>
            </div>
            <button className="btn btn-primary" onClick={addStudent}>Add</button>

            </div>
            </div>
    )
}
export default Student;
