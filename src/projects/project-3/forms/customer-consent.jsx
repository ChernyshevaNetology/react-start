import React from "react";
import { Checkbox, Stack } from "@mantine/core";
import { useFlynaxFormContext } from "./flynax-form-context";

export const CustomerConsentForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Stack>
        <Checkbox label="Я принимаю условия публичной оферты" />
        <Checkbox label="Я даю согласие на обработку персональных данных" />
      </Stack>
    </div>
  );
};
