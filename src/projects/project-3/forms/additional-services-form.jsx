import React from "react";
import { Text, Stack, Space, Divider } from "@mantine/core";
import { additionalServices } from "../form-data";
import { useFlynaxFormContext } from "./flynax-form-context";
import { ProductItem } from "../components/product-item";
import { PluginSelectItemLink } from "../components/plugin-select-item-link";

export const AdditionalServicesForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Text fw={500}>ДОПОЛНЕНИЯ И УСЛУГИ</Text>
      <Divider />
      <Space h="lg" />
      <Stack>
        {additionalServices.map(
          ({ id, key, name, toolTipText, price, pluginSelect }, idx) => {
            if (pluginSelect) {
              return (
                <PluginSelectItemLink key={id} name={name} toolTipText={toolTipText} />
              );
            }
            return (
              <ProductItem
                key={id}
                formKey={key}
                name={name}
                price={price}
                idx={idx}
                toolTipText={toolTipText}
                form={form}
                pluginSelect={pluginSelect}
              />
            );
          },
        )}
      </Stack>
    </div>
  );
};
