import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FC } from "react";

export const UserMenu: FC = (): JSX.Element => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem>投稿一覧</MenuItem>
        <MenuItem>あなたの投稿</MenuItem>
        <MenuItem>育成論を投稿</MenuItem>
        <MenuItem>流行を知る</MenuItem>
      </MenuList>
    </Menu>
  );
};
