import React from "react";
import { Button, Checkbox, Group, TextInput, Flex } from "@mantine/core";
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
      name: (value) => (value ? null : "Invalid name"),
      lastName: (value) => (value ? null : "Invalid last name"),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      termsOfService: (value) =>
        value ? null : "You have not checked the box",
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
          <TextInput
            withAsterisk
            label="Name"
            placeholder="Your name"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <TextInput
            withAsterisk
            label="Last Name"
            placeholder="Your last name"
            key={form.key("lastName")}
            {...form.getInputProps("lastName")}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="Enter email"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />

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
        );
      </Flex>
    </div>
  );
};
