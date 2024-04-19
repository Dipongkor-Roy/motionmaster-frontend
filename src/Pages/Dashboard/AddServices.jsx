import { useForm } from "react-hook-form";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaPlusCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const imageApiKey = import.meta.env.VITE_image_apikey;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();

  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      
      const res = await fetch(imageHostingApi, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const responseData = await res.json();
        if (responseData.data && responseData.data.display_url) {
          const serviceItem = {
            name: data.name,
            description: data.description,
            price: parseFloat(data.price),
            image: responseData.data.display_url
          };

          const serviceRes = await axiosSecure.post('/services', serviceItem);
          if (serviceRes.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} added Successfully`,
              showConfirmButton: false,
              timer: 1500
            });
          } else {
            throw new Error('Failed to add service');
          }
        } else {
          throw new Error('Failed to upload image');
        }
      } else {
        throw new Error(`Image upload failed: ${res.status} ${res.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mb-5">
        <h2 className="text-2xl font-bricolage-grotesque bg-green-100 p-2 rounded-md">Add Services</h2>
      </div>
      <div className="flex items-center justify-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-5">
            <div className="label">
              <span className="label-text">Service Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Service Name"
              required
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div>
            <label className="form-control">
              <div className="label mt-3">
                <span className="label-text">Description</span>
              </div>
              <textarea
                {...register("description")}
                className="textarea textarea-bordered h-24"
                placeholder="Description"
              ></textarea>
            </label>
            <div className="mt-5">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full"
              />
            </div>
          </div>
          <button type="submit" className="btn mt-3 rounded-md">
            Add item <FaPlusCircle />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
