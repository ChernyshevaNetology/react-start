import React from "react";
import { Checkbox, Grid, Text } from "@mantine/core";

export const PluginItem = ({ price, name }) => {
  return (
    <Grid>
      <Grid.Col span={6}>
        <Text>{name}</Text>
      </Grid.Col>
      <Grid.Col span={1} offset={1}>
        <Checkbox />
      </Grid.Col>
      <Grid.Col span={3} offset={1}>
        <Text>{price}</Text>
      </Grid.Col>

      {/*      <Grid.Col span={4}>
        <Grid.Col span={4}>
          <Text>{name}</Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Checkbox />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>{price}</Text>
        </Grid.Col>
      </Grid.Col>
      <Grid.Col span={4}>
        <Grid.Col span={4}>
          <Text>{name}</Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Checkbox />
        </Grid.Col>
        <Grid.Col span={4}>
          <Text> {price}</Text>
        </Grid.Col>
      </Grid.Col>*/}
    </Grid>
  );
};
