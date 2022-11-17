import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Input,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AbilityAutoComplete } from "../molecules/autoCompletes/abilityAutoComplete";
import { ItemAutoComplete } from "../molecules/autoCompletes/itemAutoComplete";
import { MoveAutoComplete } from "../molecules/autoCompletes/moveAutoComplete";
import { NatureAutoComplete } from "../molecules/autoCompletes/natureAutoComplete";
import { PokeAutoComplete } from "../molecules/autoCompletes/pokeAutoComplete";
import { SexRadioStack } from "../molecules/radio/sexRadioStack";
import { StatusTable } from "../molecules/tables/statusTable";
import { ArticleTextArea } from "../molecules/textAreas/articleTextArea";

export const NewPostCard = (): JSX.Element => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any): void => {
    console.log(data);
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack mt={12} spacing={8}>
          <Input
            placeholder="育成論タイトル or 型名"
            {...register("postTitle")}
          />
          <HStack>
            <PokeAutoComplete register={register} />
            <Input type={"number"} placeholder="Lv." {...register("lv")} />
          </HStack>
          <HStack justify={"space-between"}>
            <SexRadioStack register={register} />
            <Switch
              size="lg"
              _checked={{ color: "limegreen" }}
              {...register("specialColor")}
            />
          </HStack>
          <HStack>
            <AbilityAutoComplete register={register} />
            <ItemAutoComplete register={register} />
          </HStack>
          <NatureAutoComplete register={register} />
          <StatusTable />
          <HStack>
            <MoveAutoComplete moveNum={1} register={register} />
            <MoveAutoComplete moveNum={2} register={register} />
          </HStack>
          <HStack pb={8}>
            <MoveAutoComplete moveNum={3} register={register} />
            <MoveAutoComplete moveNum={4} register={register} />
          </HStack>
          <ArticleTextArea register={register} />
          <Stack direction="row" justify={"center"} w={"100%"} pt={12}>
            <Button
              type="submit"
              bg="blackAlpha.800"
              color={"white"}
              borderRadius="50px"
              w={{ base: "200px", md: "250px" }}
            >
              投稿
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};
