import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchItemCollection = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    (async () => {
      const apiRes = await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/search/item`)
        .catch((err) => {
          throw new Error(err);
        });
      setItemList(apiRes.data);
    })();
  }, []);

  return itemList;
};
