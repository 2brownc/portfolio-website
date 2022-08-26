import {
  Center,
  Title,
  Text,
  Stack,
  Container,
  Grid,
  Button,
  Paper,
} from '@mantine/core';

import Link from 'next/link';
import Image from 'next/image';

import Styles from '../styles/Index.module.css';

export default function IndexPage() {
  const landingPageImageLoader = ({ width }) => {
    let image = null;
    if (width > 1304) {
      image = `hero_unsplash_landscape_X4l3CjcDvic.webp`;
    } else {
      image = `hero_unsplash_portrait_X4l3CjcDvic.webp`;
    }
    return `/static/images/${image}`;
  }

  return (
    <Container fluid className={Styles.page}>
      <div className={Styles.bgimg}>
        <Image
          src="/static/images/hero_unsplash_landscape_X4l3CjcDvic.webp"
          layout="fill"
          loader={landingPageImageLoader}
          priority
        />
      </div>
      <Center className={Styles.main}>
        <Container>
          <Paper
            shadow="md"
            p="xl"
            withBorder
          >
            <Grid>
              <Grid.Col>
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
                      Hi! I have moved by website to over here:
                    </Text>

                    <Text
                      size="md"
                      align="center"
                    >
                      <Button
                        variant="light"
                        component="a"
                        href="https://heybrown.vercel.app/"
                      >
                        https://heybrown.vercel.app/
                      </Button>
                    </Text>
                  </Stack>
                </Stack>
              </Grid.Col>
            </Grid>
          </Paper>
        </Container>
      </Center>
    </Container>
  );
}
