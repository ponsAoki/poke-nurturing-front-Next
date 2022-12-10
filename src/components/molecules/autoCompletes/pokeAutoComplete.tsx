import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useRecoilState } from "recoil";
import { PokemonState } from "../../../globalStates/atoms/pokemonState";
import { useStatusValues } from "../../../globalStates/atoms/statusValuesState/useStatusValues";
import { useFetchPokemonCollection } from "../../../hooks/useFetchPokemonCollection";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const PokeAutoComplete = ({ register }: Props): JSX.Element => {
  const pokeData = useFetchPokemonCollection();

  const [pokemonState, setPokemonState] = useRecoilState(PokemonState);
  const { changeBaseStats } = useStatusValues();

  const onPokemonChange = (val: any) => {
    const pokemon = pokeData.find(
      (poke: any) => `${poke.name} ${poke.form}` === val
    );
    //ポケモンstateを変更
    setPokemonState(pokemon);
    //検索されたポケモンの種族値を能力値stateに反映
    changeBaseStats(pokemon);
  };

  return (
    <AutoComplete
      openOnFocus
      value={pokemonState}
      onChange={(val) => onPokemonChange(val)}
    >
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
