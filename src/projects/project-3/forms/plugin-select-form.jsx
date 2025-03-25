import React from "react";
import { Group, Checkbox } from "@mantine/core";
import { pluginList } from "../form-data";
import { useFlynaxFormContext } from "./flynax-form-context.js";

export const PluginSelectForm = () => {
  const form = useFlynaxFormContext();
  return (
    <Group>
      {pluginList.map(({ form, key, name, price }, idx) => (
        <Checkbox
          name={name}
          price={price}
          key={form.key(`pluginList.${[idx]}.${key}`)}
          {...form.getInputProps(`pluginList.${[idx]}.${key}`)}
        />
      ))}
    </Group>
  );
};
