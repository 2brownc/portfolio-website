import Link from 'next/link';

import {
  Center,
  Stack,
  Title,
  Button
} from '@mantine/core';
import { IconHome } from '@tabler/icons';

export default function NotFound() {
  return (
    <Center
      sx={{
        height: "90vh",
        width: "100vw"
      }}
    >
      <Stack align="center">
        <Title>404 - Not Found</Title>
        <div>
          <Link href="/">
            <Button
              leftIcon={<IconHome />}
            >
              Home
            </Button>
          </Link>
        </div>
      </Stack>
    </Center>
  );
}