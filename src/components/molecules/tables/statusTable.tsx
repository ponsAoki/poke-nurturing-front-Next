import {
  Box,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { StatusValuesState } from "../../../globalStates/atoms/statusValuesState";
import { realValuesSelector } from "../../../globalStates/atoms/statusValuesState/selectors/realValuesSelector";
import { useStatusValues } from "../../../globalStates/atoms/statusValuesState/useStatusValues";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const StatusTable = ({ register }: Props) => {
  const { baseStats, effortValues, individualValues } =
    useRecoilValue(StatusValuesState);
  const realValuesState = useRecoilValue(realValuesSelector);
  const { changeIndividualValues, changeEffortValues } = useStatusValues();

  return (
    <TableContainer>
      <Table>
        <TableCaption>努力値・個体値の欄に入力して調整できます</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th textAlign={"right"}>HP</Th>
            <Th textAlign={"right"}>こうげき</Th>
            <Th textAlign={"right"}>ぼうぎょ</Th>
            <Th textAlign={"right"}>とくこう</Th>
            <Th textAlign={"right"}>とくぼう</Th>
            <Th textAlign={"right"}>すばやさ</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>種族値</Td>
            {baseStats.map((bn, i) => (
              <Td key={i} textAlign={"right"}>
                {bn}
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>個体値</Td>
            {individualValues.map((iv, i) => (
              <Td key={i} textAlign={"right"}>
                <Input
                  type={"number"}
                  value={iv}
                  placeholder={"31"}
                  textAlign={"right"}
                  width={16}
                  // max, min効かない
                  // max={31}
                  // min={0}
                  onChange={(e) =>
                    changeIndividualValues(Number(e.target.value), i)
                  }
                />
                {/* NumberInputだとなぜかうまくいかない */}
                {/* <NumberInput
                  // value={iv}
                  placeholder={"31"}
                  min={0}
                  max={31}
                  placeholder="iv"
                  {...register("iv")}
                  onChange={(val) => changeIndividualValues(Number(val), i)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput> */}
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>努力値</Td>
            {effortValues.map((ev, i) => (
              <Td key={i} textAlign={"right"}>
                <Input
                  type={"number"}
                  value={ev}
                  placeholder={"0"}
                  textAlign={"right"}
                  width={16}
                  onChange={(e) =>
                    changeEffortValues(Number(e.target.value), i)
                  }
                />
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>実数値</Td>
            {realValuesState.map((rv, i) => (
              <Td key={i} textAlign={"right"}>
                <Box textAlign={"right"} width={16}>
                  {rv}
                </Box>
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
