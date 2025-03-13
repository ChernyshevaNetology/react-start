import React from "react";
import { Checkbox, Space, Stack } from "@mantine/core";
import { additionalServices } from "../form-data";
import { useFlynaxFormContext } from "./flynax-form-context";

// Форма для выбора дополнительных услуг
export const AdditionalServicesForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Checkbox.Group label="ДОПОЛНЕНИЯ И УСЛУГИ">
        <Space h="lg" />
        <Stack>
          {additionalServices.map(({ key, name }, idx) => (
            <Checkbox
              value={key}
              label={name}
              key={form.key(`additionalServices.${[idx]}.${key}`)}
              {...form.getInputProps(`additionalServices.${[idx]}.${key}`)}
            />
          ))}
        </Stack>
      </Checkbox.Group>
    </div>
  );
};
