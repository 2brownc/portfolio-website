import { Text, Space, ThemeIcon } from '@mantine/core';
import { IconBrandTabler } from '@tabler/icons';

export default function Logo() {
  return (
    <div style={{ display: 'flex' }}>
      <ThemeIcon><IconBrandTabler /></ThemeIcon>
      <Space w="xs" />
      <Text>Brown&apos;s Site</Text>
    </div>
  );
}
