import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { NavItem } from "./Header";

type Props = {
  items: NavItem[];
};

export const UserMenu: FC<Props> = ({ items }): JSX.Element => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        {items.map((item) => (
          <Link key={item.label} href={item.href}>
            <MenuItem>{item.label}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};
