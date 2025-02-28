import React, { useEffect, useState } from "react";
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
  Badge,
  RingProgress,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { nanoid } from "nanoid";
import { InsuranceCompany } from "../../components/insurance-company";
import { middleWareCode, getTotalCount, statCalculator } from "../../utils.js";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 3 },
  { id: 3, value: 4 },
  { id: 4, value: 0 },
  { id: 5, value: 1 },
];

const API = "https://jsonplaceholder.typicode.com/users/";

export const MultipleCounters = () => {
  const [counters, setCounters] = useState(data);
  const [checked, setChecked] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [filter, setFilter] = useState(null);
  const [sortingOption, setSortingOption] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [counterStats, setCounterStats] = useState(statCalculator(counters));

  const counterProcessed = middleWareCode(counters, filter, sortingOption);

  useEffect(() => {
    if (filter === "moreThanTen") {
      const fetchInsuranceDataFromApi = async (url, filter) => {
        try {
          const data = await fetch(url);
          const jsonData = await data.json();
          setApiData(jsonData);
        } catch (err) {
          console.warn(err, "Не удалось получить данные");
        }
      };
      fetchInsuranceDataFromApi(API);
    }
  }, [filter]);

  useEffect(() => {
    setTotalCount(getTotalCount(counters));
  }, [counters]);

  useEffect(() => {
    setCounterStats(statCalculator(counters));
  }, [counters]);

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
        <Badge size="xl" circle>
          {totalCount}
        </Badge>
      </Flex>
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
      <Flex
        mih={50}
        gap="xs"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <RingProgress
          size={250}
          thickness={20}
          label={
            <Text
              size="xs"
              ta="center"
              px="xs"
              style={{ pointerEvents: "none" }}
            >
              Hover sections to see tooltips
            </Text>
          }
          sections={[
            {
              value: counterStats.negative,
              color: "cyan",
              tooltip: "Отрицательные счетчики",
            },
            {
              value: counterStats.zero,
              color: "orange",
              tooltip: "Нулевые счетчики",
            },
            {
              value: counterStats.moreThanOne,
              color: "grape",
              tooltip: "От 1 до 10",
            },
            {
              value: counterStats.moreThanTen,
              color: "red",
              tooltip: "Больше 10",
            },
          ]}
        />
      </Flex>
      {apiData && (
        <>
          <Flex
            mih={50}
            gap="xs"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <h2>Для данной опции доступны следующие страховые компании</h2>
          </Flex>
          <Flex
            mih={50}
            gap="xs"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            {apiData.map((item) => (
              <InsuranceCompany
                key={item.id}
                name={item.company.name}
                description={item.company.catchPhrase}
              />
            ))}
          </Flex>
        </>
      )}
    </>
  );
};
