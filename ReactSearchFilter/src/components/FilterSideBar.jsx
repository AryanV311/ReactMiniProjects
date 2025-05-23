import React, { useState } from "react";
import "./FilterBar.css";
import { brands, colors, materials, products, sizes } from "../assets/data";

const filterOption = {
  material: materials,
  color: colors,
  brand: brands,
  size: sizes,
};

export const FilterSideBar = () => {
  const [selected, setSelected] = useState({
    material: [],
    brand: [],
    color: [],
    size: [],
  });

  const [searchTxt, setSearchTxt] = useState({
    materials: "",
    brnad: "",
    color: "",
    size: "",
  });

  console.log(selected);

  // console.log("txtxtx", searchTxt);

  const handleSearch = (category) => {
    const input = searchTxt[category].trim().toLowerCase();
    // console.log("object", input);
    if (!input) return;

    const isMatch = filterOption[category].find(
      (item) => item.toLowerCase() === input
    );

    if (isMatch && !selected[category].includes(isMatch)) {
      setSelected((prev) => ({
        ...prev,
        [category]: [...prev[category], isMatch],
      }));
    }

    setSearchTxt((prev) => ({ ...prev, [category]: "" }));
  };

  const handleCheckBoxUnchage = (category, value) => {
    const isSelected = selected[category].includes(value);
    // console.log(isSelected);

    setSelected((prev) => ({
      ...prev,
      [category]: isSelected
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const removeTag = (category, val) => {
    setSelected((prev) =>({
        ...prev,
        [category]:prev[category].filter((item) => item !== val)
    }))
  }

  const removeAllTag = () => {
    setSelected({
         material: [],
    brand: [],
    color: [],
    size: [],
    })
  }

  const searchedData = products.map((product) => {
    return Object.entries(selected).every(([category, selectedvalues]) => {
        if(selectedvalues.length === 0) return true;

        const productvalue = String(product[category].toLowerCase)
        return selectedvalues.some((val) => productvalue === val.toLowerCase())
    })
  })

  return (
    <div className="main-conatiner">
      <div className="filter-container">
        <div className="selected-filter">
          <div className="selected-head">
            <h3>Selected tags</h3>
            <button onClick={removeAllTag}>Clear All</button>
          </div>
          <div className="tag-container">
            {Object.entries(selected).flatMap(([category, values]) => (     
              values.map((val) => {
                return(
                <div className="selected-tag" key={`${category}-${val}`}>
                  {category}: {val}
                  <button className="btn" onClick={() => removeTag(category, val)}>x</button>
                </div>
                )
              })
            ))}
          </div>
        </div>
        <h2>Filters</h2>
        {Object.keys(filterOption).map((category) => {
          return (
            <div key={category} className="categories">
              <h3 style={{ textTransform: "capitalize" }}>{category}</h3>
              <div className="search-sec">
                <input
                  type="text"
                  placeholder={`search ${category}`}
                  value={searchTxt[category]}
                  onChange={(e) =>
                    setSearchTxt((prev) => ({
                      ...prev,
                      [category]: e.target.value,
                    }))
                  }
                />
                <button onClick={() => handleSearch(category)}>Search</button>
              </div>
              <div className="filter-list">
                {filterOption[category].map((value) => {
                  return (
                    <label key={value} className="label">
                      <input
                        type="checkbox"
                        checked={selected[category].includes(value)}
                        onChange={() => handleCheckBoxUnchage(category, value)}
                      />{" "}
                      {value}
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
