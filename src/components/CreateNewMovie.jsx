/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Input, Rate, message } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import validator from "validator"; //validator module for validating user input

const CreateNewMovie = ({
  setMyMovies,
  setUpdateMemoizedMovies,
  memoizedMovies,
}) => {
  // defining a state variable and initializing to an list of required items
  const [movieInfo, setMovieInfo] = useState({
    id: Math.random(),
    title: "",
    description: "",
    posterUrl: "",
    rating: 0,
  });

  // state variable for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // destructuring the messageApi
  const [messageApi, contextHolder] = message.useMessage();

  //   a function to handle the user input when creating a new movie
  const handleInput = (event) => {
    const { id, value } = event.target;
    setMovieInfo((preValue) => {
      return {
        ...preValue,
        [id]: value,
      };
    });
  };

  // **********------------
  // a function to allow user set movie ratings
  const handleRate = (value) => {
    setMovieInfo((preValue) => ({
      ...preValue,
      rating: value,
    }));
  };
  // **********************

  // a function to open add movie modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  // **************Function handleOk starts here******************
  const handleOk = () => {
    // input validation: to ensure the user is adding correct items
    // validating posterUrl
    if (!validator.isURL(movieInfo.posterUrl)) {
      messageApi.open({
        type: "error",
        content: "Please provide a valid image address",
      });
      return;
    }

    // validating Movie title
    if (validator.isEmpty(movieInfo.title)) {
      messageApi.open({
        type: "error",
        content: "Please provide a movie title",
      });
      return;
    }

    // validating Movie ratings
    if (movieInfo.rating === 0) {
      messageApi.open({
        type: "error",
        content: "Please specify the movie rating",
      });
      return;
    }

    // validating movie description
    if (validator.isEmpty(movieInfo.description)) {
      messageApi.open({
        type: "error",
        content: "Please provide movie description",
      });
      return;
    }

    // On success popup "movie successfuly added" message
    messageApi.open({
      type: "success",
      content: "Movie successfully added",
    });

    // **********-----------------------***********

    /* To add newly created movie to existing list of movie */
    // setMyMovies will now contain
    setMyMovies(() => [movieInfo, ...memoizedMovies.myMemoizedMovies]);

    // Also, update the movies stored in the useMemo hooks with the newly added movie
    setUpdateMemoizedMovies(Math.random());
    // ***************************
    // ***************************
    // now reset the input field to default values after a user has created a movie successfully
    setMovieInfo({
      id: Math.random(),
      title: "",
      description: "",
      posterUrl: "",
      rating: 1,
    });

    // and close the modal
    setIsModalOpen(false);
  };

  // ** end of function() handleOk that process user input on modal********

  //  function to close the modal if a user clicks on the cancel button
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        danger
        icon={<VideoCameraAddOutlined />}
        onClick={showModal}
      >
        Add Movie
      </Button>
      <Modal
        title="Add new movie"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {contextHolder}

        <div className="space-y-3">
          <Input
            placeholder="Moview poster url"
            id="posterUrl"
            onChange={handleInput}
            value={movieInfo.posterUrl}
          />
          <div>
            <Input
              placeholder="Movie Title"
              id="title"
              onChange={handleInput}
              value={movieInfo.title}
            />

            {/* for rating a movie */}
            <div className="shadow my-4 rounded-md p-3 space-y-2 w-fit">
              <p>Rate Movie</p>
              <Rate
                value={movieInfo.rating}
                onChange={(value) => handleRate(value)}
                defaultValue={1}
              />
            </div>
            {/* ******************* */}
          </div>

          <Input.TextArea
            rows={4}
            id="description"
            onChange={handleInput}
            placeholder="Movie description"
            value={movieInfo.description}
          />
        </div>
      </Modal>
    </>
  );
};
export default CreateNewMovie;
