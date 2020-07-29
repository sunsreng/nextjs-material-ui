import React, { FC } from "react";
import Link from "next/link";
import { User } from "../models/user.model";

interface ListItemProps {
  data: User;
}

const ListItem: FC<ListItemProps> = ({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
