import { z } from 'zod';

import { lLMFewShotsSchema, lLMParamsSchema } from './llm';

export const metaDataSchema = z.object({
  avatar: z.string(),
  backgroundColor: z.string().optional(),
  description: z.string(),
  tags: z.array(z.string()),
  title: z.string(),
});

const lobeAgentConfigSchema = z.object({
  compressThreshold: z.number().optional(),
  displayMode: z.union([z.literal('chat'), z.literal('docs')]).optional(),
  enableCompressThreshold: z.boolean().optional(),
  enableHistoryCount: z.boolean().optional(),
  enableMaxTokens: z.boolean().optional(),
  fewShots: lLMFewShotsSchema.optional(),
  historyCount: z.number().optional(),
  inputTemplate: z.string().optional(),
  model: z.string().default('gpt-3.5-turbo').optional(),
  params: lLMParamsSchema.optional(),
  plugins: z.array(z.string()).optional(),
  systemRole: z.string(),
});

export type LobeAgentConfig = z.infer<typeof lobeAgentConfigSchema>;

export const agentMetaSchema = z.object({
  author: z.string(),
  config: lobeAgentConfigSchema,
  createAt: z.string(),
  homepage: z.string(),
  identifier: z.string(),
  meta: metaDataSchema,
  schemaVersion: z.number(),
});

export type LobeAgent = z.infer<typeof agentMetaSchema>;