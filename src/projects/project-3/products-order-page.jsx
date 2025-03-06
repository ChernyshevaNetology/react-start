import React from "react";
import { Grid, Stack } from "@mantine/core";
import { ProductSelectForm } from "./forms/product-select-form.jsx";
import { CustomerInfoForm } from "./forms/customer-info-form.jsx";
import { AdditionalServicesForm } from "./forms/additional-services-form.jsx";
import { FormProvider, useProductForm } from "./forms/product-form-context.js";
import { OrderInfo } from "./order-info.jsx";
// это общая страница продуктов она будет строится из различных компонентов и форм

export const ProductsOrderPage = () => {
  // const productForm = useProductForm({
  //   mode: "uncontrolled",
  //   initialValues: {
  //     script: "",
  //     name: "",
  //     email: "",
  //     additionalServices: [
  //       {  ios: false, price: 100  },
  //       {  android: false, price: 200  },
  //       {  dbTransfer: false, price: 400  },
  //       {  seo: false,  },
  //     ],
  //   },
  //   onValuesChange: (values) => {
  //     console.log(values);
  //   },
  // });

  const productForm2 = useProductForm({
    mode: "uncontrolled",
    initialValues: {
      script: "",
      userInfo: { name: "", email: "" },
      additionalServices: [
        { ios: false, price: 100 },
        { android: false, price: 200 },
        { dbTransfer: false, price: 400 },
        { seo: false },
      ],
    },
    onValuesChange: (values) => {
      console.log(values);
    },
  });

  return (
    <FormProvider form={productForm2}>
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
    </FormProvider>
  );
};
