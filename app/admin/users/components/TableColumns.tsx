"use client";

import { ColumnDef } from "@tanstack/react-table";

export type UsersColumn = {
  id: string;
  username: string;
  email: string;
  createdAt: string;
};

export const usersColumns: ColumnDef<UsersColumn>[] = [
  {
    accessorKey: "username",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
