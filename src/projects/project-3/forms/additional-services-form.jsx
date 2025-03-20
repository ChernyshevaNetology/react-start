import React from "react";
import { Text, Stack, Space } from "@mantine/core";
import { additionalServices } from "../form-data";
import { useFlynaxFormContext } from "./flynax-form-context";
import { ProductItem } from "../components/product-item";

export const AdditionalServicesForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Text>ДОПОЛНЕНИЯ И УСЛУГИ</Text>
      <Space h="lg" />
      <Stack>
        {additionalServices.map(
          ({ key, name, toolTipText, price, pluginSelect }, idx) => (
            <ProductItem
              key={key}
              name={name}
              price={price}
              idx={idx}
              toolTipText={toolTipText}
              form={form}
              pluginSelect={pluginSelect}
            />
          ),
        )}
      </Stack>
    </div>
  );
};
