import {
  Container,
  Stack,
  Text,
  Grid,
} from '@mantine/core';

export default function ProjectLayout({ title, description, repoLink, appLink, children }) {
  return (
    <Container>
      <Grid>
        <Grid.col span={4}>
          Nothing here. Move along, pal.
        </Grid.col>
      </Grid>
    </Container>
  );
}
