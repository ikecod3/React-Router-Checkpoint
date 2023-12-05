/* eslint-disable react/prop-types */
import { Carousel } from "antd"; 

const Caro = ({ topPick }) => {
  return (
    <>
      <Carousel autoplay autoplaySpeed={7000}>
        {/* mapping through the 'topPick' prop to create a carousel items */}
        {topPick.map(({ img, id, title, maingenre, subgenre, duration }) => (
          <div key={id} style={{ position: "relative" }}>
            <img
              src={img}
              alt={title}
              className="w-full h-96 opacity-40 object-cover"
            />
            <div
              style={{
                position: "absolute",
                top: "16rem",
                color: "white",
              }}
              className="grid sm:flex flex-col flex-wrap p-4 mx-auto tracking-wide"
            >
              <h1 className="tracking-widest">{title}</h1>
              <div className="inline-flex space-x-5 sm:flex-auto">
                <span>{maingenre}</span>
                <span>{subgenre}</span>
                <span>Duration: {duration}</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};
export default Caro;
