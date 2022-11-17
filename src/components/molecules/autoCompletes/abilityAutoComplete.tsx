import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const AbilityAutoComplete = ({ register }: Props): JSX.Element => {
  const abilities = ["どんかん", "マイペース"];

  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput
        placeholder="特性"
        width={400}
        {...register("ability")}
      />
      <AutoCompleteList>
        {abilities &&
          abilities.map((ability: any) => (
            <AutoCompleteItem key={ability} value={ability}>
              {ability}
            </AutoCompleteItem>
          ))}
      </AutoCompleteList>
    </AutoComplete>
  );
};
