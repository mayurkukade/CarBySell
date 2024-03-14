/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
// import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
const InfiniteScrollComponent = () => {
  const [posts, setPosts] = useState([]);
  const [page,setPage] = useState(0)
  const [lastPage,setLastPage] = useState()
  console.log(page)
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
      if(data.message ==="unsuccess"){
       return setLastPage('your are in last page')
      }
      setPosts(prevPosts => [...prevPosts, ...data?.list]); // Concatenate new data with previous posts
      setPage(nextPage); // Update page after successful fetch
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  
  return (
    <div>
      {posts.map((item, index) => {
        console.log(item);
        return (
          <div key={index}>
            <p className="text-black">
              {item.carId}
              {item?.acFeature}
              {item?.area}
            </p>
          </div>
        );
      })}

      <InfiniteScroll
    dataLength={posts.length}
    next={fetchData}
    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    inverse={true} //
    hasMore={true}
    loader={lastPage?<p>you are in last page</p> : <p>Loading...</p>}
    scrollableTarget="scrollableDiv"
  />
    
  
    </div>
  );
};

export default InfiniteScrollComponent;
