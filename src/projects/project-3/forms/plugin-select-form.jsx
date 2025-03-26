import React from "react";
import { Group, Grid } from "@mantine/core";
import { pluginList } from "../form-data";
import { useFlynaxFormContext } from "./flynax-form-context.js";
import { PluginItem } from "../components/plugin-item.jsx";

export const PluginSelectForm = () => {
  const form = useFlynaxFormContext();
  return (
    <Grid>
      {pluginList.map(({ key, name, price }, idx) => (
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <PluginItem
            name={name}
            price={price}
            key={form.key(`pluginList.${[idx]}.${key}`)}
            {...form.getInputProps(`pluginList.${[idx]}.${key}`)}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};
