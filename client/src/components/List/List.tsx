import React from "react";
import styled from "styled-components";

type Props<T> = {
  items: T[];
  mod?: string;
  small?: boolean;
  onItemClick: (item: T) => void;
};

const handleColorType = (color?: string) => {
  switch (color) {
    case "po":
      return "var(--popular)";
    case "sp":
      return "var(--spirit)";
    case "wi":
      return "var(--wine)";
    case "be":
      return "var(--beer)";
    case "mx":
      return "var(--mixer)";
    case "ot":
      return "var(--other)";
    default:
      return "var(--primary)";
  }
};

const List = styled.div`
  padding: var(--base-line);
`;

const Item = styled.button<{ small?: boolean; mod: string }>`
  width: 100%;
  display: block;
  width: 100%;
  padding: ${({ small }) =>
    small ? "var(--base-line)" : "calc(var(--base-line) * 2)"};
  font-size: ${({ small }) => (small ? "14px" : "calc(var(--base-line) * 2)")};
  border-left: 4px solid transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  text-align: left;
  transition: background-color 0.2s;
  cursor: pointer;
  border-left-color: ${({ mod }) => handleColorType(mod)};

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default <
  T extends {
    id?: string;
    _id?: string;
    groupCode?: string;
    name?: string;
    title?: string;
  },
>({
  items,
  small,
  mod,
  onItemClick,
}: Props<T>) => {
  return (
    <List>
      <ul data-testid="groupList" className="ingredientsList__list">
        {items.map((item) => (
          <li key={item.id || item._id || ""}>
            <Item
              mod={mod || item.groupCode?.toLowerCase() || ""}
              onClick={() => onItemClick(item)}
              small={!!small}
            >
              {item.name || item.title}
            </Item>
          </li>
        ))}
      </ul>
    </List>
  );
};
