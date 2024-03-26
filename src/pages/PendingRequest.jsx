import UserCardPendingRequest from "../components/userRequest/UserCardPendingRequest";
import { useUserAllCarRequestQuery } from "../services/carAPI";

const PendingRequest = () => {
  const { data, isLoading, error } = useUserAllCarRequestQuery();
  console.log(data?.list);
  const renderData = data?.list.map((item, index) => {
    console.log(item)
    return (
      <div key={index} className="mt-5">
        <UserCardPendingRequest item = {item} />
      </div>
    );
  });
  if (isLoading) {
    return <p>isLoading</p>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <>

      {renderData}
    </>
  );
};

export default PendingRequest;
