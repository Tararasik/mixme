import React, { useEffect, useState, ChangeEvent } from "react";

import { getAllCocktails } from "../../utils/api";
import { TCocktail } from "../Cocktail/Cocktail";

import Cocktails from "./Cocktails";

const AllCocktails = () => {
  const [cocktails, setCocktails] = useState<TCocktail[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCocktails(search);
      setCocktails(result);
    };

    fetchData();
  }, [search]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    setSearch(currentTarget.value);
  };

  return (
    <div className="cocktails">
      <input type="text" value={search} onChange={onSearchChange} />
      <Cocktails cocktails={cocktails} />
    </div>
  );
};

export default AllCocktails;
