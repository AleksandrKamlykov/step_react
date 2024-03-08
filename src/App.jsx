import "./App.css";

const App = () => {
  const formatter = new Intl.DateTimeFormat("uk-UA", {
    minute: "2-digit",
    second: "2-digit",
  });

  return <div className={"timer"}></div>;
};

export default App;
