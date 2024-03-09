import { useCallback } from "react";
import "./filter.css";

const filterData = [
  { value: "forest" },
  { value: "sea" },
  { value: "mountain" },
  { value: "cars" },
  { value: "girls" },
  { value: "nature" },
];

export const Filter = ({ handler }) => {
  const valueHandler = useCallback(
    (event) => {
      handler(event.target.dataset.value);
    },
    [handler]
  );

  return (
    <div className={"filter-wrapper"}>
      {filterData.map((item) => (
        <button key={item.value} data-value={item.value} onClick={valueHandler}>
          {item.value}
        </button>
      ))}
    </div>
  );
};
