import React, {useState} from 'react';
import { Flex, Button, Badge, Checkbox, Divider, Alert, Stack } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [checked, setChecked] = useState(false);

    const handleCheckboxState = () => setChecked(!checked);
    const onIncrement = () => setCount((prev) => prev + 1);
    const onDecrement = () => setCount((prev) => prev - 1);
    const onReset = () => setCount( 0);
    const limiter = () => {
        if (count > 1 && count < 5) return "grey";
        if (count >= 6 && count <= 15) return "green";
        if (count > 15) return "red";
    }
    const icon = <IconInfoCircle />
    return (
        <>
            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
            <Checkbox onChange={handleCheckboxState} label="Display counters"/>
                </Flex>
            <Divider my="md" />
            { checked ?
                (<Flex
                    mih={50}
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Button onClick={onIncrement}>Increment</Button>
                    <Button onClick={onDecrement}>Decrement</Button>
                    <Button onClick={onReset}>Reset</Button>
                    <Badge size="xl" color="cyan" circle>{count}</Badge>
                </Flex>) : null
            }
{/*            <div className="count">
                <h3 className={limiter(count)}>
                    {count}
                </h3>
            </div>*/}
            <Divider my="md" />
                { count > 10 ?
                    (
                        <Stack
                            h={300}
                            bg="var(--mantine-color-body)"
                            align="center"
                            justify="center"
                            gap="md"
                        >
                    <Alert variant="light" color="blue" title="Внимание" icon={icon}>
                        Счетчик не может превышать 10
                    </Alert>
                            </Stack>
                    ) : null
                }
        </>
    );
};
