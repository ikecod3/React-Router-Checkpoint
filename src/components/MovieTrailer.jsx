/* eslint-disable react/prop-types */
const MovieTrailer = ({ trailerId }) => {
  return (
    <>
      <div>
        <div className="w-screen max-h-fit px-8">
          <iframe
            className=" w-full aspect-video border-0 rounded-md"
            src={`https://www.youtube.com/embed/${trailerId}`}
            title="YouTube Embeded Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MovieTrailer;
