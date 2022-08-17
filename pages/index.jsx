import {
  Center,
  Title,
  Text,
  Stack,
  Container,
  Grid,
  Button,
} from '@mantine/core';

import Link from 'next/link';

import Styles from '../styles/Index.module.css';

export default function IndexPage() {
  return (
    <Center className={Styles.main}>
      <Container>
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
                >
                  Brown Chinta
                </Title>
                <Text
                  size="lg"
                  align="center"
                >
                  Hi! I am a software developer.
                </Text>

                <Text
                  size="md"
                  align="center"
                >
                  Look around my website and get to know me more.
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col md={6}>
            <Stack align="center">
              <Stack>
                <Link href="/projects" passHref>
                  <Button>
                    Look at my Projects
                  </Button>
                </Link>
                <Link href="/resume" passHref>
                  <Button>
                    View Resume / Contact Info
                  </Button>
                </Link>
                <Link href="/blog" passHref>
                  <Button>
                    Read my Blog
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Center>
  );
}