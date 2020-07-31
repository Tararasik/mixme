import React, { useEffect, useState } from "react";
import { withRouter, RouteChildrenProps } from "react-router-dom";

import { getCocktail } from "../../utils/api";

type Ingredient = {
  name: string;
  amount: string;
};

type Cocktail = {
  name: string;
  image: string;
  instructions: string;
  glass: string;
  ingredients: Ingredient[];
};

type Params = {
  name: string;
};

type Cocktails$Props = RouteChildrenProps<Params>;

const Cocktails = (props: Cocktails$Props) => {
  const { name } = props && props.match ? props.match.params : { name: "" };

  const [cocktail, setCocktail] = useState<Cocktail>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCocktail(name.toLowerCase());
      setCocktail(result);
    };

    fetchData();
  }, [name]);

  if (!cocktail) {
    return null;
  }

  return (
    <div className="cocktail">
      <h1>{cocktail.name}</h1>
      {cocktail.image && <img src={cocktail.image} alt="" />}
      <p>{cocktail.glass}</p>
      <p>{cocktail.instructions}</p>
      <ul>
        {cocktail.ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name} {ingredient.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(Cocktails);
