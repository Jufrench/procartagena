import { Box, Group, Badge, Stack, Title, Text, Modal, Card, Menu, ActionIcon, rem } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import type { MetaFunction } from "@remix-run/node";
import { IconDots, IconSquare, IconFileZip, IconTrash } from "@tabler/icons-react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const flags = {
  salsa: {
    type: 'salsa',
    color: 'red'
  },
  music: {
    type: 'music',
    color: 'teal'
  }
};

const locations: LocationType[] = [
  {
    name: 'Café Havana',
    flags: ['salsa', 'music']
    // flags: [flags.salsa, flags.music]
  },
  {
    name: 'Estelar',
    flags: ['hotel']
  }
];

type LocationType = {
  name: string,
  // flags: string[]
  flags: any[]
}

function Location(props: { location: LocationType }) {
  return (
    <Stack gap={0}>
      <Title order={3}>{props.location.name}</Title>
      <Group gap="sm">
        {props.location.flags.map(flag => {
          return (
            <Badge size="xs">{flag.type}</Badge>
          )
        })}
      </Group>
    </Stack>
  )
}

function CardLocation(props: { location: LocationType }) {
  return (
    <Card style={{ background: "#ccc" }}>
      <Card.Section withBorder inheritPadding>
        <Group justify="space-between">
          <Title order={3}>{props.location.name}</Title>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconSquare style={{ width: rem(14), height: rem(14) }} />}>
                Save
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                color="red"
              >
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>
      <Group gap="sm" mt="sm">
        {props.location.flags.map(flag => {
          return (
            <Badge size="sm">{flag}</Badge>
          )
        })}
      </Group>
    </Card>
  )
}

function MainModal() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <Modal opened={opened} onClose={() => null} centered>
      <Stack>
      {locations.map((item: LocationType) => {
        return (
          // <Location location={item} />
          <CardLocation location={item} />
        )
      })}
      </Stack>
    </Modal>
  )
}

export default function Index() {
  return (
    <Box>
      {/* {locations.map((item: LocationType) => {
        return (
          <Location location={item} />
        )
      })} */}
      <MainModal />
    </Box>
    // <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    //   <h1>Welcome to Remix</h1>
    //   <ul>
    //     <li>
    //       <a
    //         target="_blank"
    //         href="https://remix.run/start/quickstart"
    //         rel="noreferrer"
    //       >
    //         5m Quick Start
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         target="_blank"
    //         href="https://remix.run/start/tutorial"
    //         rel="noreferrer"
    //       >
    //         30m Tutorial
    //       </a>
    //     </li>
    //     <li>
    //       <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
    //         Remix Docs
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}
