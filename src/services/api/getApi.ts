import { useQuery } from "@tanstack/react-query";
import instance from "../interseptor";
import type { reporJsonType, userJsonType } from "../types";

export const UseGetAllUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const data = await instance.get<userJsonType>("/users");
      console.log(data.data.data)
      return data.data.data;
    },
  });
};

export const UseGetAllReports = () => {
  return useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const data = await instance.get<reporJsonType>("/reports");
      console.log(data.data.data)
      return data.data.data;
    },
  });
};
