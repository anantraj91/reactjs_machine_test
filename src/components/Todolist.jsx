import React from 'react'
import { useState } from 'react'

const Todolist = () => {
    
    const [inputData, setInputData]=useState('');
    const [items, setItems]=useState([]);


    const addItem = () =>{
        if(!inputData){

        }else{
        setItems([...items,inputData]);
        setInputData('');
        }
    }

    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='main-heading mb-4'>
                    <h1 className='text-center' >TODO LIST</h1>
                </div>
                <div className='row'>
                    <div className='col-4 mx-auto center'>
                        <div class="input-group mb-3">
                        <input type="text" class="form-control" 
                        placeholder="Add Items..." 
                        value={inputData} 
                        onChange={(event)=> setInputData(event.target.value)} />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" onClick={addItem}>Add</button>
                            </div>
                        </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Items</th>

                                </tr>
                            </thead>
                            <tbody>
                                {  items.map((data,index) =>{
                                   return(
                                
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{data}</td>

                                </tr>
                                )
                            })
                            }
                            </tbody>
                        </table>

                    </div>
                </div>


            </div>


        </>
    )
}

export default Todolist
