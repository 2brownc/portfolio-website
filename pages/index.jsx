import {
  Center,
  Card,
  Title,
  Text,
  Stack,
  Container,
  Grid,
  Group,
  Button,
  Divider
} from '@mantine/core';

import Link from 'next/link';

import Styles from '../styles/Index.module.css';

export default function IndexPage() {
  return (
    <Center className={Styles.main}>
      <Container
      >
        <Grid>
          <Grid.Col md={6}>
            <Stack>
              <Stack
                spacing="xs"
                align="center"
              >
                <Title
                  order={1}
                  mb={0}
                  styles={(theme) => ({
                    fontFamily: "monospace"
                  })}
                >
                  Brown Chinta
                </Title>
                <Text
                  size="lg"
                >
                  Hi! I am a software developer.
                  Look around my website and get to know me more.
                </Text>

              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col md={6}>
            <Stack align="center">
              <Stack>
                <Link href="/projects">
                  <Button>
                    Look at my Projects
                  </Button>
                </Link>
                <Link href="/resume">
                  <Button>
                    View Resume / Contact Info
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button>
                    Read my Blog
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Center >
  );
}