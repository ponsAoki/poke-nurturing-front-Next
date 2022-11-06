export type RouteParams = { [key: string]: string | number };
export declare type Route = {
  path: (params: RouteParams) => string;
  pathName: string;
};
export type RouteKey = "home" | "postDetail" | "newPost";
export const useRouting = (): Record<RouteKey, Route> => {
  return {
    home: {
      path: () => "/",
      pathName: "TOP",
    },
    postDetail: {
      path: ({ postId }) => `/post/${postId}`,
      pathName: "育成論詳細",
    },
    newPost: {
      path: () => `/post/new`,
      pathName: "育成論投稿",
    },
  };
};
