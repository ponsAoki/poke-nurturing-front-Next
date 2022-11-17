import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useFetchPokemonCollection } from "../../../hooks/useFetchPokemonCollection";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const PokeAutoComplete = ({ register }: Props): JSX.Element => {
  const pokeData = useFetchPokemonCollection();

  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput
        placeholder="ポケモンを検索"
        width={400}
        {...register("pokemonName")}
      />
      <AutoCompleteList>
        {pokeData.map((poke: any) => (
          <AutoCompleteItem key={poke.name} value={poke.name}>
            {poke.name + ` ${poke.form}`}
          </AutoCompleteItem>
        ))}
      </AutoCompleteList>
    </AutoComplete>
  );
};
