import { DataTable } from "@/components/DataTable";
import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { usersColumns } from "./components/TableColumns";
import { getUsers } from "@/actions/users";

const data = [
  {
    id: "1",
    username: "Jhony",
    email: "user@gmail.com",
    createdAt: "2022",
  },
  {
    id: "2",
    username: "Mabel",
    email: "user@gmail.com",
    createdAt: "2022",
  },
  {
    id: "3",
    username: "Rob",
    email: "user@gmail.com",
    createdAt: "2022",
  },
];
const Page = async () => {
  const users = await getUsers();
  return (
    <div>
      <div className="flex items-start">
        <Heading title="Users" subtitle="Manage your users" />
      </div>
      <Separator className="my-6" />
      <DataTable searchKey="name" data={users} columns={usersColumns} />
    </div>
  );
};

export default Page;
