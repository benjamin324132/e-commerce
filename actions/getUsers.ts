import prismaDb from "@/lib/db";

export const getUsers = async () => {
  try {
    const users = await prismaDb.user.findMany();

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
