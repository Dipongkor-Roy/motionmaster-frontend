import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const MyCart = () => {
  const [cart,refetch]=useCart();
  const total=cart.reduce((sum,item)=>item.price+sum,0) //total price
  return (
 <div className="">
 <div className="px-5 uppercase h-20 flex justify-between items-center">
        <p className="text-xl mr-3">Total Items: {cart.length}</p>
        <p className="text-xl mr-3">Total Price: ${total}</p>
    {
      cart.length?    <Link to="/dashboard/payment">
      {" "}
      <button className="btn bg-green-100 btn-circle ml-4">Pay</button>
    </Link>:
    <button disabled className="btn bg-green-100 btn-circle ml-4">Pay</button>
    }
      </div>
<div className="overflow-x-auto">
      <div className="mb-5"></div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <td>#</td>
              </label>
            </th>
            <th>Name</th>
            <th>Duration</th>
            <th>Price</th>
           
          </tr>
        </thead>
        <tbody>
          {cart.map((item,index)=>(
            <tr key={item._id}>
            <th>
              <td>{index+1}</td>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>

          ))}
          
          
        </tbody>
        
      </table>
    </div>
 </div>
  );
};

export default MyCart;
