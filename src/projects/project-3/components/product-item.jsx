import React from "react";
import {
  Checkbox,
  Grid,
  Popover,
  Text,
  Anchor,
  Group,
  Modal,
} from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { PluginSelectForm } from "../forms/plugin-select-form";

export const ProductItem = ({
  formKey,
  form,
  name,
  price,
  toolTipText,
  pluginSelect,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Grid>
      <Modal opened={opened} onClose={close} size="90%">
        <Text>Выбрать плагин</Text>
        <PluginSelectForm />
      </Modal>
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
        /*          key={form.key(`additionalServices.${[idx]}.${key}`)}
          {...form.getInputProps(`additionalServices.${[idx]}.${key}`)}*/
        />
      </Grid.Col>
      <Grid.Col span={5}>
        <Group>
          {price ? <Text>{price} ₽</Text> : <Text>0 ₽</Text>}
          {pluginSelect ? (
            <Anchor onClick={open} underline="hover">
              Выбрать плагин
            </Anchor>
          ) : null}
        </Group>
      </Grid.Col>
    </Grid>
  );
};
