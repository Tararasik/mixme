import React, { useState } from "react";

import { getIngredients } from "../../utils/api";
import { slugify } from "../../utils/helpers";
import List from "../../components/List/List";

import "./Bar.scss";

export type Item = {
  id: string;
  groupCode: string;
  name: string;
};

const ingredientList: Item[] = [
  { id: "1", name: "Popular ingredients", groupCode: "PO" },
  { id: "2", name: "Spirits", groupCode: "SP" },
  { id: "3", name: "Liqueurs", groupCode: "LQ" },
  { id: "4", name: "Wines and Champagnes", groupCode: "WI" },
  { id: "5", name: "Beers and Ciders", groupCode: "BE" },
  { id: "6", name: "Mixers", groupCode: "MX" },
  { id: "7", name: "Others", groupCode: "OT" },
];

export default () => {
  const [ingredientsGroup, setIngredientsGroup] = useState<Item>();
  const [l1Ingredients, setL1Ingredients] = useState<Item[]>([]);
  const [l2Ingredients, setL2Ingredients] = useState<Item[]>([]);
  const [barItems, setBarItems] = useState<Item[]>([]);

  const loadL1Ingredients = (item: Item) => {
    setIngredientsGroup(
      ingredientList.find((g) => g.groupCode === item.groupCode),
    );
    setL2Ingredients([]);

    getIngredients(item.groupCode).then((res) => {
      if (item.groupCode.toLowerCase() === "po") {
        setL2Ingredients(res);
      } else {
        setL1Ingredients(res);
        setL2Ingredients([]);
      }
    });
  };

  const loadL2Ingredients = (item: Item) => {
    getIngredients(item.groupCode, item.id).then(setL2Ingredients);
  };

  const toggleBarItem = (item: Item) => {
    let prevBarItems = [...barItems];

    if (prevBarItems.find((i) => i.id === item.id)) {
      prevBarItems = prevBarItems.filter((i) => i.id !== item.id);
    } else {
      prevBarItems.push(item);
    }
    setBarItems(prevBarItems);
  };

  const activeGroupCode = ingredientsGroup
    ? ingredientsGroup.groupCode.toLowerCase()
    : "";

  const getCocktailsUrl = () =>
    `/cocktails/my?ingr=${slugify(
      barItems.map((item) => item.name.toLowerCase()).join(","),
    )}`;

  return (
    <div className="bar">
      <div className="bar__ingredients">
        <div className="bar__ingredientsList">
          <List items={ingredientList} onItemClick={loadL1Ingredients} />
        </div>

        <div className="bar__ingredientsList">
          <List
            items={l1Ingredients}
            onItemClick={loadL2Ingredients}
            mod={activeGroupCode}
            small
          />
        </div>

        <div className="bar__ingredientsList">
          <List
            items={l2Ingredients}
            onItemClick={toggleBarItem}
            mod={activeGroupCode}
            small
          />
        </div>

        <div className="bar__ingredientsList">
          <h4>My bar</h4>
          {barItems.length === 0 && <p>Add ingredients to your bar</p>}
          <List items={barItems} onItemClick={toggleBarItem} small />
          {barItems.length > 0 && (
            <a
              href={getCocktailsUrl()}
              className="ingredientsList__getCocktails"
            >
              Get cocktails
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
