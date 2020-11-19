import React, { useEffect, useState } from "react";
import { withRouter, RouteProps } from "react-router-dom";

import { getCocktailsByIngredients } from "../../utils/api";
import { parseQueryString } from "../../utils/helpers";

import Cocktails from "./Cocktails";

const MyCocktails = (props: RouteProps) => {
  const [cocktails, setCocktails] = useState([]);

  const getCocktails = () => {
    const query = props.location ? props.location.search : "";
    const queryIngredients = parseQueryString(query)["ingr"] || "";
    const ingredients = queryIngredients.split(",");
    getCocktailsByIngredients(ingredients).then(setCocktails);
  };

  useEffect(getCocktails, []);

  return (
    <div className="myCocktails">
      <h1>My cocktails</h1>
      {cocktails.length > 0 ? (
        <Cocktails cocktails={cocktails} />
      ) : (
        <p>
          Your <a href="/bar">bar</a> is empy
        </p>
      )}
    </div>
  );
};

export default withRouter(MyCocktails);
