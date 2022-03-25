import React from 'react'
import {Dropdown} from 'react-bootstrap';


const Science = ({science}) => {
    return (
        <div className='deptname'>
            {
                science.map((dep)=>{
                    return(
                      <div key ={dep} className='eachdep'>                      <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        {dep}
                      </Dropdown.Toggle>
                    
                      <Dropdown.Menu>
                        <Dropdown.Item href={dep.slice(0,3)+",Y-1,T-1"}>Y-1,T-1</Dropdown.Item>
                        <Dropdown.Item href={dep.slice(0,3)+",Y-1,T-2"}>Y-1,T-2</Dropdown.Item>
                        <Dropdown.Item href={dep.slice(0,3)+",Y-2,T-1"}>Y-2,T-1</Dropdown.Item>
                        <Dropdown.Item href={dep.slice(0,3)+",Y-2,T-2"}>Y-2,T-2</Dropdown.Item>
                        <Dropdown.Item href={dep.slice(0,3)+",Y-3,T-1"}>Y-3,T-1</Dropdown.Item>
                        <Dropdown.Item href={dep.slice(0,3)+",Y-3,T-2"}>Y-3,T-2</Dropdown.Item>
                        <Dropdown.Item href={dep.slice(0,3)+",Y-4,T-1"}>Y-4,T-1</Dropdown.Item>
                        <Dropdown.Item href={dep.slice(0,3)+",Y-4,T-2"}>Y-4,T-2</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown></div>
                    )
                })
            }
            
        </div>
    )
}

export default Science