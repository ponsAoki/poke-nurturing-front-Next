import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { PokemonState } from "../../../globalStates/atoms/pokemonState";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const AbilityAutoComplete = ({ register }: Props): JSX.Element => {
  const pokemonState = useRecoilValue(PokemonState);
  const abilities = pokemonState.abilities
    ? pokemonState.abilities.concat(pokemonState.hidden_abilities)
    : [];

  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput
        placeholder="特性"
        width={400}
        {...register("ability")}
      />
      <AutoCompleteList>
        {abilities.map((ability: any) => (
          <AutoCompleteItem key={ability} value={ability}>
            {ability}
          </AutoCompleteItem>
        ))}
      </AutoCompleteList>
    </AutoComplete>
  );
};
