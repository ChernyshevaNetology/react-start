import React from "react";
import { useFlynaxFormContext } from "./flynax-form-context";
import { Select } from "@mantine/core";

export const ProductSelectForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Select
        label="Продукт"
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
    </div>
  );
};
