'use client';

import {CandlestickChart} from 'lucide-react';
import {CreateForm} from '../../components/CreateForm';
import {Separator} from '@/components/ui/separator';

('@/components/form');

const CreatePage = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-5xl mb-5 flex items-center gap-2">
        Add new Trade
        <CandlestickChart
          size={40}
          className="stroke-emerald-500"
        />
      </h1>
      <Separator className="w-1/2 mb-20" />

      <CreateForm />
    </div>
  );
};

export default CreatePage;
