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
        {customerDetails.map(({ key, name }) => (
          <TextInput label={key} placeholder={name} />
        ))}
      </Fieldset>
    </div>
  );
};
