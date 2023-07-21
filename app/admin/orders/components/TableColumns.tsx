"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrdersColumn = {
  id: string;
  username: string;
  address: string;
  phone: string;
  totalPrice: string;
  createdAt: string;
};

export const ordersColumns: ColumnDef<OrdersColumn>[] = [
  {
    accessorKey: "username",
    header: "Name",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "totalPrice",
    header: "Total",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
