import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthCont";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user,loading}=useContext(AuthContext);
    const axiosSecure=useAxiosSecure();
    const {data:isAdmin,isLoading:isAdminLoading}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        enabled:!loading,
        queryFn:async()=>{
            console.log('asking or checking is admin',user)
            const res=await axiosSecure.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;