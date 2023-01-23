import { rest } from "msw";
// import CONSTANTS from "../constants";

function getPosts() {
  return rest.get(`${CONSTANTS.API_URL}/posts`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          food: "foodA",
          gluten: false,
          lactose: true,
          fodmap: true,
        },
        {
            id: 2,
            food: "foodB",
            gluten: true,
            lactose: false,
            fodmap: true,
        },
      ])
    );
  });
}

export const handlers = [getPosts()];