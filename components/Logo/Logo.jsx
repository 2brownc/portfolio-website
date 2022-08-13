import { Text, Space, ThemeIcon } from '@mantine/core';
import { IconBrandTabler } from '@tabler/icons';

export default function () {
  return (
    <div style={{ display: 'flex' }}>
      <ThemeIcon><IconBrandTabler /></ThemeIcon>
      <Space w="xs" />
      <Text>Brown's Site</Text>
    </div>
  );
}
