import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchMoveCollection = () => {
  const [moveList, setMoveList] = useState([]);

  useEffect(() => {
    (async () => {
      const apiRes = await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/search/move`)
        .catch((err) => {
          throw new Error(err);
        });
      setMoveList(apiRes.data);
    })();
  }, []);

  return moveList;
};
