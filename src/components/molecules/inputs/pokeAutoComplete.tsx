import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { useFetchPokemonCollection } from "../../../hooks/useFetchPokemonCollection";

export const PokeAutoComplete = (): JSX.Element => {
  const pokeData = useFetchPokemonCollection();

  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput placeholder="ポケモンを検索" width={400} />
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
