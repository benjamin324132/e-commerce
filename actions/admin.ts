import prismaDb from "@/lib/db";
import { getCurrentUser } from "./getCurrentUser";

export const checkAdmin = async (): Promise<boolean> => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return false;
  }

  const user = await prismaDb.user.findUnique({
    where: {
      id: currentUser.id,
    },
  });

  return user?.isAdmin || false;
};
