import React from "react";
import { Grid, Stack } from "@mantine/core";
import { ProductSelectForm } from "./forms/product-select-form.jsx";
import { CustomerInfoForm } from "./forms/customer-info-form.jsx";
import { AdditionalServicesForm } from "./forms/additional-services-form.jsx";
import { OrderInfo } from "./order-info.jsx";

// это общая страница продуктов она будет строится из различных компонентов и форм

export const ProductsOrderPage = () => {
  return (
    <Grid>
      <Grid.Col span={4}>
        <Stack
          bg="var(--mantine-color-body)"
          align="center"
          justify="center"
          gap="md"
        >
          <ProductSelectForm />
          <AdditionalServicesForm />
          <CustomerInfoForm />
        </Stack>
      </Grid.Col>
      <Grid.Col span={4}>
        <OrderInfo />
      </Grid.Col>
    </Grid>
  );
};
