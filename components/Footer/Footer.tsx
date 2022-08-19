import { createStyles, Anchor, Group } from '@mantine/core';
// import { ActionIcon } from '@mantine/core';
// import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import Link from 'next/link';

// import Logo from '../Logo/Logo';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid
      ${theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[2]
      }`,
    background: `${theme.colorScheme === 'dark'
      ? theme.colors.dark[5]
      : 'white'
      }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export default function FooterCentered({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Link
      href={link.link}
      key={link.label}
      passHref
    >
      <Anchor<'a'>
        color="dimmed"
        sx={{ lineHeight: 1 }}
        size="sm"
      >
        {link.label}
      </Anchor>
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        {/* <Logo /> */}

        <Group
          className={classes.links}
          position="center"
        >
          {items}
        </Group>

        {/*
        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
          */}
      </div>
    </div>
  );
}
