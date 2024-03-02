<a href="https://novel.sh">
  <img alt="Novel is a Notion-style WYSIWYG editor with AI-powered autocompletions." src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1709384179/Screenshot_2024-03-02_at_18-55-57_Novel_Notion-style_WYSIWYG_editor_with_AI-powered_autocompletions_nnua1r.png">
  <h1 align="center">Novel + excalidraw</h1>
</a>

<p align="center">
  An open-source Notion-style WYSIWYG editor with AI-powered autocompletions and whiteboard for drawings
</p>

## Setting Up Locally

To set up Novel locally, you'll need to clone the repository and set up the following environment variables:

- `OPENAI_API_KEY` – your OpenAI API key (you can get one [here](https://platform.openai.com/account/api-keys))
- `BLOB_READ_WRITE_TOKEN` – your Vercel Blob read/write token (currently [still in beta](https://vercel.com/docs/storage/vercel-blob/quickstart#quickstart), but feel free to [sign up on this form](https://vercel.fyi/blob-beta) for access)

If you've deployed this to Vercel, you can also use [`vc env pull`](https://vercel.com/docs/cli/env#exporting-development-environment-variables) to pull the environment variables from your Vercel project.

To run the app locally, you can run the following commands:

```
pnpm i
pnpm dev
```

## Cross-framework support

While Novel is built for React, we also have a few community-maintained packages for non-React frameworks:

- Svelte: https://novel.sh/svelte
- Vue: https://novel.sh/vue

Novel is built on the following stack:

- [Next.js](https://nextjs.org/) – framework
- [Tiptap](https://tiptap.dev/) – text editor
- [Excalidraw](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/installation) - whiteboard
- [OpenAI](https://openai.com/) - AI completions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) – AI library
- [Vercel](https://vercel.com) – deployments
- [TailwindCSS](https://tailwindcss.com/) – styles
- [Cal Sans](https://github.com/calcom/font) – font
