'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {Input} from '@/components/ui/input';
import {toast} from '@/components/ui/use-toast';

import {useMutation} from 'convex/react';
import {api} from '../../convex/_generated/api';

const FormSchema = z.object({
  date: z.string().min(1, {
    message: 'Date required',
  }),
  pair: z.string().min(1, {message: 'Pair is required'}),
  buySell: z.string().min(1, {message: 'Select one'}),
  pips: z.string().min(1, {message: 'How many pips?'}),
  wL: z.string().min(1, {message: 'Select one'}),
});

export function CreateForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date: '',
      pair: '',
      buySell: '',
      pips: '',
      wL: '',
    },
  });

  const createTrade = useMutation(api.trades.createTrade);

  async function onSubmit(
    data: z.infer<typeof FormSchema>
  ) {
    const trade = await createTrade({
      date: data.date,
      pair: data.pair,
      buySell: data.buySell,
      pips: data.pips,
      wL: data.wL,
    });
    toast({
      title: 'Trade saved: ',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-background p-4">
          <code className="text-white">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[600px] grid grid-cols-2 gap-4"
      >
        <FormField
          control={form.control}
          name="date"
          render={({field}) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  placeholder="+/-"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pair"
          render={({field}) => (
            <FormItem>
              <FormLabel>Pair</FormLabel>
              <FormControl>
                <Input
                  placeholder="XAU/USD"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="buySell"
          render={({field}) => (
            <FormItem>
              <FormLabel>BUY or SELL</FormLabel>
              <FormControl>
                <Input
                  placeholder="SELL"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pips"
          render={({field}) => (
            <FormItem>
              <FormLabel>Pips</FormLabel>
              <FormControl>
                <Input
                  placeholder="+/-"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="wL"
          render={({field}) => (
            <FormItem>
              <FormLabel>W / BE / L</FormLabel>
              <FormControl>
                <Input
                  placeholder="W"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="self-end"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
