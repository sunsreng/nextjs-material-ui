import { User } from "../models/user.model";
import { FC } from "react";
import ListItem from "./list-item";

interface ListProps {
  items: User[];
}

const List: FC<ListProps> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
