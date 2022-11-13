import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { useFetchMoveCollection } from "../../../hooks/useFetchMoveCollection";

type Props = {
  moveNum: number;
};

export const MoveAutoComplete = ({ moveNum }: Props): JSX.Element => {
  const moves = useFetchMoveCollection();

  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput placeholder={`技${moveNum}`} width={400} />
      <AutoCompleteList>
        {moves.map((move: any) => {
          return (
            <AutoCompleteItem key={move.id} value={move.jname}>
              {move.jname}
            </AutoCompleteItem>
          );
        })}
      </AutoCompleteList>
    </AutoComplete>
  );
};
