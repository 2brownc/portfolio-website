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
        <Grid.Col span={4}>
          "coming soon"
        </Grid.Col>
      </Grid>
    </Container>
  );
}
