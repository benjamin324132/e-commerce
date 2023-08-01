"use client"

import { ColumnDef } from "@tanstack/react-table"
import moment from "moment";
import ProductActions from "./ProductActions";


export type ProductColumn = {
  id: string
  name: string;
  price: string;
  category: string;
  slug: string;
  createdAt: Date;
}

export const productColumns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) =>  <>${row.original.price}</>
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) =>  <>{moment(row.original.createdAt).format('MMMM DD, yyyy')}</>
  },
  {
    id:"actions",
    cell: ({ row }) => <ProductActions product={row.original} />
  }
];