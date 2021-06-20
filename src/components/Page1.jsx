import React from 'react'
import { useState, useEffect } from 'react';

const Page1 = () => {
const [data, setData] = useState([]);
    const fetchData = async () => {

        const response = await fetch('https://reqres.in/api/users?page=1');
        const result = await response.json();
        console.log(result.data);
        setData(result.data);
    
    }

    useEffect(() => {

        fetchData();

    }, []);


    return (
        <>
        <div className='container-fluid mt-5'>
            <div className='main-heading mb-4'>
                <h1 className='text-center' >PAGE1 API</h1>
            </div>
            <div className="table-responsive">
                <table className="table table-hover table-bordered" >
                    <thead className="thead-dark position-">
                        <tr className='header'>
                            <th >ID</th>
                            <th>EMAIL</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>AVATAR</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                         data.map((item, index) =>{
                           return (
                            <tr key={index}>
                            <th>{item.id}</th>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.avatar}</td>

                    
                        </tr>

                        )})

                    }
                    </tbody>
                </table>
            </div>
        </div>
    </>
    
    )
    }
    

export default Page1
