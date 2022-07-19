import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  ExternalLinkIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";

const Nav = () => (
  <Box borderWidth="1px" borderRadius="lg">
    <div style={{ margin: "0.5rem" }}>
      <Button
        variant="ghost"
        colorScheme="red"
        fontSize="2xl"
        color="#EC255A"
        mr="1"
      >
        PROFILE.MOE
      </Button>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          colorScheme="red"
        />
        <MenuList>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘T">
            Themes
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
            About
          </MenuItem>
          <MenuItem icon={<InfoOutlineIcon />} command="⌘⇧N">
            Help
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  </Box>
);

export default Nav;
