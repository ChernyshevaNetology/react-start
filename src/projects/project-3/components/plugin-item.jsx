import React from "react";
import { Checkbox, Text, Grid } from "@mantine/core";

export const PluginItem = ({ formKey, idx, form, price, name }) => {
  return (
    <>
      <Grid>
        <Grid.Col span={5}>
          <Text>{name}</Text>
        </Grid.Col>
        <Grid.Col span={1}>
          <Checkbox
            formKey={form.key(`pluginList.${[idx]}.${formKey}`)}
            {...form.getInputProps(`pluginList.${[idx]}.${formKey}`)}
          />
        </Grid.Col>
        <Grid.Col offset={1} span={3}>
          <Text>{price} ₽</Text>
        </Grid.Col>
      </Grid>
    </>
  );
};
