import React from "react";
import { TextInput, Text, Popover, Grid } from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons-react";

export const CustomerFieldItem = ({
  formKey,
  idx,
  form,
  name,
  toolTipText,
}) => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <Text>{name}</Text>
      </Grid.Col>
      <Grid.Col span={1} offset={1}>
        {toolTipText ? (
          <Popover width={200} withArrow shadow="md" position={"left"}>
            <Popover.Target>
              <IconQuestionMark stroke={2} color={"#4090CE"} size={20} />
            </Popover.Target>
            <Popover.Dropdown>
              <Text size="xs">{toolTipText}</Text>
            </Popover.Dropdown>
          </Popover>
        ) : null}
      </Grid.Col>
      <Grid.Col span={7}>
        <TextInput
          key={form.key(`customerDetails.${[idx]}.${formKey}`)}
          {...form.getInputProps(`customerDetails.${[idx]}.${formKey}`)}
        />
      </Grid.Col>
    </Grid>
  );
};
