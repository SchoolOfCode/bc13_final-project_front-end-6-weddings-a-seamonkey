import { rest } from "msw";

const url = process.env.REACT_APP_SERVER_URL;

export const handlers = [
	// Handles a GET request
	rest.get(`${url}/api/foods/crumpet`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				success: true,
				payload: {
					product_id: 1,
					product_name: "Shiney crumpets",
					picture: "picture here",
					lactose: true,
					fodmap: true,
					gluten: true,
					barcode_number: "5010044000701",
				},
			})
		);
	}),
];
