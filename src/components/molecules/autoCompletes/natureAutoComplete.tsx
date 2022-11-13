import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { NATURES } from "../../../constants/natures";

export const NatureAutoComplete = (): JSX.Element => {
  const natures = NATURES;

  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput placeholder="性格" width={400} />
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
