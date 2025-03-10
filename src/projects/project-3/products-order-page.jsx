import React from "react";
import {
  Button,
  Checkbox,
  Group,
  TextInput,
  Flex,
  Select,
  Popover,
  Badge,
  Fieldset,
  Space,
} from "@mantine/core";
import { useForm } from "@mantine/form";

// это общая страница продуктов она будет строится из различных компонентов и форм

export const ProductsOrderPage = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      termsOfService: false,
    },

    validate: {
      product: (value) => (value ? null : "Выберите продукт"),
      name: (value) => (value ? null : "Неправильное имя"),
      lastName: (value) => (value ? null : "Неправильная фамилия"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Неправильный email"),
      termsOfService: (value) => (value ? null : "Вы не отметили поле"),
    },
  });

  return (
    <div>
      <Flex
        mih={50}
        gap="xs"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Group gap="lg">
            <Select
              withAsterisk
              label="Скрипт"
              placeholder="Выберите продукт"
              data={[
                "Real Estate",
                "Classifieds Ads",
                "Cars",
                "Pets",
                "Services",
                "Boats",
              ]}
              key={form.key("product")}
              {...form.getInputProps("product")}
            />
            <Popover width={200} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Badge size="xl" circle>
                  ?
                </Badge>
              </Popover.Target>
              <Popover.Dropdown>
                <Text size="xs">
                  В данном поле вы можете выбрать тип скрипта, который будет
                  установлен на ваш сервер.
                </Text>
              </Popover.Dropdown>
            </Popover>
          </Group>
          <TextInput
            withAsterisk
            label="Имя"
            placeholder="Ваше имя"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <TextInput
            withAsterisk
            label="Фамилия"
            placeholder="Ваша фамилия"
            key={form.key("lastName")}
            {...form.getInputProps("lastName")}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="Введите email"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <Fieldset legend="Дополнения и услуги">
            <Group gap="lg">
              <Checkbox labelPosition="left" label="Премиальные темы" />
              <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Badge size="xl" circle>
                    ?
                  </Badge>
                </Popover.Target>
                <Popover.Dropdown>
                  <Text size="xs">
                    В данном поле вы можете выбрать тип скрипта, который будет
                    установлен на ваш сервер.
                  </Text>
                </Popover.Dropdown>
              </Popover>
            </Group>
            <Space h="xl" />
            <Group gap="lg">
              <Checkbox labelPosition="left" label="iOS приложение" />
              <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Badge size="xl" circle>
                    ?
                  </Badge>
                </Popover.Target>
                <Popover.Dropdown>
                  <Text size="xs">
                    В данном поле вы можете выбрать тип скрипта, который будет
                    установлен на ваш сервер.
                  </Text>
                </Popover.Dropdown>
              </Popover>
            </Group>
            <Space h="xl" />
            <Group gap="lg">
              <Checkbox labelPosition="left" label="Android приложение" />
              <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Badge size="xl" circle>
                    ?
                  </Badge>
                </Popover.Target>
                <Popover.Dropdown>
                  <Text size="xs">
                    В данном поле вы можете выбрать тип скрипта, который будет
                    установлен на ваш сервер.
                  </Text>
                </Popover.Dropdown>
              </Popover>
            </Group>
          </Fieldset>
          <Checkbox
            mt="md"
            label="Я принимаю условия публичной оферты"
            key={form.key("termsOfService")}
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Оплатить</Button>
          </Group>
        </form>
      </Flex>
    </div>
  );
};
