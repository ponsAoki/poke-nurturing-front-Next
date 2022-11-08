import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

export const AbilityAutoComplete = (): JSX.Element => {
  const abilities = ["どんかん", "マイペース"];

  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput placeholder="特性" width={400} />
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
