import { useQuery } from "@tanstack/react-query";
import instance from "../interseptor";
import type { userType } from "../types";

export const UseGetAllUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const data = await instance.get<userType[]>("users");
      return data;
    },
  });
};
