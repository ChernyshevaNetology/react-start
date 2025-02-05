import React from "react";
import {
  Button,
  Badge,
  Flex,
  Stack,
  Switch,
  Divider,
  Group,
  Modal,
  useModalsStack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const SingleCounter = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
  handleCountRemove,
  id,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Flex
      mih={50}
      gap="xs"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Button
        variant="filled"
        onClick={() => {
          onIncrement(id);
        }}
      >
        Increment
      </Button>
      <Button
        variant="filled"
        onClick={() => {
          onDecrement(id);
        }}
      >
        Decrement
      </Button>
      <Button
        variant="filled"
        onClick={() => {
          onReset(id);
        }}
      >
        Reset
      </Button>
      <Button variant="filled" color="orange" onClick={open}>
        Удалить счетчик
      </Button>
      <Modal title="Удалить счетчик?" opened={opened} onClose={close}>
        Вы уверены, что хотите удалить счетчик под номером {id} и с счетом{" "}
        {count}?
        <Group mt="lg" justify="flex-end">
          <Button variant="default" onClick={close}>
            Отменить
          </Button>
          <Button
            color="red"
            onClick={() => {
              handleCountRemove(id);
            }}
          >
            Подветвердить
          </Button>
        </Group>
      </Modal>
      <Badge size="xl" circle>
        {count}
      </Badge>
    </Flex>
  );
};
