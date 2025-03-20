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

export const ProductItem = ({
  key,
  name,
  price,
  toolTipText,
  pluginSelect,
  idx,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Grid>
      <Modal title="Удалить счетчик?" opened={opened} onClose={close}>
        <Text>"Премиальные плагины"</Text>
        {/* <PluginsList />*/}
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
