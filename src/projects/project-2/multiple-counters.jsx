import React, { useState } from "react";
import { SingleCounter } from "./single-counter";
import {
  Flex,
  Switch,
  Stack,
  Divider,
  Button,
  Modal,
  Select,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { nanoid } from "nanoid";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 3 },
  { id: 3, value: 4 },
  { id: 4, value: 0 },
  { id: 5, value: 1 },
];

const middleWareCode = (store, filter, sortOption) => {
  let preparedCounters = [...store];

  if (filter === "negative") {
    preparedCounters = preparedCounters.filter((product) => product.value < 0);
  }
  if (filter === "zero") {
    preparedCounters = preparedCounters.filter(
      (product) => product.value === 0,
    );
  }
  if (filter === "moreThanOne") {
    preparedCounters = preparedCounters.filter((product) => product.value > 1);
  }
  if (filter === "moreThanTen") {
    preparedCounters = preparedCounters.filter((product) => product.value > 10);
  }
  if (sortOption === "descending") {
    preparedCounters.sort((a, b) => b.value - a.value);
  }
  if (sortOption === "ascending") {
    preparedCounters.sort((a, b) => a.value - b.value);
  }
  return preparedCounters;
};

export const MultipleCounters = () => {
  const [counters, setCounters] = useState(data);
  const [checked, setChecked] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [filter, setFilter] = useState(null);
  const [sortingOption, setSortingOption] = useState(null);

  const counterProcessed = middleWareCode(counters, filter, sortingOption);

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
    close();
  };

  const handleCountRemove = (id) => {
    const updatedCounters = counters.filter((counter) => {
      return counter.id !== id;
    });
    setCounters(updatedCounters);
    close();
  };

  const onAdd = () => {
    setCounters([
      ...counters,
      { id: nanoid(), value: Math.floor(Math.random() * 6) },
    ]);
  };

  const onSetFilter = (filter) => {
    setFilter(filter);
  };

  const onSetSortingOption = (sortingOption) => {
    setSortingOption(sortingOption);
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
      <Flex
        mih={50}
        gap="xs"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Select
          label="Отфильтровать"
          placeholder="Выбрать"
          data={[
            { label: "Все", value: "all" },
            { label: "Отрицательные", value: "negative" },
            { label: "Нулевые", value: "zero" },
            { label: "Более одного", value: "moreThanOne" },
            { label: "Более десяти", value: "moreThanTen" },
          ]}
          value={filter}
          onChange={onSetFilter}
        />
        <Select
          label="Отсортировать"
          placeholder="Выбрать"
          data={[
            { label: "По возрастанию", value: "ascending" },
            { label: "По убыванию", value: "descending" },
          ]}
          value={sortingOption}
          onChange={onSetSortingOption}
        />
      </Flex>
      <Modal title="Удалить счетчик?" opened={opened} onClose={close}>
        Вы действительно хотите сбросить счетчики?
        <Group mt="lg" justify="flex-end">
          <Button variant="default" onClick={close}>
            Отменить
          </Button>
          <Button color="red" onClick={onMasterReset}>
            Сбросить на 0
          </Button>
        </Group>
      </Modal>
      {checked ? (
        <Stack
          mih={50}
          gap="0.3"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {counterProcessed.map((counter) => (
            <SingleCounter
              key={counter.id}
              id={counter.id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onReset={onReset}
              onAdd={onAdd}
              handleCountRemove={handleCountRemove}
              open={open}
              close={close}
              count={counter.value}
            />
          ))}
          <Button color="red" onClick={open}>
            MasterReset
          </Button>
          <Flex
            mih={50}
            gap="xs"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Button color="red" onClick={onAdd}>
              Добавить счетчик
            </Button>
          </Flex>
        </Stack>
      ) : null}
    </>
  );
};
