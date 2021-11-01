import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://creepy-mansion-01173.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    });

    const deleteId = (id) => {
        const url = `https://creepy-mansion-01173.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted succesfully')
                    const remainning = allOrders.filter(service => service._id !== id)
                    setAllOrders(remainning);
                }

            })
    }

    const confirmID = () => {

    }


    return (
        <div className="admin-section p-5">
            <div className='text-center fw-bold text-dark'>
                <h1 className='pt-3'>ADMIN DASHBOARD</h1>
                <h4 className='pt-2 pb-2 '>TOTAL ORDERS:  {allOrders.length}</h4>
            </div>
            <div className='container'>
                <Table striped bordered hover
                    responsive="sm" className='my-3'>
                    <thead>
                        <tr>
                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className='text-dark' key={index}>BUYER</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className='text-dark' key={index}> ORDER ID </th>
                            ))}


                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className='text-dark' key={index}>PRICE</th>
                            ))}

                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className='text-dark' key={index}>STATUS</th>
                            ))}
                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className='text-dark' key={index}>CANCEL</th>
                            ))}
                            {Array.from({ length: 1 }).map((_, index) => (
                                <th className='text-dark' key={index}>CONFIRM</th>
                            ))}
                        </tr>

                    </thead>
                    {
                        allOrders.map(allOrder => (<tbody>

                            <tr>

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className='fw-bold text-dark' key={index}>{allOrder?.Name}</td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className='fw-bold text-dark' key={index}>{allOrder?._id}</td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className='fw-bold text-dark' key={index}>{allOrder?.price}</td>
                                ))}

                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td className='fw-bold text-dark' key={index}>{allOrder?.status}</td>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}><button onClick={() => deleteId(allOrder._id)} className="mx-3 text-white btn btn-danger">Cancel</button></td>
                                ))}
                                {Array.from({ length: 1 }).map((_, index) => (
                                    <td key={index}><button onClick={() => confirmID(allOrder._id)} className="mx-3 text-white btn btn-success">Confirm</button></td>
                                ))}




                            </tr>

                        </tbody>))
                    }
                </Table>
            </div>

        </div>
    );
};


export default ManageOrder;