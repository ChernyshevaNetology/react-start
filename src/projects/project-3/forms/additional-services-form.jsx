import { Checkbox, Group, Stack } from "@mantine/core";

// Форма для выбора дополнительных услуг
export const AdditionalServicesForm = () => {
    return (
        <Checkbox.Group
            // defaultValue={['react']}
            label="Дополнительные услуги"
            withAsterisk
        >
            <Stack>
                <Checkbox
                    value="ios"
                    label="Приложение для ios"
                />
                <Checkbox
                    value="android"
                    label="Приложение для android"
                />
                <Checkbox
                    value="data"
                    label="Перенос базы"
                />
                <Checkbox
                    value="SEO"
                    label="SEO пакет"
                    />
            </Stack>
        </Checkbox.Group>
    );
};