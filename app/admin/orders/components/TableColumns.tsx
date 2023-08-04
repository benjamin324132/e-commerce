"use client";

import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

export type OrdersColumn = {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  //totalPrice: string;
  createdAt: Date;
};

export const ordersColumns: ColumnDef<OrdersColumn>[] = [
  {
    accessorKey: "name",
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
    accessorKey: "email",
    header: "Eamil",
  },
 /* {
    accessorKey: "totalPrice",
    header: "Total",
  },*/
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) =>  <>{moment(row.original.createdAt).format('MMMM DD, yyyy')}</>
  },
];
