import "./App.css";
import { MultipleCounters } from "./projects/project-2/multiple-counters";
import { ProductsOrderPage } from "./projects/project-3/products-order-page";

export const App = () => {
  return (
    <div className={"container"}>
      <ProductsOrderPage />
    </div>
  );
};
