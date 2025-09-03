import { useQuery } from "@tanstack/react-query";
import instance from "../interseptor";
import type { reporJsonType, reportByIdType, userJsonType } from "../types";

export const UseGetAllUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const data = await instance.get<userJsonType>("/users");
      console.log(data.data.data.users);
      return data.data.data;
    },
  });
};

export const UseGetAllReports = () => {
  return useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const data = await instance.get<reporJsonType>("/reports");
      console.log(data.data.data.reports);

      return data.data.data;
    },
  });
};

export const UseGetReportById = (id: number) => {
  return useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const data = await instance.get<reportByIdType>(`/reports/${id}`);
      console.log(data.data.data.report);
      return data.data.data;
    },
  });
};
