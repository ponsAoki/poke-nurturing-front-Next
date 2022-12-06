import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { PokemonState } from "../../../globalStates/atoms/pokemonState";
import { useFetchPokemonCollection } from "../../../hooks/useFetchPokemonCollection";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const PokeAutoComplete = ({ register }: Props): JSX.Element => {
  const pokeData = useFetchPokemonCollection();

  const setPokemonState = useSetRecoilState(PokemonState);

  const onChange = (val: any) => {
    const pokemon = pokeData.find(
      (poke: any) => `${poke.name} ${poke.form}` === val
    );
    setPokemonState(pokemon);
  };

  return (
    <AutoComplete openOnFocus onChange={(val) => onChange(val)}>
      <AutoCompleteInput
        placeholder="ポケモンを検索"
        width={400}
        {...register("pokemonName")}
      />
      <AutoCompleteList>
        {pokeData.map((poke: any) => (
          <AutoCompleteItem key={poke._id} value={poke.name + ` ${poke.form}`}>
            {`${poke.name} ${poke.form}`}
          </AutoCompleteItem>
        ))}
      </AutoCompleteList>
    </AutoComplete>
  );
};
