export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "LANCE",
  description: "Work in progress",
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Mind",
      href: "/mind",
      content: [
        {
          title: "Blog",
          description: "Read about my thoughts on things I find interesting.",
          href: "/mind/blog",
        },
        {
          title: "Reading",
          description: "Check out the books I've read recently.",
          href: "/mind/reading",
        },
        {
          title: "Watching",
          description: "Click this only if you're interested in cinema.",
          href: "/mind/reading",
        },
      ],
    },
  ],
}
