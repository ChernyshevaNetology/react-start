import { Paper, Text, Button, Divider, Group , Badge } from "@mantine/core";

export const OrderInfo = () => {
  return (
      <Paper shadow="sm" p="xl" bg="var(--mantine-color-gray-1)">
        <Text fw={700}>Мой заказ</Text>
          <Divider my="md" />
          <Group justify="space-between">
              <Text>Лицензия</Text>
              <Text>9 000 ₽</Text>
          </Group>
        <Divider my="md" />
          <Group justify="space-between">
              <Text>IOS</Text>
              <Text>15 000 ₽</Text>
          </Group>
          <Divider my="md" />
          <Group justify="space-between">
              <Text>SEO PACKET</Text>
              <Text>20 000 ₽</Text>
          </Group>
          <Divider my="md" />
          <Group justify="space-between">
              <Text fw={700}>Общая сумма</Text>
              <Text>150 000 ₽</Text>
          </Group>

        <Button color="blue" fullWidth mt="md" radius="md">
          Перейти к оплате
        </Button>
      </Paper>
  );
};
