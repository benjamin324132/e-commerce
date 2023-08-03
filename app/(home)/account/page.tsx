import { getCurrentUser } from "@/actions/getCurrentUser";
import { getUser } from "@/actions/users";
import moment from "moment";

const Page = async () => {
  const currentUser = await getCurrentUser();
  const user = await getUser(currentUser!.id);


    return <div className="flex flex-col gap-y-4">
     <h1 className="text-3xl font-black">Information</h1>
     <div>
      <h3 className="text-xl font-semibold">User Id</h3>
       <h3 className=" text-neutral-400">{user?.id}</h3>
     </div>
     <div>
      <h3 className="text-xl font-semibold">Name</h3>
       <h3 className=" text-neutral-400">{user?.name}</h3>
     </div>
     <div>
      <h3 className="text-xl font-semibold">Email</h3>
       <h3 className=" text-neutral-400">{user?.email}</h3>
     </div>
     <div>
      <h3 className="text-xl font-semibold">Date Created</h3>
       <h3 className=" text-neutral-400">{moment(user?.createdAt).format('MMMM DD, yyyy')}</h3>
     </div>

    </div>;
  };
  
  export default Page;
  