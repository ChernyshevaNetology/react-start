import React from "react";
import { Group, Checkbox } from "@mantine/core";
import { pluginList } from "../form-data";

export const PluginSelectForm = () => {
  return (
    <Group>
      {pluginList.map(({ form, key, name, price }, idx) => (
        <Checkbox
          label={name}
          price={price}
          /*            key={form.key(`pluginList.${[idx]}.${key}`)}
            {...form.getInputProps(`pluginList.${[idx]}.${key}`)}*/
        />
      ))}
    </Group>
  );
};
