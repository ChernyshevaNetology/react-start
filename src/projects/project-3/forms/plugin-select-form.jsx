import React from "react";
import { Grid } from "@mantine/core";
import { pluginList } from "../form-data";
import { useFlynaxFormContext } from "./flynax-form-context.js";
import { PluginItem } from "../components/plugin-item.jsx";

export const PluginSelectForm = () => {
  const form = useFlynaxFormContext();
  return (
    <Grid>
      {pluginList.map(({ key, name, id, price }, idx) => (
        <Grid.Col key={id} span={{ base: 12, md: 6, lg: 4 }}>
          <PluginItem
            formKey={key}
            name={name}
            price={price}
            idx={idx}
            form={form}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};
