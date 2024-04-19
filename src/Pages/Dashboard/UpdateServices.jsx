import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaPlusCircle } from "react-icons/fa";

const imageApiKey = import.meta.env.VITE_image_apikey;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;
const UpdateServices = () => {
  const [service] = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, price, description } = service;
  // console.log(_id,name,price,description)
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const serviceItem = {
        name: data.name,
        description: data.description,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const serviceRes = await axiosSecure.patch(
        `/services/${_id}`,
        serviceItem
      );
      if (serviceRes.data.modifiedCount > 0) {
        //menu item added alert
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/manageServices");
      }
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mb-5">
        <h2 className="text-2xl font-bricolage-grotesque bg-green-100 p-2 rounded-md">
          Update Services
        </h2>
      </div>
      <div className="flex items-center justify-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-5">
            <div className="label">
              <span className="label-text">Service Name*</span>
            </div>
            <input
              defaultValue={name}
              {...register("name", { required: true })}
              type="text"
              placeholder="Service Name"
              required
              className="input input-bordered w-full "
            />
          </label>
          <div className="flex gap-6">
            {/* category */}

            {/* price */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                defaultValue={price}
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div>
            <label className="form-control">
              <div className="label mt-3">
                <span className="label-text">Description</span>
              </div>
              <textarea
                defaultValue={description}
                {...register("description")}
                className="textarea textarea-bordered h-24"
                placeholder="Description"
              ></textarea>
            </label>
            {/* file upload */}
            <div className="mt-5">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full"
              />
            </div>
          </div>
          <button type="submit" className="btn mt-3 rounded-md">
            Update Serivice <FaPlusCircle />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateServices;
