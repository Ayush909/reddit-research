import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";

const Home = () => {
  const [subs, setSubs] = useState([]);
  const { data, error, loading } = useApi(
    "https://www.reddit.com/r/all/top.json"
  );

  useEffect(() => {
    if (data) {
      setSubs(process(data.data));
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const process = (data) => {
    console.log(data.children);

    return data.children.map((i) => {
      return {
        id: i.data.id,
        subredditName: i.data.subreddit_name_prefixed,
        link: i.data.permalink,
        upvotes: i.data.ups,
        title: i.data.title,
      };
    });
  };

  return (
    <div>
      <h1>Trending and Growing:</h1>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.id}>
              <h3>Title: {sub.title}</h3>
              <p>
                Subreddit: {sub.subredditName}{" "}
                <span>Upvotes: {sub.upvotes}</span>
              </p>
              <a href={`https://www.reddit.com${sub.link}`} target="_blank">
                Go to Post
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
