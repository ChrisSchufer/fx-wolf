'use client';

import {useMutation, useQuery} from 'convex/react';
import React from 'react';
import {api} from '../../../convex/_generated/api';
import {Info, Trash2} from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Dashboard = () => {
  const trades = useQuery(api.trades.getTrades);
  const deleteTrade = useMutation(api.trades.deleteTrade);

  return (
    <>
      <div className="grid grid-cols-5 bg-neutral-200 dark:bg-neutral-900 py-1">
        <p className="flex justify-center font-bold">
          Date
        </p>

        <p className="flex justify-center font-bold">
          BUY/SELL
        </p>

        <p className="flex justify-center font-bold">
          Pair
        </p>

        <p className="flex justify-center font-bold">
          Pips
        </p>

        <p className="flex justify-center font-bold">
          W/L/BE
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info
                  size={12}
                  className="ml-1"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Win, Loss or Break Even</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </p>
      </div>
      {trades?.map((trade, index) => {
        let wLcolor = '';
        let bg =
          index % 2 === 0
            ? ''
            : 'bg-neutral-200 dark:bg-background';
        let buySellColor =
          trade.buySell === 'BUY'
            ? 'text-green-600'
            : 'text-red-600';

        if (trade.pips.slice(0, 1) === '-')
          wLcolor = 'text-red-600';
        else if (trade.pips === '0') wLcolor = 'black';
        else wLcolor = 'text-green-600';
        return (
          <div
            key={trade._id}
            className={`${bg} dark:text-white/90 font-semibold w-full grid grid-cols-5 justify-center py-1 relative border-t-neutral-200 border`}
          >
            <p className="flex justify-center">
              {trade.date}
            </p>

            <p
              className={`${buySellColor} flex justify-center`}
            >
              {trade.buySell}
            </p>

            <p className="flex justify-center">
              {trade.pair}
            </p>

            <p className={`${wLcolor} flex justify-center`}>
              {trade.pips === '0' ? '-' : trade.pips}
            </p>

            <p className="flex justify-center">
              {trade.wL}
            </p>

            <Trash2
              onClick={(e) => {
                deleteTrade({_id: trade._id});
              }}
              className="absolute right-4 top-1 w-5 h-5 cursor-pointer hover:stroke-red-500 transition-colors duration-150"
            />
          </div>
        );
      })}
    </>
  );
};

export default Dashboard;
