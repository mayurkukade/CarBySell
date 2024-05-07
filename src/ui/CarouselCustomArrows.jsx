import { Carousel, IconButton } from "@material-tailwind/react";
import {useGetCarImageByIdQuery} from "../services/carAPI"

// eslint-disable-next-line react/prop-types
export function CarouselCustomArrows({carId}) {

  console.log(carId)
  const {data ,isLoading,error} = useGetCarImageByIdQuery()
  console.log(data)

  const getImageSrc = () => {
    if (data) {
      // Assuming data contains an image URL property
      return data.url;
    }
    return null; // Or a placeholder image URL
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching car image</div>;
  return (
    <Carousel
      className="rounded-xl "
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      
      {data && (
        <img
          src={getImageSrc()}
          alt="Car Image"
          className="h-full w-full object-contain"
        />
      )}
      {/* <img
        src="https://imgd.aeplcdn.com/370x208/n/zgaerbb_1693951.jpg?q=80"
        alt="image 2"
        className="h-full w-full object-contain"
      />
      <img
        src="https://imgd.aeplcdn.com/370x208/n/7mudrbb_1693947.jpg?q=80"
        alt="image 3"
        className="h-full w-full object-contain"
      /> */}
    </Carousel>
  );
}
