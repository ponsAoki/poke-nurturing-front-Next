import axios from "axios";

export const getAllPosts = async () => {
  const apiRes = await axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`)
    .catch((err) => {
      throw new Error("全投稿取得エラー");
    });
  const postData = apiRes.data;
  return postData;
};
