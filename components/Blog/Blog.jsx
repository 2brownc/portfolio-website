import {
  Stack,
  Container,
  Image,
  Text,
  Anchor,
} from '@mantine/core';

import ImageCredit from '../../styles/ImageCredit.module.css'

export default function BlogLayout({
  cover,
  coverCredit,
  coverCreditLink,
  title,
  author,
  publishedOn,
  description,
  children,
}) {
  return (
  <Container size="md" px="xs">
    <Stack spacing="xs">
      <Container>
        <div className={ImageCredit.hoverwrap}>
          <Image
            src={cover}
          />
          {coverCredit
            && coverCreditLink
            &&
            <div className={ImageCredit.hovercap}>
              <Anchor href={coverCreditLink} target="_blank">
                @{coverCredit}
              </Anchor>
            </div>
          }
        </div>
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
