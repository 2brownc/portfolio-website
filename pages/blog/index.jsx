import Link from 'next/link';
import Image from 'next/image';

import { useHover } from '@mantine/hooks';

import {
  Paper,
  Text,
  Grid,
  Container,
  Stack,
  Title,
  Anchor,
} from '@mantine/core';

import { allBlogs } from 'contentlayer/generated';

function BlogCard({
  title,
  author,
  publishedOn,
  cover,
  description,
  slug,
}) {
  const linkToArticle = `blog/${slug}/`;

  const { hovered, ref } = useHover();
  const normalShadow = '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px';
  const hoverShadow = '0 1px 3px rgba(178, 236, 255, 0.15), rgba(178, 236, 255, 0.15) 0px 36px 28px -7px, rgba(178, 236, 255, 0.14) 0px 17px 17px -7px';

  return (
    <Link href={linkToArticle}>
      <Paper
        p="lg"
        radius="xs"
        ref={ref}
        component="a"
        withBorder
        shadow={hovered ? hoverShadow : normalShadow}
        sx={{
          cursor: "pointer"
        }}
      >
        <Grid>
          <Grid.Col xs={4}>
            <Image
              src={cover}
              width={16}
              height={9}
              layout="responsive"
            />
          </Grid.Col>
          <Grid.Col xs={8}>
            <Stack>
              <Stack spacing={0}>
                <Text
                  size="lg"
                  weight={700}
                >
                  <Link
                    href={linkToArticle}
                    passHref
                  >
                    <Anchor component="a">
                      {title}
                    </Anchor>
                  </Link>
                </Text>
                <Text
                  transform="uppercase"
                  size="xs"
                >
                  {author} ~ {publishedOn}
                </Text>
              </Stack>
              <Text>
                {description}
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    </Link>
  );
}

export default function Projects({ allBlogs }) {
  return (
    <Container pt={20}>
      <Title
        order={1}
        align="center"
        mb={40}
      >
        The Blog
      </Title>
      <Stack>
        {
          allBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              {...blog}
            />
          ))
        }
      </Stack>
    </Container>
  );
}

export async function getStaticProps() {
  return { props: { allBlogs } };
}