import { defineConfig } from "tinacms";

export default defineConfig({
  // KHÔNG DÙNG TINA CLOUD → DÙNG SELF-HOSTED
  branch: process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: undefined, // bỏ trống
  token: undefined,    // bỏ trống

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Bài viết",
        path: "content/posts",
        format: "mdx",
        ui: {
          router: ({ document }) => `/bai-viet/${document._sys.filename}`,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tiêu đề",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Nội dung",
            isBody: true,
          },
          {
            type: "image",
            name: "coverImage",
            label: "Ảnh bìa",
          },
          {
            type: "datetime",
            name: "date",
            label: "Ngày đăng",
          },
        ],
      },
    ],
  },
});
