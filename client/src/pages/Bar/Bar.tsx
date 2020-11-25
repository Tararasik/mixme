import React, { useState } from "react";

import { getIngredients } from "../../utils/api";
import { slugify } from "../../utils/helpers";

import "./Bar.scss";

type Item = {
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

  const loadL1Ingredients = (groupCode: string) => {
    setIngredientsGroup(ingredientList.find((g) => g.groupCode === groupCode));
    setL2Ingredients([]);

    getIngredients(groupCode).then((res) => {
      if (groupCode === "PO") {
        setL2Ingredients(res);
      } else {
        setL1Ingredients(res);
      }
    });
  };

  const loadL2Ingredients = (groupCode: string, parentId: string) => {
    getIngredients(groupCode, parentId).then(setL2Ingredients);
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

  return (
    <div className="bar">
      <div className="bar__ingredients">
        <div className="bar__ingredientsList">
          <ul data-testid="groupList" className="ingredientsList">
            {ingredientList.map((item) => (
              <li key={item.groupCode}>
                <button
                  onClick={() => loadL1Ingredients(item.groupCode)}
                  className={`ingredientsList__button ingredientsList__button_${item.groupCode.toLowerCase()}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bar__ingredientsList">
          <ul>
            {l1Ingredients.map((l1Item: Item) => (
              <li key={l1Item.id}>
                <button
                  onClick={() => loadL2Ingredients(l1Item.groupCode, l1Item.id)}
                  className={`ingredientsList__button ingredientsList__button_small ingredientsList__button_${activeGroupCode}`}
                >
                  {l1Item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bar__ingredientsList">
          <ul>
            {l2Ingredients.map((l2Item: Item) => (
              <li key={l2Item.id}>
                <button
                  onClick={() => toggleBarItem(l2Item)}
                  className={`ingredientsList__button ingredientsList__button_small ingredientsList__button_${activeGroupCode}`}
                >
                  {l2Item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bar__ingredientsList">
          <h4>My bar</h4>
          {barItems.length === 0 && <p>Fill in your bar</p>}
          <ul>
            {barItems.map((barItem: Item) => (
              <li key={barItem.id}>
                <button
                  onClick={() => toggleBarItem(barItem)}
                  className={`ingredientsList__button ingredientsList__button_small ingredientsList__button_${barItem.groupCode.toLowerCase()}`}
                >
                  {barItem.name}
                </button>
              </li>
            ))}
          </ul>

          {barItems.length > 0 && (
            <a
              href={`/cocktails/my?ingr=${slugify(
                barItems.map((item) => item.name.toLowerCase()).join(","),
              )}`}
            >
              Get cocktails
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
