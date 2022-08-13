import {
  Stack,
  Container,
  Image,
  Text,
} from '@mantine/core';

export default function BlogLayout({
  cover,
  title,
  author,
  publishedOn,
  description,
  children,
}) {
  return (
  <Container size="md" px="xs">
    <Stack spacing="xs">
      <Container p={0}>
        <Image
          radius="md"
          src={cover}
        />
      </Container>

      <Container>
      <Stack>
        <h1>{title}</h1>
        <Text
          variant="uppercase"
          size="sm"
          align="center"
        >
          {author}
        </Text>
        <Text
          size="sm"
          align="center"
        >
          {publishedOn}
        </Text>
      </Stack>
      </Container>

      <Container>
        <Stack>
        <Text italic>{description}</Text>
        <Text>
          {children}
        </Text>
        </Stack>
      </Container>

    </Stack>
  </Container>
  );
}
