import Link from 'next/link';

import { useHover } from '@mantine/hooks';

import {
  Card,
  Text,
  Button,
  Group,
  Grid,
  Image,
  Container,
  Stack,
  Title,
  Anchor,
} from '@mantine/core';

import { allBlogs } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks';

function BlogCard({
  title,
  author,
  publishedOn,
  cover,
  description,
  body,
  slug
}) {
  const MDXContent = useMDXComponent(body.code);
  const linkToArticle = `blog/${slug}/`;

  const { hovered, ref } = useHover();
  const normalShadow = '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px';
  const hoverShadow = '0 1px 3px rgba(178, 236, 255, 0.15), rgba(178, 236, 255, 0.15) 0px 36px 28px -7px, rgba(178, 236, 255, 0.14) 0px 17px 17px -7px';

  const cardShadow = () => {
    return hovered ? hoverShadow : normalShadow
  }

  return (
    <Card
      shadow="lg"
      p="lg"
      radius="xs"
      ref={ref}
      withBorder
      shadow={hovered ? hoverShadow : normalShadow}
    >
      <Grid>
        <Grid.Col xs={4}>
          <Image src={cover} />
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
    </Card >
  );
}

export default function Projects() {
  console.log("ALL BLOG", allBlogs);
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
            <BlogCard key={blog._id} {...blog} />
          ))
        }
      </Stack>
    </Container>
  )
}