import React, { useState } from "react";
import {
  Button,
  Flex,
  Badge,
  Checkbox,
  Divider,
  Alert,
  Stack,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const icon = <IconInfoCircle />;

  const handleCheckboxState = () => setChecked(!checked);

  const onIncrement = () => setCount((prev) => prev + 1);
  const onDecrement = () => setCount((prev) => prev - 1);
  const onReset = () => setCount(0);
  const limiter = () => {
    if (count > 1 && count < 5) return "grey";
    if (count >= 6 && count <= 15) return "green";
    if (count > 15) return "red";
  };

  return (
    <>
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify={{ sm: "center" }}
      >
        <Checkbox
          onChange={handleCheckboxState}
          label="display counters"
          checked={checked}
        />
      </Flex>

      <Divider my="md" />
      {checked ? (
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ sm: "center" }}
        >
          <Button onClick={onIncrement}> increment</Button>
          <Button onClick={onDecrement}>Decrement</Button>
          <Button onClick={onReset}>Reset</Button>
          <Badge color="cyan" circle size="xl">
            {count}
          </Badge>
        </Flex>
      ) : null}
      <Divider my="md" />
      {count > 10 ? (
        <Stack
          h={300}
          bg="var(--mantine-color-body)"
          align="center"
          justify="center"
          gap="md"
        >
          <Alert variant="light" color="red" title="Alert title" icon={icon}>
            Счетчик не может превышать 10
          </Alert>
        </Stack>
      ) : null}
    </>
  );
};
