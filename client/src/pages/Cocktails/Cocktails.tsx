import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { slugify } from "../../utils/helpers";
import { TCocktail } from "../Cocktail/Cocktail";
import List from "../../components/List/List";

type Props = RouteComponentProps & {
  cocktails: TCocktail[];
};

const Cocktails = ({ cocktails, history }: Props) => {
  const handleCocktailClick = (cocktail: TCocktail) =>
    history.push(`/cocktail/${slugify(cocktail.title)}`);

  return (
    <div className="cocktails">
      <List items={cocktails} onItemClick={handleCocktailClick} small />
    </div>
  );
};

export default withRouter(Cocktails);
