import React from "react";
import { Fieldset, TextInput } from "@mantine/core";
import { useFlynaxFormContext } from "./flynax-form-context";

// Это отдельный компонент со своей отдельной формой с информацией о клиенте (имя, email и т.д.)
export const CustomerInfoForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Fieldset legend="ИНФОРМАЦИЯ О КЛИЕНТЕ">
        <TextInput
          label="Полное имя"
          placeholder="Ваше имя"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="Введите email"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Компания"
          placeholder="Ваша компания"
          key={form.key("company")}
          {...form.getInputProps("company")}
        />
        <TextInput
          label="Телефон"
          placeholder="Введите телефон"
          key={form.key("phone")}
          {...form.getInputProps("phone")}
        />
        <TextInput
          label="Страна"
          placeholder="Введите страну"
          key={form.key("country")}
          {...form.getInputProps("country")}
        />
        <TextInput
          label="Область"
          placeholder="Введите область"
          key={form.key("region")}
          {...form.getInputProps("region")}
        />
        <TextInput
          label="Город"
          placeholder="Введите город"
          key={form.key("city")}
          {...form.getInputProps("city")}
        />
        <TextInput
          label="Индекс"
          placeholder="Введите индекс"
          key={form.key("zipCode")}
          {...form.getInputProps("zipCode")}
        />
        <TextInput
          label="Адрес"
          placeholder="Введите адрес"
          key={form.key("address")}
          {...form.getInputProps("address")}
        />
      </Fieldset>
    </div>
  );
};
