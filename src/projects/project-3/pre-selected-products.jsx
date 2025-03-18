import React from "react";
import { Checkbox, Group, Stack, Text } from "@mantine/core";
import { preSelectedProducts } from "./form-data";

export const PreselectedProductsForm = () => {
  return (
    <div>
      <Stack>
        {preSelectedProducts.map(({ key, name }) => (
          <Group key={key}>
            <Checkbox.Indicator checked color={"grey"} />
            <Text>{name}</Text>
          </Group>
        ))}
      </Stack>
    </div>
  );
};
