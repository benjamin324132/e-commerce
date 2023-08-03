import prismaDb from "@/lib/db";

export const getUsers = async () => {
  try {
    const users = await prismaDb.user.findMany({
      take: 10
    });

    return users.map((user) => ({
      id: user.id,
      name: user?.name || "Name",
      email: user?.email || "Email",
      createdAt: user.createdAt.toString(),
    }));
  } catch (error) {
    throw new Error("Something went wrong;");
  }
};

export const getUser = async (id: string) => {
  try {
    const user = await prismaDb.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
