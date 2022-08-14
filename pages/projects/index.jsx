import {
  Card,
  Text,
  Button,
  Badge,
  SimpleGrid,
  Group,
  Container,
  Stack,
  Title
} from '@mantine/core';
import { allProjects } from 'contentlayer/generated'

import {
  IconBrandGit,
  IconExternalLink
} from '@tabler/icons';

import { useMDXComponent } from 'next-contentlayer/hooks';

function ProjectCard({
  title,
  appLink,
  repoLink,
  techStack,
  body
}) {
  const MDXContent = useMDXComponent(body.code);
  console.log("tech stack", techStack, techStack.split(','))
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
    >
      <Stack
        spacing={0}
        sx={{ height: "100%" }}
      >
        <Text
          size="lg"
          weight={700}
          mb={10}
          align="center"
        >
          {title}
        </Text>

        <Group spacing="xs" position="center">
          {techStack.split(', ').map((tech) => (
            <Badge color="violet" variant="light">
              {tech}
            </Badge>
          ))}
        </Group>

        <Text size="sm" sx={{ flexGrow: 1 }}>
          <MDXContent />
        </Text>

        <Group
          spacing="xs"
          position="center"
        >
          <Button
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<IconBrandGit />}
            mt={0}
          >
            View Source
          </Button>
          <Button
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<IconExternalLink />}
            mt={0}
          >
            Open App
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}

export default function Projects() {
  const breakpoints = [
    { maxWidth: 600, cols: 1, spacing: 'sm' },
    { minWidth: 601, cols: 2, spacing: 'md' },
  ]
  return (
    <Container>
      <Title
        order={1}
        align="center"
        mb={40}
      >
        Projects
      </Title>
      <SimpleGrid breakpoints={breakpoints}>
        {
          allProjects.map((project) => (
            <ProjectCard {...project} />
          ))
        }
      </SimpleGrid>
    </Container>
  )
}