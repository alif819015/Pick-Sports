// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../../../public/football/football.jpg";

// const Banner = () => {
//   const onChange = (index) => {
//     console.log(`Carousel slide changed to index ${index}`);
//   };

//   const onClickItem = (index) => {
//     console.log(`Clicked on item with index ${index}`);
//   };

//   const onClickThumb = (index) => {
//     console.log(`Clicked on thumb with index ${index}`);
//   };

//   return (
//     <Carousel
//       showArrows={true}
//       onChange={onChange}
//       onClickItem={onClickItem}
//       onClickThumb={onClickThumb}
//     >
//       <div>
//         <img src={img} alt="Slide 1" />
//       </div>
//       <div>
//         <img src={img} alt="Slide 2" />
//       </div>
//       <div>
//         <img src={img} alt="Slide 3" />
//       </div>
//       <div>
//         <img src={img} alt="Slide 4" />
//       </div>
//       <div>
//         <img src={img} alt="Slide 5" />
//       </div>
//       <div>
//         <img src={img} alt="Slide 6" />
//       </div>
//     </Carousel>
//   );
// };

// export default Banner;

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css"; // Import the default styles

const Banner = () => {
  return (
    <AwesomeSlider animation="cubeAnimation">
      <div data-src={img} />
      <div data-src={img} />
      <div data-src={img} />
    </AwesomeSlider>
  );
};

export default Banner;
