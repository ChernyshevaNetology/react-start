import React from "react";
import { TextInput } from "@mantine/core";

// Это отдельный компонент со своей отдельной формой с информацией о клиенте (имя, email и т.д.)
export const CustomerInfoForm = () => {
  return (
    <>
      <TextInput mt="md" label="Имя" placeholder="Name" />
      <TextInput mt="md" label="Действующий email" placeholder="Email" />
    </>
  );
};
