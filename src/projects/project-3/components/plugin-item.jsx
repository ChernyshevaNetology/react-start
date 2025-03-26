import React from "react";
import { Checkbox, Group, Text, Grid } from "@mantine/core";

export const PluginItem = ({ price, name }) => {
  return (
    <>
      <Grid>
        <Grid.Col span={5}>
          <Text>{name}</Text>
        </Grid.Col>
        <Grid.Col span={1}>
          <Checkbox />
        </Grid.Col>
        <Grid.Col offset={1} span={3}>
          <Text>{price} ₽</Text>
        </Grid.Col>
      </Grid>
    </>
  );
};
