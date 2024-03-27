import {mutation, query} from './_generated/server';
import {v} from 'convex/values';

export const getTrades = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query('trades').collect();
  },
});

export const createTrade = mutation({
  args: {
    date: v.string(),
    pair: v.string(),
    buySell: v.string(),
    pips: v.string(),
    wL: v.string(),
  },
  handler: async (ctx, args) => {
    const tradeId = await ctx.db.insert('trades', {
      date: args.date,
      pair: args.pair,
      buySell: args.buySell,
      pips: args.pips,
      wL: args.wL,
    });

    return tradeId;
  },
});

export const deleteTrade = mutation({
  args: {_id: v.id('trades')},
  handler: async (ctx, args) => {
    await ctx.db.delete(args._id);
  },
});
