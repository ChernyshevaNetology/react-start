import { Grid, Stack } from "@mantine/core";
import { FlynaxFormProvider, useFlynaxForm } from "./forms/flynax-form-context";
import { AdditionalServicesForm } from "./forms/additional-services-form";
import { CustomerInfoForm } from "./forms/customer-info-form";
import { OrderInfo } from "./order-info";
import { ProductSelectForm } from "./forms/product-select-form";
import { preSelectedProducts } from "./form-data.js";
import { PreselectedProductsForm } from "./pre-selected-products";
import { CustomerConsentForm } from "./forms/customer-consent.jsx";

export const ProductsOrderPage = () => {
  const flynaxForm = useFlynaxForm({
    mode: "uncontrolled",
    initialValues: {
      product: "",
      additionalServices: [
        { premiumTemplates: false },
        { ios: false },
        { android: false },
        { premiumPlugins: false },
        { seo: false },
      ],
      customerDetails: {
        name: "",
        email: "",
        company: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        zipCode: "",
        address: "",
      },
      clientsConsents: [{ eula: false }, { termsOfUse: false }],
    },
  });

  return (
    <FlynaxFormProvider form={flynaxForm}>
      <Grid>
        <Grid.Col span={4}>
          <Stack
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="center"
            gap="md"
          >
            <ProductSelectForm />
            <PreselectedProductsForm />
            <AdditionalServicesForm />
            <CustomerInfoForm />
            <CustomerConsentForm />
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>{/*<OrderInfo />*/}</Grid.Col>
      </Grid>
    </FlynaxFormProvider>
  );
};
