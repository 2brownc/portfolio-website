import {
  Stack,
  Container,
  Image,
  Text,
  Anchor,
  Title,
} from '@mantine/core';

import ImageCredit from '../../styles/ImageCredit.module.css';
import BlogStyles from '../../styles/Blog.module.css';

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
    <Container size="md" px="xs" py={20}>
      <Stack spacing="xs">
        <Container fluid>
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

        <Container mt={10} fluid>
          <Stack spacing={0}>
            <Title>{title}</Title>
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

        <Container mt={10} fluid>
          <Stack>
            <Text align="center" italic>{description}</Text>
            <div className={BlogStyles.blogMain}>
              {children}
            </div>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
}
