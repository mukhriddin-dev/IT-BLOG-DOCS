import { z, defineCollection } from "astro:content";

const jsSchema = z.object({
  title: z.string(),
  body: z.string().optional(),
  cover: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  id: z.number().optional(),
  type: z.string().optional(),
  hashtags: z.array(z.string()).optional()
});

const tsSchema = z.object({
  title: z.string(),
  body: z.string().optional(),
  cover: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  id: z.number().optional(),
  type: z.string().optional(),
  hashtags: z.array(z.string()).optional()
});

const vueSchema = z.object({
  title: z.string(),
  body: z.string().optional(),
  cover: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  id: z.number().optional(),
  type: z.string().optional(),
  hashtags: z.array(z.string()).optional()
});

const reactSchema = z.object({
  title: z.string(),
  body: z.string().optional(),
  cover: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  id: z.number().optional(),
  type: z.string().optional(),
  hashtags: z.array(z.string()).optional()
});

const frontendSchema = z.object({
  title: z.string(),
  body: z.string().optional(),
  cover: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  id: z.number().optional(),
  type: z.string().optional(),
  hashtags: z.array(z.string()).optional()
});

const blogSchema = z.object({
  title: z.string(),
  body: z.string().optional(),
  cover: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  id: z.number().optional(),
  type: z.string().optional(),
  hashtags: z.array(z.string()).optional()
});

const englishSchema = z.object({
  title: z.string(),
  body: z.string().optional(),
  cover: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  id: z.number().optional(),
  type: z.string().optional(),
  hashtags: z.array(z.string()).optional()
});

export type jsSchema = z.infer<typeof jsSchema>;
export type tsSchema = z.infer<typeof tsSchema>;
export type docsSchema = z.infer<typeof reactSchema>;
export type frontendSchema = z.infer<typeof frontendSchema>;
export type blogSchema = z.infer<typeof blogSchema>;
export type englishSchema = z.infer<typeof englishSchema>;

export const jsCollection = defineCollection({ schema: jsSchema });
export const tsCollection = defineCollection({ schema: tsSchema });
export const vueCollection = defineCollection({ schema: vueSchema });
export const reactCollection = defineCollection({ schema: reactSchema });
export const frontendCollection = defineCollection({ schema: frontendSchema });
export const blogCollection = defineCollection({ schema: blogSchema });
export const englishCollection = defineCollection({ schema: englishSchema });

export const collections = {
  js: jsCollection,
  ts: tsCollection,
  frontend: frontendCollection,
  english: englishCollection,
  vue: vueCollection,
  react: reactCollection,
  blogs: blogCollection
};
