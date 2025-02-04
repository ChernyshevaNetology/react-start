import React, { useState } from "react";
import { SingleCounter } from "./single-counter";
import {
  Flex,
  Switch,
  Stack,
  Divider,
  Button,
  Group,
  Modal,
  useModalsStack,
} from "@mantine/core";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 3 },
  { id: 3, value: 4 },
  { id: 4, value: 0 },
  { id: 5, value: 1 },
];

export const MultipleCounters = () => {
  const [counters, setCounters] = useState(data);
  const [checked, setChecked] = useState(false);

  const onIncrement = (id) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          value: ++counter.value,
        };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };
  const onDecrement = (id) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          value: --counter.value,
        };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  const onReset = (id) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          value: 0,
        };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  const onMasterReset = () => {
    const updatedCounters = counters.map((counter) => {
      return {
        ...counter,
        value: 0,
      };
    });
    setCounters(updatedCounters);
  };

  const handleSwitchState = () => setChecked(!checked);

  return (
    <>
      <Flex
        mih={50}
        gap="xs"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Switch onChange={handleSwitchState} label="Активировать счетчики" />
      </Flex>
      <Divider my="md" />
      {checked ? (
        <Stack
          mih={50}
          gap="xs"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {counters.map((counter) => (
            <SingleCounter
              id={counter.id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onReset={onReset}
              count={counter.value}
            />
          ))}
          <Button color="red" onClick={onMasterReset}>
            MasterReset
          </Button>
        </Stack>
      ) : null}
    </>
  );
};
