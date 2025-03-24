import React from "react";
import { Checkbox, Text, Popover, Grid } from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons-react";

export const StaticProductItem = ({ name, toolTipText, price }) => {
  return (
    <Grid>
      <Grid.Col span={5}>
        <Text>{name}</Text>
      </Grid.Col>
      <Grid.Col span={1}>
        <Popover width={200} withArrow shadow="md" position={"left"}>
          <Popover.Target>
            <IconQuestionMark stroke={2} color={"#4090CE"} size={20} />
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="xs">{toolTipText}</Text>
          </Popover.Dropdown>
        </Popover>
      </Grid.Col>
      <Grid.Col span={1}>
        <Checkbox.Indicator checked color={"grey"} />
      </Grid.Col>
      <Grid.Col span={3}>
        {price ? <Text>{price}</Text> : <Text>Включено</Text>}
      </Grid.Col>
    </Grid>
  );
};
