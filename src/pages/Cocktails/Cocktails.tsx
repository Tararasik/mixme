import React, { useEffect, useState, ChangeEvent } from "react";

import { getAllCocktails } from "../../utils/api";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
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
      <ul>
        {cocktails.map((cocktail: any) => (
          <li key={cocktail.name}>{cocktail.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cocktails;
