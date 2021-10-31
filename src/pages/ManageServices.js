import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://creepy-mansion-01173.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    });

    const handleDelete = (id) => {
        const url = `https://creepy-mansion-01173.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted succesfully')
                    const remainning = services.filter(service => service._id !== id)
                    setServices(remainning);
                }

            })
    }
    return (
        <div className='d-flex justify-centent-center align-items-center'>
            <div className='my-5 text-center container'>
                <h2 className='text-center' >Manage Package data</h2>
                {
                    services.map(service => <div className='text-center my-3 border border-dark p-5' key={service._id}>
                        <img className='w-25 m-1' src={service.img} alt="" />
                        <h5>{service.name}</h5>
                        <p> Description: {service.description}</p>
                        <p>Price: ${service.price}</p>
                        <NavLink to={`/update/${service._id}`}>
                            <button className='btn btn-outline-primary me-1'>Update</button>
                        </NavLink>
                        <button className='btn btn-outline-primary' onClick={() => handleDelete(service._id)}>Delete</button>

                    </div>)
                }
            </div>





        </div>
    );
};

export default ManageServices;