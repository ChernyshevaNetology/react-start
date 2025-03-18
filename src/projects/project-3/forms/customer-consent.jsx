import React from "react";
import { Checkbox, Stack } from "@mantine/core";
import { useFlynaxFormContext } from "./flynax-form-context";
import { customerConsent } from "../form-data";

export const CustomerConsentForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Stack>
        {customerConsent.map(({ name }) => (
          <Checkbox
            label={name}
            key={form.key("clientsConsents")}
            {...form.getInputProps("clientsConsents")}
          />
        ))}
      </Stack>
    </div>
  );
};
