import { Container, Stack, Text, Title, Group, Button, Divider, Badge, List } from '@mantine/core';

function AppLink({ source, app }) {
  return (
    <Group spacing="sm">
      <Button component="a" href={source} target="_blank" variant="light" compact>
        View Source
      </Button>
      <Button component="a" href={app} target="_blank" variant="light" compact>
        Open App
      </Button>
    </Group>
  );
}

function Badges({ badges }) {
  return (
    <Group spacing="xs">
      {badges.map((badge) => (
        <Badge variant="outline" color="violet">
          {badge}
        </Badge>
      ))}
    </Group>
  );
}

export default function Resume() {
  return (
    <Container py={20}>
      <Stack>
        <Stack spacing={0} align="center">
          <Text transform="uppercase" size="sm" color="dimmed">
            Resume
          </Text>
          <Title order={1}>Brown Chinta</Title>
        </Stack>
        <Stack spacing={0} align="center">
          <Button component="a" href="mailto:2brownit@gmail.com" variant="subtle" compact>
            2brownit@gmail.com
          </Button>
          <Text>+91 7659930282</Text>
          <Button
            component="a"
            href="https://github.com/2brownc"
            target="_blank"
            variant="subtle"
            compact
          >
            Github Profile
          </Button>
          <Button
            component="a"
            href="https://www.linkedin.com/in/brown-chinta-77610165/"
            target="_blank"
            variant="subtle"
            compact
          >
            Linkedin Profile
          </Button>
        </Stack>

        <Divider />

        <Stack spacing="xl">
          <Title order={2} align="center">
            Skills
          </Title>
          <List>
            <List.Item>HTML, CSS, Javascript</List.Item>
            <List.Item>NodeJS, ReactJS, NextJS</List.Item>
          </List>
        </Stack>

        <Stack spacing="xl">
          <Title order={2} align="center">
            Projects
          </Title>

          <Stack spacing="sm">
            <Title order={3}>Pixvault</Title>
            <Group>
              <Badges badges={['NodeJS', 'ReactJS', 'React Redux', 'Express']} />
            </Group>
            <Text>
              Pixvault is a stock image website built with the MERN stack. Helps users create an
              account to manage images and keep track of viewed images. Utilized React Redux for
              state management, Mantine UI for styling and Auth0 for user authentication.
            </Text>
            <AppLink
              source="https://github.com/2brownc/pixvault-frontend"
              app="https://pixvault.pages.dev"
            />
          </Stack>

          <Stack spacing="sm">
            <Title order={3}>Weather App</Title>
            <Group>
              <Badges badges={['NodeJS', 'ReactJS', 'Material UI', 'React Redux']} />
            </Group>
            <Text>
              Developed a user-friendly weather app displaying current conditions and forecasts.
              Users can customize location and measurement units. Leveraged ReactJS for an
              interface, Material UI for styling and integrated with AccuWeather API to provide
              real-time data.
            </Text>
            <AppLink
              source="https://github.com/2brownc/weather-app"
              app="https://weather-app-react.pages.dev"
            />
          </Stack>

          <Stack spacing="sm">
            <Title order={3}>App Dashboard w/ Login</Title>
            <Group>
              <Badges badges={['NodeJS', 'ReactJS', 'Material UI', 'React Router']} />
            </Group>
            <Text>
              A frontend mock up of an application with dashboard that requires user authentication.
              A sign up form with form validation is provided for users wishing to create an
              account. After login a Dashboard is presented with a list of current projects of the
              fictional company ACME Inc.
            </Text>
            <AppLink
              source="https://github.com/2brownc/dashboard-with-login"
              app="https://dashboardapp.pages.dev"
            />
          </Stack>

          <Stack spacing="sm">
            <Title order={3}>Calculator</Title>
            <Group>
              <Badges badges={['NodeJS', 'ReactJS', 'Material UI']} />
            </Group>
            <Text>
              A calculator built using ReactJS. Keyboard input, DEL and AC operations are supported.
            </Text>
            <AppLink source="https://github.com/2brownc/calc" app="https://calc-react.pages.dev" />
          </Stack>

          <Stack spacing="sm">
            <Title order={3}>Binary-Decimal Converter</Title>
            <Group>
              <Badges badges={['NodeJS', 'ReactJS', 'React-Bootstrap']} />
            </Group>
            <Text>An on the fly Binary-Decimal number converter.</Text>
            <AppLink
              source="https://github.com/2brownc/binary-decimal-conv"
              app="https://binary-decimal-conv.pages.dev"
            />
          </Stack>

          <Stack spacing="sm">
            <Title order={3}>Portfolio Website</Title>
            <Group>
              <Badges badges={['NodeJS', 'ReactJS', 'NextJS', 'Mantine UI']} />
            </Group>
            <Text>
              Created a website with a landing page, a project showcase, and a blog. Used Next.js
              framework and Mantine UI for styling. Light and dark mode for convenience of user. It
              is the website you are looking at right now.
            </Text>
            <AppLink source="https://github.com/2brownc/portfolio-website" app="/" />
          </Stack>
        </Stack>

        <Stack spacing="xl">
          <Title order={2} align="center">
            Education
          </Title>

          <Stack spacing="xs">
            <Text weight={700}>
              M.Tech, Computer Science Engineering, JNTU, Kakinada [2015 - 2016]
            </Text>
            <List>
              <List.Item>College: BVC Institute of Technology and Science, Amalapuram</List.Item>
              <List.Item>First Class</List.Item>
            </List>
          </Stack>

          <Stack spacing="xs">
            <Text weight={700}>B.Tech, Information Technology, JNTU, Kakinada [2008 - 2012]</Text>
            <List>
              <List.Item>
                College: Rajamahendri Institute of Engineering and Technology, Rajahmundry
              </List.Item>
              <List.Item>First Class</List.Item>
            </List>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
