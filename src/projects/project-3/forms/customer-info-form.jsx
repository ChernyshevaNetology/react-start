import React from "react";
import { Divider, Stack, Space, Text } from "@mantine/core";
import { useFlynaxFormContext } from "./flynax-form-context";
import { customerDetails } from "../form-data";
import { CustomerFieldItem } from "../components/customer-field-item";

export const CustomerInfoForm = () => {
  const form = useFlynaxFormContext();
  return (
    <div>
      <Text fw={500}>ИНФОРМАЦИЯ О КЛИЕНТЕ</Text>
      <Divider />
      <Space h="lg" />
      <Stack>
        {customerDetails.map(({ id, key, name, toolTipText }, idx) => (
          <CustomerFieldItem
            key={id}
            formKey={key}
            name={name}
            idx={idx}
            toolTipText={toolTipText}
            form={form}
          />
        ))}
      </Stack>
    </div>
  );
};
