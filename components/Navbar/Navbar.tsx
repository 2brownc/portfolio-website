// import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { createStyles, Header, Group } from '@mantine/core';
// import { Autocomplete, Burger } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import { IconSearch } from '@tabler/icons';

import ColorSchemeSegmentedToggle from '../ColorSchemeToggle/ColorSchemeSegmentedToggle';
import Logo from '../Logo/Logo';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  colorSchemeToggle: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

export default function HeaderSearch({ links }: HeaderSearchProps) {
  // const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const router = useRouter();

  const items = links.map((link) => (
    <Link href={link.link} key={link.link}>
      <a
        className={
          cx(classes.link,
            {
              [classes.linkActive]: link.link === '/'
                ? router.pathname === link.link
                : router.pathname.startsWith(link.link),
            }
          )
        }
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          {/* <Burger opened={opened} onClick={toggle} size="sm" /> */}
          <Link href="/">
            <div
              style={{
                cursor: "pointer",
              }}
            >
              <Logo />
            </div>
          </Link>
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          {/*
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size={16} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />
            */}
          <Group className={classes.colorSchemeToggle}>
            <ColorSchemeSegmentedToggle />
          </Group>
        </Group>
      </div>
    </Header>
  );
}
