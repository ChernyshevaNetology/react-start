import React from "react";
import { Select } from "@mantine/core";

// Отдельный компонет со своей формой, храняший информацию о выбранном продукте скрипта (недвижка, авто и т.д.)
export const ProductSelectForm = () => {
  return (
    <Select
      label="Выбрать Скрипт"
      placeholder="Выбрать"
      data={[
        { label: "Доска объявлений", value: "classifieds" },
        { label: "Невдижимость", value: "realty" },
        { label: "Авто", value: "auto" },
        { label: "Скрипт услуг", value: "board" },
      ]}
    />
  );
};
