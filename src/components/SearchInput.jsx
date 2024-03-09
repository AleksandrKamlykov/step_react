import { useCallback } from "react";
import "./searchInput.css";

export const SearchInput = ({ value, handler, onSearch }) => {
  const valueHandler = useCallback(
    (event) => {
      handler(event.target.value);
    },
    [handler]
  );
  const clearValue = () => handler("");

  return (
    <div className={"search-input-wrapper"}>
      <input onChange={valueHandler} value={value} type="text" />
      <button onClick={onSearch}>search</button>
      <button onClick={clearValue}>clear</button>
    </div>
  );
};
