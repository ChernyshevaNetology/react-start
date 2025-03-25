import React from "react";
import { Grid, Space, Stack } from "@mantine/core";
import { FlynaxFormProvider, useFlynaxForm } from "./forms/flynax-form-context";
import { OrderInfo } from "./order-info";
import { AdditionalServicesForm } from "./forms/additional-services-form";
import { CustomerInfoForm } from "./forms/customer-info-form";
import { ProductSelectForm } from "./forms/product-select-form";
import { PreselectedProductsForm } from "./pre-selected-products";
import { CustomerConsentForm } from "./forms/customer-consent";
import { PluginSelectForm } from "./forms/plugin-select-form";

export const ProductsOrderPage = () => {
  const flynaxForm = useFlynaxForm({
    mode: "controlled",
    initialValues: {
      product: "",
      additionalServices: [
        { premiumTemplates: false },
        { ios: false },
        { android: false },
        { premiumPlugins: false },
        { seo: false },
        { dbTransfer: false },
      ],
      pluginList: [
        { currency: false },
        { banners: false },
        { reviews: false },
        { similarAds: false },
        { recentlyViewed: false },
        { compare: false },
        { share: false },
        { autoposter: false },
        { xmlFeeds: false },
        { categoryImport: false },
        { navigation: false },
        { wordFilter: false },
        { filter: false },
        { code: false },
        { xlsImport: false },
      ],
      customerDetails: [
        { name: "" },
        { email: "" },
        { company: "" },
        { phone: "" },
        { city: "" },
        { zipCode: "" },
        { address: "" },
      ],
      customerConsent: [{ eula: false }, { termsOfUse: false }],
    },
    onValuesChange: (values) => {
      console.log("values", values);
    },
  });

  return (
    <FlynaxFormProvider form={flynaxForm}>
      <Grid>
        <Grid.Col span={5}>
          <Stack
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="center"
            gap="md"
          >
            <ProductSelectForm />
            <PreselectedProductsForm />
            <Space h="sm" />
            <AdditionalServicesForm />
            {/*            <PluginSelectForm />*/}
            <Space h="sm" />
            <CustomerInfoForm />
            <CustomerConsentForm />
          </Stack>
        </Grid.Col>
        <Grid.Col span={4} offset={3}>
          <OrderInfo />
        </Grid.Col>
      </Grid>
    </FlynaxFormProvider>
  );
};
