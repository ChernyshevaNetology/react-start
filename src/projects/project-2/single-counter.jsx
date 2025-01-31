import React from 'react';
import {Button, Badge, Flex, Stack, Switch, Divider} from '@mantine/core';



export const SingleCounter = ({count, onIncrement, onDecrement, onReset, id}) => {
        return(
            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
    <Button variant="filled" onClick={() => {onIncrement(id)}}>Increment</Button>
    <Button variant="filled" onClick={() => {onDecrement(id)}}>Decrement</Button>
    <Button variant="filled" onClick={() => {onReset(id)}}>Reset</Button>
    <Badge size="xl" circle>{count}</Badge>
    </Flex>
            )
}