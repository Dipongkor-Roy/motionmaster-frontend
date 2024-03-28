import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllServices = () => {
  // serviceCollection[0].services
  const axiosPublic = useAxiosPublic();
  const {
    data: services = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/services");
      return res.data[0].services;
   
    },
  });

  return [services, isLoading, refetch];
};

export default useAllServices;
