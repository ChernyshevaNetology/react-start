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

export const SingleCounter = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
  id,
}) => {
  const stack = useModalsStack([
    "delete-page",
    "confirm-action",
    "really-confirm-action",
  ]);
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
      <Modal.Stack>
        <Modal {...stack.register("confirm-action")} title="Delete button">
          Are you sure you want to perform this action? This action cannot be
          undone. If you are sure, press confirm button below.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button
              onClick={() => stack.open("really-confirm-action")}
              color="red"
            >
              Confirm
            </Button>
          </Group>
        </Modal>
      </Modal.Stack>
      <Button
        variant="filled"
        color="orange"
        onClick={() => stack.open("delete-page")}
      >
        Trash bin
      </Button>
      <Badge size="xl" circle>
        {count}
      </Badge>
    </Flex>
  );
};
