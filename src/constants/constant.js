export const tabs = [
  { label: "New", subTabs: [{ label: "Sub Tab 1" }, { label: "Sub Tab 2" }] },
  {
    label: "Curated",
    subTabs: [{ label: "Sub Tab 2" }, { label: "Sub Tab 3" }],
  },
  {
    label: "Trending",
    subTabs: [
      { label: "Largest", endpoint: "r/subreddit/hot.json" },
      { label: "Active", endpoint: "/subreddits/popular.json" },
      { label: "Growing", endpoint: "r/all/top.json" },
    ],
  },
];
