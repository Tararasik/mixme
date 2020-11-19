import React from "react";
import { Link } from "react-router-dom";

import { slugify } from "../../utils/helpers";
import { TCocktail } from "../Cocktail/Cocktail";

type Cocktails$Props = {
  cocktails: TCocktail[];
};

const Cocktails = ({ cocktails }: Cocktails$Props) => {
  return (
    <div className="cocktails">
      <ul>
        {cocktails.map((cocktail: any) => (
          <li key={cocktail._id}>
            <Link to={`/cocktail/${slugify(cocktail.title)}`}>
              {cocktail.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cocktails;
