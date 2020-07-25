import React, { useState } from "react";
import api from "../../utils/api";

import "./Bar.scss";

type Item = {
  id: string;
  groupCode: string;
  name: string;
};

const ingredientList = [
  { id: 1, name: "Popular ingredients", groupCode: "PO" },
  { id: 2, name: "Spirits", groupCode: "SP" },
  { id: 3, name: "Liqueurs", groupCode: "LQ" },
  { id: 4, name: "Wines and Champagnes", groupCode: "WI" },
  { id: 5, name: "Beers and Ciders", groupCode: "BE" },
  { id: 6, name: "Mixers", groupCode: "MX" },
  { id: 7, name: "Others", groupCode: "OT" },
];

export default () => {
  const [l1Ingredients, setL1Ingredients] = useState<Item[]>([]);
  const [l2Ingredients, setL2Ingredients] = useState<Item[]>([]);
  const [barItems, setBarItems] = useState<Item[]>([]);

  const loadL1Ingredients = (groupCode: string) => {
    setL2Ingredients([]);
    api.getIngredients(groupCode).then(setL1Ingredients);
  };

  const loadL2Ingredients = (groupCode: string, parentId: string) => {
    api.getIngredients(groupCode, parentId).then(setL2Ingredients);
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

  const getCocktails = () => {};

  return (
    <div className="bar">
      <div className="bar__ingredients">
        <div className="bar__ingredientsList">
          <ul data-testid="groupList">
            {ingredientList.map((item) => (
              <li key={item.groupCode}>
                <button onClick={() => loadL1Ingredients(item.groupCode)}>
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
                <button onClick={() => toggleBarItem(l2Item)}>
                  {l2Item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bar__ingredientsList">
          <h4>My bar</h4>
          <ul>
            {barItems.map((barItem: Item) => (
              <li key={barItem.id}>
                <button onClick={() => toggleBarItem(barItem)}>
                  {barItem.name}
                </button>
              </li>
            ))}
          </ul>

          {barItems.length > 0 && (
            <button type="button" onClick={getCocktails}>
              Get cocktails
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
