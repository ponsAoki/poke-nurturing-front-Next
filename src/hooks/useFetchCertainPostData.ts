import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchCertainPostData = (postId: string | number) => {
  const [postData, setPostData] = useState<any>();

  useEffect(() => {
    (async () => {
      if (!postId) return;
      const apiRes = await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${postId}`)
        .catch((err) => {
          throw new Error(err);
        });
      setPostData(apiRes.data);
    })();
  }, [postId]);
  return postData;
};
