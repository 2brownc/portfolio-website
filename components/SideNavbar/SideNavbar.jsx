import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  createStyles,
  Navbar,
  TextInput,
  Code,
  UnstyledButton,
  Text,
  Group,
  ActionIcon,
  Tooltip,
} from '@mantine/core';
/*
import {
  IconBulb,
  IconUser,
  IconCheckbox,
  IconSearch,
  IconPlus,
  IconSelector,
} from '@tabler/icons';
*/

import ColorSchemeSegmentedToggle from '../ColorSchemeToggle/ColorSchemeSegmentedToggle';

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
  },

  section: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,

    '&:not(:last-of-type)': {
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },
  },

  searchCode: {
    fontWeight: 700,
    fontSize: 10,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
      }`,
  },

  mainLinks: {
    paddingLeft: theme.spacing.md - theme.spacing.xs,
    paddingRight: theme.spacing.md - theme.spacing.xs,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    /*fontSize: theme.fontSizes.xs,*/
    padding: `8px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: 20,
    height: 20,
    pointerEvents: 'none',
  },

  collections: {
    paddingLeft: theme.spacing.md - 6,
    paddingRight: theme.spacing.md - 6,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: theme.spacing.md + 2,
    paddingRight: theme.spacing.md,
    marginBottom: 5,
  },

  collectionLink: {
    display: 'block',
    padding: `8px ${theme.spacing.xs}px`,
    textDecoration: 'none',
    borderRadius: theme.radius.sm,
    /*fontSize: theme.fontSizes.xs,*/
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
}));

/*const links = [
  { icon: IconBulb, label: 'Activity', notifications: 3 },
  { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
  { icon: IconUser, label: 'Contacts' },
];

const collections = [
  { emoji: '👍', label: 'Sales' },
  { emoji: '🚚', label: 'Deliveries' },
  { emoji: '💸', label: 'Discounts' },
  { emoji: '💰', label: 'Profits' },
  { emoji: '✨', label: 'Reports' },
  { emoji: '🛒', label: 'Orders' },
  { emoji: '📅', label: 'Events' },
  { emoji: '🙈', label: 'Debts' },
  { emoji: '💁‍♀️', label: 'Customers' },
];
*/

export default function SideNavbar({ links, opened, toggle }) {
  const router = useRouter();
  const { classes, cx } = useStyles();

  const mainLinks = links.map((link) => (
    <Link href={link.link} key={link.key}>
      <UnstyledButton onClick={toggle}
        className={cx(classes.mainLink,
          {
            [classes.linkActive]: link.link === '/'
              ? router.pathname === link.link
              : router.pathname.startsWith(link.link),
          }
        )}>
        <div className={classes.mainLinkInner}>
          <span>{link.label}</span>
        </div>
      </UnstyledButton>
    </Link>
  ));
  /*
    const collectionLinks = collections.map((collection) => (
      <a
        href="/"
        onClick={(event) => event.preventDefault()}
        key={collection.label}
        className={classes.collectionLink}
      >
        <span style={{ marginRight: 9, fontSize: 16 }}>{collection.emoji}</span> {collection.label}
      </a>
    ));
  */
  return (
    opened &&
    (
      <Navbar
        height={700}
        width={{ sm: 300 }}
        p="md"
        className={classes.navbar}
        sx={(theme) => ({ zIndex: 999 })}
      >
        {/*
      <Navbar.Section className={classes.section}>
      </Navbar.Section>

        < TextInput
          placeholder="Search"
          icon={< IconSearch size={12} stroke={1.5} />}
          rightSectionWidth={70}
          rightSection={< Code className={classes.searchCode} > Ctrl + K</Code >}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          mb="sm"
        />

      */}
        <Navbar.Section className={classes.section}>
          <div className={classes.mainLinks}>{mainLinks}</div>
        </Navbar.Section>
        {/*
      <Navbar.Section className={classes.section}>
        <Group className={classes.collectionsHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus size={12} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{collectionLinks}</div>
      </Navbar.Section>
    */}

        <Navbar.Section className={classes.section} >
          <ColorSchemeSegmentedToggle />
        </Navbar.Section>
      </Navbar >
    )
  );
}