import React from "react";
import { useFlynaxFormContext } from "./flynax-form-context";
import { Checkbox, Select, Stack, Space } from "@mantine/core";
import { preSelectedProducts } from "../form-data";
// Отдельный компонет со своей формой, храняший информацию о выбранном продукте скрипта (недвижка, авто и т.д.)
export const ProductSelectForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Select
        label="Продукт"
        labelPosition="left"
        placeholder="Выберите продукт"
        data={[
          { label: "Доска объявлений", value: "classifieds" },
          { label: "Авто", value: "cars" },
          { label: "Недвижимость", value: "realty" },
          { label: "Песикоты", value: "pets" },
          { label: "Лодки", value: "boats" },
          { label: "Услуги", value: "services" },
        ]}
        key={form.key("product")}
        {...form.getInputProps("product")}
      />
      <Space h="lg" />
      <Checkbox.Group>
        <Stack>
          {preSelectedProducts.map(({ key, name }, idx) => (
            <Checkbox
              value={key}
              label={name}
              key={form.key(`preSelectedProducts.${idx}.${key}`)}
              {...form.getInputProps(`preSelectedProducts.${idx}.${key}`)}
            />
          ))}
        </Stack>
      </Checkbox.Group>
    </div>
  );
};
