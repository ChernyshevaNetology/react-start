import React from "react";
import {
  Grid,
  Popover,
  Text,
  Anchor,
  Group,
  Modal,
  Button,
  Center,
  Space,
} from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { PluginSelectForm } from "../forms/plugin-select-form";

export const PluginSelectItemLink = ({ name, toolTipText }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Grid>
      <Modal
        opened={opened}
        onClose={close}
        overlayProps={{
          backgroundOpacity: 0.5,
        }}
        size={"70%"}
        padding={"lg"}
      >
        <Group>
          <Text fw={500}>Выбрать плагины</Text>
          <Anchor>Выделить все</Anchor>
          <Text>/</Text>
          <Anchor>Снять выделение</Anchor>
        </Group>
        <Space h="md" />
        <PluginSelectForm />
        <Space h="md" />
        <Center>
          <Button onClick={close}>Готово</Button>
        </Center>
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
      <Grid.Col span={5} offset={1}>
        <Group>
          <Text>0 ₽</Text>
          <Anchor onClick={open} underline="hover">
            Выбрать плагин
          </Anchor>
        </Group>
      </Grid.Col>
    </Grid>
  );
};
