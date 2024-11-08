import astropodConfig from "./.astropod/astropod.config.json";
import languageList from "./src/helpers/languagesList.json";
import podcastMainCategories from "./src/helpers/podcastMainCategories.json";
import themes from "./src/helpers/themes.json";

export default function dcapconfig() {
  const config = {
    logo_url: "/cmsBanner.svg",
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    collections: [
      {
        name: "blogs",
        label: "Bloglar",
        label_singular: "blogs",
        folder: "src/content/blogs",
        sortable_fields: [
          "title",
          "cover",
          "pubDate",
          "body",
          "id",
          "type",
          "hashtags",
        ],
        create: true,
        delete: true,
        fields: [
          { name: "title", widget: "string", label: "Sarlavha" },
          {
            name: "pubDate",
            widget: "date",
            label: "Chop etilgan vaqt",
            format: "DD MMM YYYY",
          },
          {
            name: "body",
            widget: "markdown",
            label: "Maqola asosi",
            required: false,
          },
          {
            name: "cover",
            widget: "image",
            label: "Asosiy rasmi",
            required: false,
          },
          {
            name: "id",
            widget: "number",
            label: "Post raqami",
            required: false,
          },
          {
            name: "type",
            widget: "select",
            label: "Post turi",
            default: "blog",
            options: [
              { label: "News", value: "news" },
              { label: "Vue", value: "vue" },
              { label: "Nuxt", value: "nuxt" },
              { label: "TypeScript", value: "typescript" },
              { label: "JavaScript", value: "javascript" },
              { label: "CSS", value: "css" },
              { label: "React", value: "react" },
              { label: "Next", value: "next" },
              { label: "HTML", value: "html" },
              { label: "NodeJS", value: "nodejs" },
              { label: "Kutubxonalar", value: "libraries" },
              { label: "Blog", value: "blog" },
            ],
          },
          {
            name: "hashtags",
            widget: "list",
            label: "Hashteglar",
            required: false,
            hint: "Post uchun mos hashtaglarni kiriting",
            field: { widget: "string", name: "hashtag" },
          },
        ],
      },
      {
        name: "vue",
        label: "Vue.js",
        label_singular: "vue",
        folder: "src/content/vue",
        sortable_fields: [
          "title",
          "cover",
          "pubDate",
          "body",
          "id",
          "type",
          "hashtags",
        ],
        create: true,
        delete: true,
        fields: [
          { name: "title", widget: "string", label: "Sarlavha" },
          {
            name: "pubDate",
            widget: "date",
            label: "Chop etilgan vaqt",
            format: "DD MMM YYYY",
          },
          {
            name: "body",
            widget: "markdown",
            label: "Maqola asosi",
            required: false,
          },
          {
            name: "cover",
            widget: "image",
            label: "Asosiy rasmi",
            required: false,
          },
          {
            name: "id",
            widget: "number",
            label: "Post raqami",
            required: false,
          },
          {
            name: "type",
            widget: "select",
            label: "Post turi",
            default: "vue",
            options: [
              { label: "Yangiliklar", value: "news" },
              { label: "Vue", value: "vue" },
              { label: "Nuxt", value: "nuxt" },
              { label: "TypeScript", value: "typescript" },
              { label: "JavaScript", value: "javascript" },
              { label: "CSS", value: "css" },
              { label: "React", value: "react" },
              { label: "Next", value: "next" },
              { label: "HTML", value: "html" },
              { label: "NodeJS", value: "nodejs" },
              { label: "Kutubxonalar", value: "libraries" },
              { label: "Blog", value: "blog" },
            ],
          },
          {
            name: "hashtags",
            widget: "list",
            label: "Hashteglar",
            required: false,
            hint: "Post uchun mos hashtaglarni kiriting",
            field: { widget: "string", name: "hashtag" },
          },
        ],
      },
      {
        name: "react",
        label: "React.js",
        label_singular: "react",
        folder: "src/content/react",
        sortable_fields: [
          "title",
          "cover",
          "pubDate",
          "body",
          "id",
          "type",
          "hashtags",
        ],
        create: true,
        delete: true,
        fields: [
          { name: "title", widget: "string", label: "Sarlavha" },
          {
            name: "pubDate",
            widget: "date",
            label: "Chop etilgan vaqt",
            format: "DD MMM YYYY",
          },
          {
            name: "body",
            widget: "markdown",
            label: "Maqola asosi",
            required: false,
          },
          {
            name: "cover",
            widget: "image",
            label: "Asosiy rasmi",
            required: false,
          },
          {
            name: "id",
            widget: "number",
            label: "Post raqami",
            required: false,
          },
          {
            name: "type",
            widget: "select",
            label: "Post turi",
            default: "react",
            options: [
              { label: "Yangiliklar", value: "news" },
              { label: "Vue", value: "vue" },
              { label: "Nuxt", value: "nuxt" },
              { label: "TypeScript", value: "typescript" },
              { label: "JavaScript", value: "javascript" },
              { label: "CSS", value: "css" },
              { label: "React", value: "react" },
              { label: "Next", value: "next" },
              { label: "HTML", value: "html" },
              { label: "NodeJS", value: "nodejs" },
              { label: "Kutubxonalar", value: "libraries" },
              { label: "Blog", value: "blog" },
            ],
          },
          {
            name: "hashtags",
            widget: "list",
            label: "Hashteglar",
            required: false,
            hint: "Post uchun mos hashtaglarni kiriting",
            field: { widget: "string", name: "hashtag" },
          },
        ],
      },
      {
        name: "frontend",
        label: "Frontend",
        label_singular: "frontend",
        folder: "src/content/frontend",
        sortable_fields: [
          "title",
          "cover",
          "pubDate",
          "body",
          "id",
          "type",
          "hashtags",
        ],
        create: true,
        delete: true,
        fields: [
          { name: "title", widget: "string", label: "Sarlavha" },
          {
            name: "pubDate",
            widget: "date",
            label: "Chop etilgan vaqt",
            format: "DD MMM YYYY",
          },
          {
            name: "body",
            widget: "markdown",
            label: "Maqola asosi",
            required: false,
          },
          {
            name: "cover",
            widget: "image",
            label: "Asosiy rasmi",
            required: false,
          },
          {
            name: "id",
            widget: "number",
            label: "Post raqami",
            required: false,
          },
          {
            name: "type",
            widget: "select",
            label: "Post turi",
            default: "frontend",
            options: [
              { label: "Yangiliklar", value: "news" },
              { label: "Vue", value: "vue" },
              { label: "Nuxt", value: "nuxt" },
              { label: "TypeScript", value: "typescript" },
              { label: "JavaScript", value: "javascript" },
              { label: "CSS", value: "css" },
              { label: "React", value: "react" },
              { label: "Next", value: "next" },
              { label: "HTML", value: "html" },
              { label: "NodeJS", value: "nodejs" },
              { label: "Kutubxonalar", value: "libraries" },
              { label: "Blog", value: "blog" },
              { label: "frontend", value: "frontend" },
            ],
          },
          {
            name: "hashtags",
            widget: "list",
            label: "Hashteglar",
            required: false,
            hint: "Post uchun mos hashtaglarni kiriting",
            field: { widget: "string", name: "hashtag" },
          },
        ],
      },
      {
        name: "javascript",
        label: "JavaScript",
        label_singular: "javascript",
        folder: "src/content/js",
        sortable_fields: [
          "title",
          "cover",
          "pubDate",
          "body",
          "id",
          "type",
          "hashtags",
        ],
        create: true,
        delete: true,
        fields: [
          { name: "title", widget: "string", label: "Sarlavha" },
          {
            name: "pubDate",
            widget: "date",
            label: "Chop etilgan vaqt",
            format: "DD MMM YYYY",
          },
          {
            name: "body",
            widget: "markdown",
            label: "Maqola asosi",
            required: false,
          },
          {
            name: "cover",
            widget: "image",
            label: "Asosiy rasmi",
            required: false,
          },
          {
            name: "id",
            widget: "number",
            label: "Post raqami",
            required: false,
          },
          {
            name: "type",
            widget: "select",
            label: "Post turi",
            default: "javascript",
            options: [
              { label: "Yangiliklar", value: "news" },
              { label: "Vue", value: "vue" },
              { label: "Nuxt", value: "nuxt" },
              { label: "TypeScript", value: "typescript" },
              { label: "JavaScript", value: "javascript" },
              { label: "CSS", value: "css" },
              { label: "React", value: "react" },
              { label: "Next", value: "next" },
              { label: "HTML", value: "html" },
              { label: "NodeJS", value: "nodejs" },
              { label: "Kutubxonalar", value: "libraries" },
              { label: "Blog", value: "blog" },
            ],
          },
          {
            name: "hashtags",
            widget: "list",
            label: "Hashteglar",
            required: false,
            hint: "Post uchun mos hashtaglarni kiriting",
            field: { widget: "string", name: "hashtag" },
          },
        ],
      },
      {
        name: "typecript",
        label: "TypeScript",
        label_singular: "typescript",
        folder: "src/content/ts",
        sortable_fields: [
          "title",
          "cover",
          "pubDate",
          "body",
          "id",
          "type",
          "hashtags",
        ],
        create: true,
        delete: true,
        fields: [
          { name: "title", widget: "string", label: "Sarlavha" },
          {
            name: "pubDate",
            widget: "date",
            label: "Chop etilgan vaqt",
            format: "DD MMM YYYY",
          },
          {
            name: "body",
            widget: "markdown",
            label: "Maqola asosi",
            required: false,
          },
          {
            name: "cover",
            widget: "image",
            label: "Asosiy rasmi",
            required: false,
          },
          {
            name: "id",
            widget: "number",
            label: "Post raqami",
            required: false,
          },
          {
            name: "type",
            widget: "select",
            label: "Post turi",
            default: "typecript",
            options: [
              { label: "Yangiliklar", value: "news" },
              { label: "Vue", value: "vue" },
              { label: "Nuxt", value: "nuxt" },
              { label: "TypeScript", value: "typescript" },
              { label: "JavaScript", value: "javascript" },
              { label: "CSS", value: "css" },
              { label: "React", value: "react" },
              { label: "Next", value: "next" },
              { label: "HTML", value: "html" },
              { label: "NodeJS", value: "nodejs" },
              { label: "Kutubxonalar", value: "libraries" },
              { label: "Blog", value: "blog" },
            ],
          },
          {
            name: "hashtags",
            widget: "list",
            label: "Hashteglar",
            required: false,
            hint: "Post uchun mos hashtaglarni kiriting",
            field: { widget: "string", name: "hashtag" },
          },
        ],
      },
      {
        name: "english",
        label: "Ingliz tili",
        label_singular: "english",
        folder: "src/content/english",
        sortable_fields: [
          "title",
          "cover",
          "pubDate",
          "body",
          "id",
          "type",
          "hashtags",
        ],
        create: true,
        delete: true,
        fields: [
          { name: "title", widget: "string", label: "Sarlavha" },
          {
            name: "pubDate",
            widget: "date",
            label: "Chop etilgan vaqt",
            format: "DD MMM YYYY",
          },
          {
            name: "body",
            widget: "markdown",
            label: "Maqola asosi",
            required: false,
          },
          {
            name: "cover",
            widget: "image",
            label: "Asosiy rasmi",
            required: false,
          },
          {
            name: "id",
            widget: "number",
            label: "Post raqami",
            required: false,
          },
          {
            name: "type",
            widget: "select",
            label: "Post turi",
            default: "english",
            options: [
              { label: "Yangiliklar", value: "news" },
              { label: "Vue", value: "vue" },
              { label: "Nuxt", value: "nuxt" },
              { label: "TypeScript", value: "typescript" },
              { label: "JavaScript", value: "javascript" },
              { label: "CSS", value: "css" },
              { label: "React", value: "react" },
              { label: "Next", value: "next" },
              { label: "HTML", value: "html" },
              { label: "NodeJS", value: "nodejs" },
              { label: "Kutubxonalar", value: "libraries" },
              { label: "Blog", value: "blog" },
              {
                label: "English",
                value: "english",
              },
            ],
          },
          {
            name: "hashtags",
            widget: "list",
            label: "Hashteglar",
            required: false,
            hint: "Post uchun mos hashtaglarni kiriting",
            field: { widget: "string", name: "hashtag" },
          },
        ],
      },
      {
        name: "settings",
        label: "Settings",
        files: [
          {
            name: "general",
            label: "General",
            file: ".astropod/astropod.config.json",
            fields: [
              { name: "name", widget: "string", label: "Name" },
              { name: "description", widget: "text", label: "Description" },
              { name: "link", widget: "string", label: "Link" },
              {
                name: "cover",
                widget: "image",
                label: "Cover | Recomended Size 1400x1400",
              },
              {
                name: "banner",
                widget: "image",
                label: "Banner | Recomended Size 960x320",
              },
              { name: "favicon", widget: "image", label: "Favicon" },

              { name: "author", widget: "string", label: "Author" },
              {
                name: "email",
                widget: "string",
                label: "email",
                pattern: [
                  "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
                  "Please enter a valid email address",
                ],
              },
              {
                name: "owner",
                widget: "string",
                label: "Owner",
                required: false,
              },
              {
                name: "copyright",
                widget: "string",
                label: "Copyright",
                required: false,
              },
              {
                name: "language",
                widget: "select",
                label: "Language",
                default: "en",
                options: languageList,
              },
              {
                name: "category",
                widget: "select",
                label: "Category",
                multiple: true,
                options: podcastMainCategories,
                max: 3,
              },
              {
                name: "explicit",
                widget: "boolean",
                label: "Explicit",
                default: false,
              },
              {
                name: "theme",
                widget: "select",
                label: "Web Site Theme",
                options: themes,
              },
              {
                name: "pageSize",
                widget: "number",
                label: "Episodes per page",
              },
              {
                name: "feedSize",
                widget: "number",
                label: "Feed Size (Empty for include all episodes)",
                required: false,
              },
              {
                name: "fundingUrl",
                widget: "string",
                label: "Funding Url",
                required: false,
              },
              {
                name: "fundingText",
                widget: "string",
                label: "Funding Text",
                required: false,
              },
            ],
          },
          {
            name: "listenOn",
            label: "Listen On",
            file: ".astropod/listenOn.config.json",
            fields: [
              {
                name: "acastPodcasts",
                widget: "string",
                label: "Acast Podcasts",
                required: false,
              },
              {
                name: "spotify",
                widget: "string",
                label: "Spotify",
                required: false,
              },
              {
                name: "googlePodcast",
                widget: "string",
                label: "Google Podcast",
                required: false,
              },
              {
                name: "applePodcast",
                widget: "string",
                label: "Apple Podcast",
                required: false,
              },
              {
                name: "easyPodcast",
                widget: "string",
                label: "Easy Podcast",
                required: false,
              },
              {
                name: "amazonMusic",
                widget: "string",
                label: "Amazon Music",
                required: false,
              },
              {
                name: "fountain",
                widget: "string",
                label: "Fountain",
                required: false,
              },
              {
                name: "ivoox",
                widget: "string",
                label: "iVoox",
                required: false,
              },
              {
                name: "pocketcasts",
                widget: "string",
                label: "Pocket Casts",
                required: false,
              },
              {
                name: "deezer",
                widget: "string",
                label: "Deezer",
                required: false,
              },
            ],
          },
          {
            name: "follow",
            label: "Social Links",
            file: ".astropod/social.config.json",
            fields: [
              {
                name: "facebook",
                widget: "string",
                label: "Facebook",
                required: false,
              },
              {
                name: "twitter",
                widget: "string",
                label: "Twitter",
                required: false,
              },
              {
                name: "youtube",
                widget: "string",
                label: "YouTube",
                required: false,
              },
              {
                name: "instagram",
                widget: "string",
                label: "Instagram",
                required: false,
              },
              {
                name: "github",
                widget: "string",
                label: "Github",
                required: false,
              },
              {
                name: "telegram",
                widget: "string",
                label: "Telegram",
                required: false,
              },
              {
                name: "linkedin",
                widget: "string",
                label: "LinkedIn",
                required: false,
              },
              {
                name: "newsletter",
                widget: "string",
                label: "Newsletter",
                required: false,
              },
            ],
          },
        ],
      },
    ],
    disableIdentityWidgetInjection: true,
  };
  return config;
}
