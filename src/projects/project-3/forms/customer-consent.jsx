import React from "react";
import { Checkbox, Stack } from "@mantine/core";
import { useFlynaxFormContext } from "./flynax-form-context";
import { customerConsent } from "../form-data";

export const CustomerConsentForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Stack>
        {customerConsent.map(({ name, key }, idx) => (
          <Checkbox
            value={key}
            label={name}
            key={form.key(`customerConsent.${[idx]}.${key}`)}
            {...form.getInputProps(`customerConsent.${[idx]}.${key}`)}
          />
        ))}
      </Stack>
    </div>
  );
};
