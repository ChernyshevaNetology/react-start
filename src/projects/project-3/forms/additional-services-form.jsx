import { Checkbox, Group, Stack } from "@mantine/core";
import { useProductFormContext } from "./product-form-context.js";

// Форма для выбора дополнительных услуг
export const AdditionalServicesForm = () => {
  const form = useProductFormContext();
  const formValues = form.getValues();
  console.log("formValues", formValues);

  return (
    <Checkbox.Group
      // defaultValue={['react']}
      label="Дополнительные услуги"
      withAsterisk
    >
      <Stack>
        <Checkbox
          value="ios"
          label="Приложение для ios"
          key={form.key(`additionalServices.${[0]}.ios`)}
          {...form.getInputProps(`additionalServices.${[0]}.ios`)}
        />
        <Checkbox
          value="android"
          label="Приложение для android"
          key={form.key(`additionalServices.${[1]}.android`)}
          {...form.getInputProps(`additionalServices.${[1]}.android`)}
        />
        <Checkbox
          value="data"
          label="Перенос базы"
          key={form.key(`additionalServices.${[2]}.dbTransfer`)}
          {...form.getInputProps(`additionalServices.${[2]}.dbTransfer`)}
        />
        <Checkbox
          value="SEO"
          label="SEO пакет"
          key={form.key(`additionalServices.${[3]}.seo`)}
          {...form.getInputProps(`additionalServices.${[3]}.seo`)}
        />
      </Stack>
    </Checkbox.Group>
  );
};
