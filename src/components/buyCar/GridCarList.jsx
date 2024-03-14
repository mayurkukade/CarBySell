/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */

import { CardDefault } from "../../ui/CardDefault";
import CardUi from "../../ui/CardUi";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GridCarList = ({ data }) => {
  // console.log(data);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState();
  console.log(page);
  useEffect(() => {
    const fetchApiPosts = async () => {
      try {
        const res = await fetch(
          `https://carresell-production.up.railway.app/cars/mainFilter/${page}`
        );
        const data = await res.json();
        console.log(data);
        setPosts(data?.list);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchApiPosts();
  }, []);

  const fetchData = async () => {
    try {
      const nextPage = page + 1; // Increment page here
      const res = await fetch(
        `https://carresell-production.up.railway.app/cars/mainFilter/${nextPage}`
      );
      const data = await res.json();
      console.log(data);
      // eslint-disable-next-line no-unsafe-optional-chaining
      if (data.message === "unsuccess") {
        return setLastPage("your are in last page");
      }
      setPosts((prevPosts) => [...prevPosts, ...data?.list]); // Concatenate new data with previous posts
      setPage(nextPage); // Update page after successful fetch
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  console.log(posts);
  return (
    <>
      <CardUi>
        <div className="grid md:grid-cols-3 md:grid-rows-1 gap-4 justify-center">
          {posts?.map((items, index) => {
            console.log(items);
            return (
              <div key={index}>
                <div className="flex">
                  <CardDefault data={items} />
                </div>
              </div>
            );
          })}
          <InfiniteScroll
          dataLength={posts.length}
          next={fetchData}
          hasMore={true}
          loader={lastPage ? <p>you are in last page</p> : <p>Loading...</p>}
          scrollableTarget="scrollableDiv"
        />
        </div>
        {lastPage ? <p>you are in last page</p> : <p>Loading...</p>}
      </CardUi>
    </>
  );
};

export default GridCarList;
