import React from "react";
import { TextInput } from "@mantine/core";
import { useProductFormContext } from "./product-form-context.js";

// Это отдельный компонент со своей отдельной формой с информацией о клиенте (имя, email и т.д.)
export const CustomerInfoForm = () => {
  const form = useProductFormContext();
  return (
    <>
      <TextInput
        label="Имя"
        placeholder="Name"
        key={form.key(`userInfo.name`)}
        {...form.getInputProps(`userInfo.name`)}
      />
      <TextInput
        mt="md"
        label="Действующий email"
        placeholder="Email"
        key={form.key(`userInfo.email`)}
        {...form.getInputProps(`userInfo.email`)}
      />
    </>
  );
};
