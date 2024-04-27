import React from 'react';
import {parseDate} from '@internationalized/date';
import { DateRangePicker } from "@adobe/react-spectrum";
import { Flex } from '@adobe/react-spectrum';
import { View } from '@adobe/react-spectrum';       
function Sync() {


  return (
    <>
    <Flex direction="column" width="size-2000" gap="size-100">
    <View backgroundColor="celery-600" height="size-800" />
    <View backgroundColor="blue-600" height="size-800" />
    <View backgroundColor="magenta-600" height="size-800" />
  </Flex>
  </>
  );
}
export default Sync