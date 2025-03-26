import React from "react";
import { Group } from "@mantine/core";
import { pluginList } from "../form-data";
import { useFlynaxFormContext } from "./flynax-form-context.js";
import { PluginItem } from "../components/plugin-item.jsx";

export const PluginSelectForm = () => {
  const form = useFlynaxFormContext();
  return (
    <Group>
      {pluginList.map(({ key, name, price }, idx) => (
        <PluginItem
          name={name}
          price={price}
          key={form.key(`pluginList.${[idx]}.${key}`)}
          {...form.getInputProps(`pluginList.${[idx]}.${key}`)}
        />
      ))}
    </Group>
  );
};
