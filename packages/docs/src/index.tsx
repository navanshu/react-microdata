import React from "react";
import ReactDOM from "react-dom/client";

//@ts-ignore
import { AgreeAction } from "schema/AgreeAction";

const Index = () => {
  return (
    <div>
      <AgreeAction>AgreeAction</AgreeAction>
    </div>
  );
};
ReactDOM
  //@ts-ignore
  .createRoot(document.getElementById("app"))
  .render(<Index />);
