import React, { useEffect, useState } from "react";
import { withRouter, RouteChildrenProps } from "react-router-dom";

import { getCocktail } from "../../utils/api";

export type TIngredient = {
  name: string;
  amount: string;
  measure: string;
};

export type TCocktail = {
  _id: string;
  title: string;
  image: string;
  method: string;
  glassType: string;
  ingredients: TIngredient[];
};

type Params = {
  name: string;
};

type Cocktails$Props = RouteChildrenProps<Params>;

const Cocktails = (props: Cocktails$Props) => {
  const { name } = props && props.match ? props.match.params : { name: "" };

  const [cocktail, setCocktail] = useState<TCocktail>();

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
      <h1>{cocktail.title}</h1>
      {cocktail.image && <img src={cocktail.image} alt="" />}
      <p>{cocktail.glassType}</p>
      <p>{cocktail.method}</p>
      <ul>
        {cocktail.ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name}: {ingredient.amount} {ingredient.measure}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(Cocktails);
