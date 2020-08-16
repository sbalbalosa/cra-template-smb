/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

export const handlers = [
  rest.get('/mock', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      on: true,
    }),
  )),
];
