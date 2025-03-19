import React from "react";
import { Checkbox, Group, Stack, Text, Popover } from "@mantine/core";
import { preSelectedProducts } from "./form-data";
import { IconQuestionMark } from "@tabler/icons-react";

export const PreselectedProductsForm = () => {
  return (
    <div>
      <Stack>
        {preSelectedProducts.map(({ key, name, price, toolTipText }) => (
          <Group key={key}>
            <Text>{name}</Text>
            <Popover width={200} withArrow shadow="md" position={"left"}>
              <Popover.Target>
                <IconQuestionMark stroke={2} color={"#4090CE"} size={20} />
              </Popover.Target>
              <Popover.Dropdown>
                <Text size="xs">{toolTipText}</Text>
              </Popover.Dropdown>
            </Popover>

            <Checkbox.Indicator checked color={"grey"} />
            <Text>{price} ₽</Text>
          </Group>
        ))}
      </Stack>
    </div>
  );
};
