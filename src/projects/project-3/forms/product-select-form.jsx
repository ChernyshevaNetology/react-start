import React from "react";
import { Select } from "@mantine/core";
import { useProductFormContext } from "./product-form-context.js";

// Отдельный компонет со своей формой, храняший информацию о выбранном продукте скрипта (недвижка, авто и т.д.)
export const ProductSelectForm = () => {
  const form = useProductFormContext();
  return (
    <Select
      label="Выбрать Скрипт"
      placeholder="Выбрать"
      key={form.key("script")}
      {...form.getInputProps("script")}
      data={[
        { label: "Доска объявлений", value: "classifieds" },
        { label: "Невдижимость", value: "realty" },
        { label: "Авто", value: "auto" },
        { label: "Скрипт услуг", value: "board" },
      ]}
    />
  );
};
