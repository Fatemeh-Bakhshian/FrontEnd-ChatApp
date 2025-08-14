import { UseGetAllUser } from "@/services/api/getApi";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const UserList = () => {
  const Users = UseGetAllUser();
  return (
    <div>
      <Table>
        <TableCaption>A list of all members in company</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">name</TableHead>
            <TableHead>birthdate</TableHead>
            <TableHead>roll</TableHead>
            <TableHead className="text-right">phonenumber</TableHead>
            <TableHead className="text-right">email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Users.data?.data.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="font-medium">{user.birthdate}</TableCell>
              <TableCell>{user.roll}</TableCell>
              <TableCell>{user.phonenumber}</TableCell>
              <TableCell className="text-right">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total : {Users.data?.data.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default UserList;

export function TableDemo() {}
