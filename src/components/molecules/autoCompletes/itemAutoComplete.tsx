import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { useFetchItemCollection } from "../../../hooks/useFetchItemCollection";

export const ItemAutoComplete = (): JSX.Element => {
  const items = useFetchItemCollection();

  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput placeholder="持ち物" width={400} />
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
