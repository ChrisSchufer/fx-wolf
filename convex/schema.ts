import {defineSchema, defineTable} from 'convex/server';
import {v} from 'convex/values';

export default defineSchema({
  trades: defineTable({
    buySell: v.string(),
    date: v.string(),
    pair: v.string(),
    pips: v.string(),
    wL: v.string(),
  }),
});
