import { useForm } from "react-hook-form";
import useAxiosPublic from "../hook/useAxiosPublic";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../hook/useAxiosSecure";
import Swal from "sweetalert2";



const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const {register,handleSubmit,reset}=useForm();
    const axiosPublic=useAxiosPublic();
    const axiosSecure=useAxiosSecure();
    const onSubmit=async(data)=>{
        console.log(data);
        // //image upload to imgbb and then get an url
        const imageFile={image:data.image[0]}
        const res=await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-type':'multipart/form-data'
            }
        });
        console.log(res.data);
        if(res.data.success){
            const menuItem={
                title:data.name,
                category:data.category,
                price:parseFloat(data.price),
                rating:parseFloat(data.rating),
                description:data.description,
                distributor:data.distributor,
                ingredient:data.ingredient,
                post:data.time,
                image:res.data.data.display_url
            } 
            const menuRes=await axiosSecure.post('/menu',menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                //show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with image url',res.data);
    }

    return (
        <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Meal title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Meal Title"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Meal Type*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a meal type</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                               
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                               {/*Ingredients */}
                               <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Ingredients*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Ingredients"
                                {...register('ingredients', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                                     {/*Rating*/}
                                     <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Rating*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Rating"
                                {...register('Rating', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                                    {/*Time*/}
                                    <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Time*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Time"
                                {...register('time', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                                    {/*Admin Name*/}
                                    <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Admin Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Admin Name"
                                {...register('distributor', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                                    {/*email*/}
                                    <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Admin Email*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email admin"
                                {...register('aemail', { required: true })}
                                className="input input-bordered w-full" />
                        </div>


                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
    );
};

export default AddItems;