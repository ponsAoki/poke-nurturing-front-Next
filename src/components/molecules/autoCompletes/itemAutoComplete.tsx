import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useFetchItemCollection } from "../../../hooks/useFetchItemCollection";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const ItemAutoComplete = ({ register }: Props): JSX.Element => {
  const items = useFetchItemCollection();

  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput
        placeholder="持ち物"
        width={400}
        {...register("item")}
      />
      <AutoCompleteList>
        {items.map((item: any) => {
          if (!item.name.japanese) return <></>;
          return (
            <AutoCompleteItem key={item.id} value={item.name.japanese}>
              {item.name.japanese}
            </AutoCompleteItem>
          );
        })}
      </AutoCompleteList>
    </AutoComplete>
  );
};
