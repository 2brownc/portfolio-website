import {
  Container,
  Stack,
  Text,
  Title,
  Group,
  Button,
  Divider,
  Badge,
  List,
} from '@mantine/core';

function AppLink({ source, app }) {
  return (
    <Group spacing="sm">
      <Button
        component="a"
        href={source}
        target="_blank"
        variant="light"
        compact
      >
        View Source
      </Button>
      <Button
        component="a"
        href={app}
        target="_blank"
        variant="light"
        compact
      >
        Open App
      </Button>
    </Group>
  );
}

function Badges({ badges }) {
  return (
    <Group spacing="xs">
      {
        badges.map((badge) => (
          <Badge
            variant="outline"
            color="violet"
          >
            {badge}
          </Badge>
        ))
      }
    </Group>
  );
}

export default function Resume() {
  return (
    <Container py={20}>
      <Stack>
        <Stack
          spacing={0}
          align="center"
        >
          <Text
            transform="uppercase"
            size="sm"
            color="dimmed"
          >
            Resume
          </Text>
          <Title order={1}>
            Brown Chinta
          </Title>
        </Stack>
        <Stack
          spacing={0}
          align="center"
        >
          <Button
            component="a"
            href="mailto:2brownit@gmail.com"
            variant="subtle"
            compact
          >
            2brownit@gmail.com
          </Button>
          <Text>
            +91 7659930282
          </Text>
          <Button
            component="a"
            href="https://github.com/2brownc"
            target="_blank"
            variant="subtle"
            compact
          >
            Github Profile
          </Button>
        </Stack>

        <Divider />

        <Stack spacing="xl">
          <Title
            order={2}
            align="center"
          >
            Skills
          </Title>
          <List>
            <List.Item>
              HTML, CSS, Javascript
            </List.Item>
            <List.Item>
              NodeJS, ReactJS, NextJS
            </List.Item>
          </List>
        </Stack>

        <Stack spacing="xl">
          <Title
            order={2}
            align="center"
          >
            Projects
          </Title>

          <Stack spacing="sm">
            <Title order={3}>
              Weather App
            </Title>
            <Group>
              <Badges badges={['NodeJS', 'ReactJS', 'Material UI', 'React Redux']} />
            </Group>
            <Text>
              The app shows the current weather condition for the user&apos;s location.
              It also gives weather forecast for the next 24 hours and the next 7 days.
              User can select a custom location and specify different units for weather information.
            </Text>
            <AppLink
              source="https://github.com/2brownc/weather-app"
              app="https://weather-app-react.pages.dev"
            />
          </Stack>

          <Stack spacing="sm">
            <Title order={3}>
              App Dashboard w/ Login
            </Title>
            <Group>
              <Badges badges={['NodeJS', 'ReactJS', 'Material UI', 'React Router']} />
            </Group>
            <Text>
              An application dashboard that can only be accessed by authenticated users.
              A sign up form with form validation is provided
              for users wishing to create an account.
            </Text>
            <AppLink
              source="https://github.com/2brownc/dashboard-with-login"
              app="https://dashboardapp.pages.dev"
            />
          </Stack>

          <Stack spacing="sm">
            <Title order={3}>
              Calculator
            </Title>
            <Group>
              <Badges badges={['NodeJS', 'ReactJS', 'Material UI']} />
            </Group>
            <Text>
              A calculator built using ReactJS. Keyboard input, DEL and AC operations are supported.
            </Text>
            <AppLink
              source="https://github.com/2brownc/calc"
              app="https://calc-react.pages.dev"
            />
          </Stack>

          <Stack spacing="sm">
            <Title order={3}>
              Binary-Decimal Converter
            </Title>
            <Group>
              <Badges badges={['NodeJS', 'ReactJS', 'React-Bootstrap']} />
            </Group>
            <Text>
              An on the fly Binary-Decimal number converter.
            </Text>
            <AppLink
              source="https://github.com/2brownc/binary-decimal-conv"
              app="https://binary-decimal-conv.pages.dev"
            />
          </Stack>

          <Stack spacing="sm">
            <Title order={3}>
              Portfolio Website
            </Title>
            <Group>
              <Badges badges={['NodeJS', 'ReactJS', 'NextJS', 'Mantine UI']} />
            </Group>
            <Text>
              A website with a project showcase, a blog and a resume page.
              It is the website you are looking at right now.
            </Text>
            <AppLink
              source="https://github.com/2brownc/portfolio-website"
              app="/"
            />
          </Stack>

        </Stack>

        <Stack spacing="xl">
          <Title
            order={2}
            align="center"
          >
            Education
          </Title>

          <Stack spacing="xs">
            <Text
              weight={700}
            >
              M.Tech, Computer Science Engineering, JNTU, Kakinada [2014 - 2016]
            </Text>
            <List>
              <List.Item>
                College: BVC Institute of Technology and Science, Amalapuram
              </List.Item>
              <List.Item>
                First Class
              </List.Item>
            </List>
          </Stack>

          <Stack spacing="xs">
            <Text
              weight={700}
            >
              B.Tech, Information Technology, JNTU, Kakinada [2008 - 2012]
            </Text>
            <List>
              <List.Item>
                College: Rajamahendri Institute of Engineering and Technology, Rajahmundry
              </List.Item>
              <List.Item>
                First Class
              </List.Item>
            </List>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
