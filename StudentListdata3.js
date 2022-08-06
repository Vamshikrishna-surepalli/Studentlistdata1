import React,{useEffect, useState} from 'react';

const StudentList=(props)=> {
  const [totalData1,settotalData1]=useState([])

  useEffect(()=>{
    settotalData1(props.data)

  },[props.data])
  // console.log(props)
  return (
    <div className="App ">
      <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>date</th>
          </tr>
          {totalData1?
          totalData1.map((a)=>{
            return(
              <tr>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.date}</td>
              </tr>
            )
          }):undefined  
        }
        </tbody>
      </table>
      </>
    </div>
  )
  
}

export default StudentList;

