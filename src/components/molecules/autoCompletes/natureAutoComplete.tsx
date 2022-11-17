import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { NATURES } from "../../../constants/natures";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const NatureAutoComplete = ({ register }: Props): JSX.Element => {
  const natures = NATURES;

  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput
        placeholder="性格"
        width={400}
        {...register("nature")}
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
