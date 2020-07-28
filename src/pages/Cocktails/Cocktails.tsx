import React, { useEffect, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";

import { getAllCocktails } from "../../utils/api";

const slugify = (name: string): string => name.toLowerCase().replace(/ /g, "-");

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
          <li key={cocktail.name}>
            <Link to={`/cocktail/${slugify(cocktail.name)}`}>
              {cocktail.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cocktails;
