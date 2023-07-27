"use client"

import { ColumnDef } from "@tanstack/react-table"


export type ProductColumn = {
  id: string
  name: string;
  price: string;
  category: string;
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
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];