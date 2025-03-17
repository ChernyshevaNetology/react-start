import React from "react";
import { Checkbox, Fieldset, Space, Stack } from "@mantine/core";
import { additionalServices } from "../form-data";
import { useFlynaxFormContext } from "./flynax-form-context";

export const AdditionalServicesForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Fieldset legend="ДОПОЛНЕНИЯ И УСЛУГИ">
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
      </Fieldset>
    </div>
  );
};
