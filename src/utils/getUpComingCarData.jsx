import { useQuery } from "@tanstack/react-query";

const getUpComingCarData = () => {
  let url = `http://localhost:3000/add_upcoming_car`;

  const {
    data: carData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["carData"],
    enabled: true,
    queryFn: async () => {
      const res = await fetch(url);
      return res.json();
    },
  });
  return { carData, loading, refetch };
};

export default getUpComingCarData;
