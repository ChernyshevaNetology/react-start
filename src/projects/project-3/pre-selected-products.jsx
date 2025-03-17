import React from "react";
import { Checkbox, Stack } from "@mantine/core";
import { preSelectedProducts } from "./form-data";
import { useFlynaxFormContext } from "./forms/flynax-form-context";

export const PreselectedProductsForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Checkbox.Group>
        <Stack>
          {preSelectedProducts.map(({ key, name }) => (
            <Checkbox value={key} label={name} defaultChecked />
          ))}
        </Stack>
      </Checkbox.Group>
    </div>
  );
};
