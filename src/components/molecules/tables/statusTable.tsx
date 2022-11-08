import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { STATUS_VALUES } from "../../../constants/status-values";

export const StatusTable = () => {
  const { BASE_STATS, INDIVIDUAL_VALUE, EFFORT_VALUE, REAL_VALUE } =
    STATUS_VALUES;
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
            {BASE_STATS.map((bn) => (
              <Td key={bn} textAlign={"right"}>
                {bn}
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>個体値</Td>
            {INDIVIDUAL_VALUE.map((iv) => (
              <Td key={iv} textAlign={"right"}>
                {iv}
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>努力値</Td>
            {EFFORT_VALUE.map((ev) => (
              <Td key={ev} textAlign={"right"}>
                {ev}
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>実数値</Td>
            {REAL_VALUE.map((rv) => (
              <Td key={rv} textAlign={"right"}>
                {rv}
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
