import React from 'react';
import { useState, useEffect } from 'react';

const Page2 = () => {

    const [item, setItem] = useState([]);
    const fetchData = async () => {

        const response = await fetch('https://reqres.in/api/users?page=2');
        const result = await response.json();
        console.log(result.data);
        setItem(result.data);
    
    }

    useEffect(() => {

        fetchData();

    }, []);


    return (
        <>
        <div className='container-fluid mt-5'>
            <div className='main-heading mb-4'>
                <h1 className='text-center' >PAGE2 API</h1>
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
                         item.map((data, index) =>{
                           return (
                            <tr key={index}>
                            <th>{data.id}</th>
                            <td>{data.email}</td>
                            <td>{data.first_name}</td>
                            <td>{data.last_name}</td>
                            <td>{data.avatar}</td>

                    
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

export default Page2
