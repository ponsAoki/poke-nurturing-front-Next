import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useFetchMoveCollection } from "../../../hooks/useFetchMoveCollection";

type Props = {
  moveNum: number;
  register: UseFormRegister<FieldValues>;
};

export const MoveAutoComplete = ({ moveNum, register }: Props): JSX.Element => {
  const moves = useFetchMoveCollection();

  return (
    <AutoComplete openOnFocus>
      <AutoCompleteInput
        placeholder={`技${moveNum}`}
        width={400}
        {...register(`move${moveNum}`)}
      />
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
