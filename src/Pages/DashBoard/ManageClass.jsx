import React from 'react';
import useMenu from '../../hooks/UseMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/UseAxiosSecure';

const ManageClass = () => {
    const [classes, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = c => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/classes/${c._id}`)
                    .then(res => {
                        console.log('delete res', res);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className='w-full'>
            <h2 className='text-3xl font-bold text-center'>Manage All Classes Here</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image and Name</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((c, index) => <tr key={c._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={c.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Class: {c.name}</div>
                                        <div className="text-sm">Instructor: {c.instructor}</div>
                                    </div>
                                </div>
                            </td>
                            <td className='text-right'>
                                ${c.price}
                            </td>
                            <td>{c.available_seats}+</td>
                            <td>
                                <button className="btn btn-ghost btn-xs">update</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(c)} className="btn btn-ghost btn-lg"><FaTrashAlt></FaTrashAlt></button>                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;