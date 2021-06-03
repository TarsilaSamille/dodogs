
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: "secret_FPbedmj2MZnYdxMftfcobdUpYDopctt3vNfU3aeJXyC",
});

export const getPage = async (pageId) => {
  const meta = await notion.pages.retrieve({
    page_id: pageId,
  });

  const { results: content } = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 100,
  });

  return {
    meta,
    content,
  };
};

export const getDatabaseEntries = async () => {
  const { results } = await notion.databases.query({
    database_id: '4bd3c957bed942109d9b203e7fb53259',
  });

  return results || [];
};