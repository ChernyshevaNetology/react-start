import React from "react";
import { useFlynaxFormContext } from "./flynax-form-context";
import { Grid, Select, Text } from "@mantine/core";

export const ProductSelectForm = () => {
  const form = useFlynaxFormContext();
  return (
    <>
      <Grid>
        <Grid.Col span={4}>
          <Text>Продукт</Text>
        </Grid.Col>
        <Grid.Col span={7} offset={1}>
          <Select
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
        </Grid.Col>
      </Grid>
    </>
  );
};
