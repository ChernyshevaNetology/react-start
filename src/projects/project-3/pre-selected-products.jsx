import React from "react";
import { preSelectedProducts } from "./form-data";
import { Stack } from "@mantine/core";
import { StaticProductItem } from "./components/static-product-item.jsx";

export const PreselectedProductsForm = () => {
  return (
    <Stack>
      {preSelectedProducts.map(({ key, name, price, toolTipText }) => (
        <StaticProductItem
          key={key}
          name={name}
          price={price}
          toolTipText={toolTipText}
        />
      ))}
    </Stack>
  );
};
