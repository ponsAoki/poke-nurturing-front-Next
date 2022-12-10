import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { NATURES } from "../../../constants/natures";
import { NatureState } from "../../../globalStates/atoms/natureState";
import { useNature } from "../../../globalStates/atoms/natureState/useNatureState";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const NatureAutoComplete = ({ register }: Props): JSX.Element => {
  const natures = NATURES;
  const natureState = useRecoilValue(NatureState);
  const changeNature = useNature();

  return (
    <AutoComplete
      openOnFocus
      onChange={(natureName) => changeNature(natureName)}
    >
      <AutoCompleteInput
        placeholder="性格"
        width={400}
        {...register("nature")}
        value={natureState.name}
      />
      <AutoCompleteList>
        {natures.map((nature: any) => {
          return (
            <AutoCompleteItem key={nature.name} value={nature.name}>
              {nature.name}
            </AutoCompleteItem>
          );
        })}
      </AutoCompleteList>
    </AutoComplete>
  );
};
