import { Grid, Stack } from "@mantine/core";
import { FlynaxFormProvider, useFlynaxForm } from "./forms/flynax-form-context";
import { AdditionalServicesForm } from "./forms/additional-services-form";
import { CustomerInfoForm } from "./forms/customer-info-form";
import { ProductSelectForm } from "./forms/product-select-form";
import { PreselectedProductsForm } from "./pre-selected-products";
import { CustomerConsentForm } from "./forms/customer-consent.jsx";
import { customerConsent, customerDetails } from "./form-data.js";

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
