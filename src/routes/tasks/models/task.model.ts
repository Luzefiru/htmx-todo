import { z } from 'zod';

export const TaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  completed: z.preprocess((val) => String(val) === 'true', z.boolean()),
  due_date: z.preprocess(
    (val) => new Date(String(val)).toISOString().split('T')[0],
    z.string()
  ),
});

export type Task = z.infer<typeof TaskSchema>;
