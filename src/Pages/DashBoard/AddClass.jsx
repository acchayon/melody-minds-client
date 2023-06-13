import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const hosting_img_token = import.meta.env.VITE_IMAGE_TOKEN;
const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit } = useForm();

    const img_host_url = `https://api.imgbb.com/1/upload?key=${hosting_img_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_host_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(responseImg => {
                if (responseImg.success) {
                    const imgUrl = responseImg.data.display_url;
                    const { name, instructor, available_seats, price } = data;
                    const classItem = { name, price: parseFloat(price), instructor, available_seats, image: imgUrl }
                    console.log(classItem);

                    axiosSecure.post('/classes', classItem)
                        .then(data => {
                            console.log('after posting new class', data.data);
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'New Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };

    return (
        <div className='w-4/6 mx-auto'>
            <h3 className='text-3xl font-bold text-center'>Add New Class</h3>

            <div className='bg-neutral-300 p-20'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> ClassName</span>
                        </label>
                        <input type="text" placeholder="class name" {...register("name", { required: true })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" {...register("instructor", { required: true })} placeholder="Instructor" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number"  {...register("price", { required: true })} placeholder="price" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number" {...register("available_seats", { required: true })} placeholder="Available Seats" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full mt-3 max-w-xs">

                        <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <button className='btn mt-3 btn-neutral'><input type="submit" value="Add Class" /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;