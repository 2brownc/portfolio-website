import React from 'react';

import Image from 'next/image';

import {
  Stack,
  Container,
  Text,
  Title,
  createStyles,
  useMantineTheme
} from '@mantine/core';

import cx from 'classnames';

import ImageCredit from '/styles/ImageCredit.module.css';
import BlogStyles from '/styles/Blog.module.css';

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

  // to determine the current color scheme
  const mantineTheme = useMantineTheme();

  const heroImageStyles = createStyles((theme) => ({
    a: {
      '&:visited': {
        color: theme.colorScheme === 'light' ? theme.colors.violet[2] : theme.colors.violet[3],
      },
      '&:link': {
        color: theme.colorScheme === 'light' ? theme.colors.blue[2] : theme.colors.blue[3],
      }
    }
  }));


  const blogArticleStyles = createStyles((theme) => ({
    wrapper: {
      a: {
        '&:visited': {
          color: theme.colorScheme === 'light' ? theme.colors.grape[6] : theme.colors.grape[6],
        },
        '&:link': {
          color: theme.colorScheme === 'light' ? theme.colors.blue[9] : theme.colors.blue[6],
        }
      },
      code: {
        color: theme.colorScheme === 'light' ? theme.colors.teal[9] : theme.colors.teal[6],
      },
      h2: {
        color: theme.colorScheme === 'light' ? theme.colors.indigo[9] : theme.colors.cyan[5]
      },
      h3: {
        color: theme.colorScheme === 'light' ? theme.colors.indigo[9] : theme.colors.cyan[5]
      },
      h4: {
        color: theme.colorScheme === 'light' ? theme.colors.indigo[9] : theme.colors.cyan[5]
      },
      h5: {
        color: theme.colorScheme === 'light' ? theme.colors.indigo[9] : theme.colors.cyan[5]
      },
      h6: {
        color: theme.colorScheme === 'light' ? theme.colors.indigo[9] : theme.colors.cyan[5]
      },
    }
  }));

  const { classes: articleStyles } = blogArticleStyles();

  const { classes: imageClasses } = heroImageStyles();

  return (
    <Container size="md" px="xs" py={20} className="markdownCustom">
      <Stack spacing="xs" className={articleStyles.wrapper}>
        <div className={ImageCredit.hoverwrap}>
          <div className={ImageCredit.imageContainer}>
            <Image
              src={cover}
              alt="Hero Image for the Blog"
              layout="responsive"
              width={1600}
              height={900}
            />
            {coverCredit
              && coverCreditLink
              &&
              <div className={ImageCredit.hovercap}>
                <a
                  href={coverCreditLink}
                  target="_blank"
                  className={imageClasses.a}
                >
                  @{coverCredit}
                </a>
              </div>
            }
          </div>
        </div>

        <Container mt={10} fluid>
          <Stack spacing={0}>
            <Title
              align="center"
            >
              {title}
            </Title>
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
            <div
              className={cx(
                BlogStyles.blogMain,
                { "prismjsLight": mantineTheme.colorScheme === 'light' },
                { "prismjsDark": mantineTheme.colorScheme === 'dark' },
              )}
            >
              {children}
            </div>
          </Stack>
        </Container>
      </Stack >
    </Container >
  );
}
