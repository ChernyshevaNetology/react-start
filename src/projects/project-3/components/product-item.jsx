import React from "react";
import {
  Checkbox,
  Grid,
  Popover,
  Text,
  Group,
} from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons-react";

export const ProductItem = ({
  formKey,
  idx,
  form,
  name,
  price,
  toolTipText,
}) => {
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
        <Checkbox
          formKey={form.key(`additionalServices.${[idx]}.${formKey}`)}
          {...form.getInputProps(`additionalServices.${[idx]}.${formKey}`)}
        />
      </Grid.Col>
      <Grid.Col span={5}>
        <Group>
          <Text>{price} ₽</Text>
        </Group>
      </Grid.Col>
    </Grid>
  );
};
