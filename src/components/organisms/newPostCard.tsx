import {
  Box,
  Divider,
  Heading,
  HStack,
  Input,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { AbilityAutoComplete } from "../molecules/inputs/abilityAutoComplete";
import { ItemAutoComplete } from "../molecules/inputs/itemAutoComplete";
import { MoveAutoComplete } from "../molecules/inputs/moveAutoComplete";
import { NatureAutoComplete } from "../molecules/inputs/natureAutoComplete";
import { PokeAutoComplete } from "../molecules/inputs/pokeAutoComplete";
import { SexRadioStack } from "../molecules/radio/sexRadioStack";
import { StatusTable } from "../molecules/tables/statusTable";
import { Tiptap } from "../Tiptap";

export const NewPostCard = (): JSX.Element => {
  return (
    <Box
      w={{ base: "100%", md: "80%" }}
      padding={{ base: 12, md: 24 }}
      borderWidth="1px"
      borderRadius={4}
      boxShadow="md"
    >
      <Heading fontSize="xl" fontWeight="500">
        新しい育成論
      </Heading>
      <Divider></Divider>
      <Stack mt={12} spacing={8}>
        <Input placeholder="育成論タイトル or 型名" />
        <HStack>
          <PokeAutoComplete />
          <Input type={"number"} placeholder="Lv." />
        </HStack>
        <HStack justify={"space-between"}>
          <SexRadioStack />
          <Switch size="lg" _checked={{ color: "limegreen" }} />
        </HStack>
        <HStack>
          <AbilityAutoComplete />
          <ItemAutoComplete />
        </HStack>
        <NatureAutoComplete />
        <StatusTable />
        <HStack>
          <MoveAutoComplete moveNum={1} />
          <MoveAutoComplete moveNum={2} />
        </HStack>
        <HStack>
          <MoveAutoComplete moveNum={3} />
          <MoveAutoComplete moveNum={4} />
        </HStack>
        <Tiptap />
      </Stack>
    </Box>
  );
};
