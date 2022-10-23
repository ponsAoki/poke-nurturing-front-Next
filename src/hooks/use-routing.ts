export type RouteParams = { [key: string]: string | number };
export declare type Route = {
  path: (params: RouteParams) => string;
  pathName: string;
};
export type RouteKey = "postDetail";
export const useRouting = (): Record<RouteKey, Route> => {
  return {
    postDetail: {
      path: ({ postId }) => `/post/${postId}`,
      pathName: "育成論詳細",
    },
  };
};
