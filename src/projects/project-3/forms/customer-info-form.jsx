import React from "react";
import { Fieldset, TextInput } from "@mantine/core";
import { useFlynaxFormContext } from "./flynax-form-context";
import { customerDetails } from "../form-data.js";

// Это отдельный компонент со своей отдельной формой с информацией о клиенте (имя, email и т.д.)
export const CustomerInfoForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Fieldset legend="ИНФОРМАЦИЯ О КЛИЕНТЕ">
        {customerDetails.map(({ key, name }, idx) => (
          <TextInput
            label={key}
            placeholder={name}
            key={form.key(`customerDetails.${[idx]}.${key}`)}
            {...form.getInputProps(`customerDetails.${[idx]}.${key}`)}
          />
        ))}
      </Fieldset>
    </div>
  );
};
