import axios from "axios";

const Reviews = (props) => {
  const reviewList2 = props.reviews;

  const reloadComponent = () => window.location.reload(false);

  const deletReview = async (id) => {
    reloadComponent();

    try {
      await axios.delete(`http://localhost:4000/reviews/${id}`, {});
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="ContainerFakeText">
      <div>
        {reviewList2
          ? reviewList2.map((review, i) => (
              <div className="review-card" key={i}>
                <b>
                  {review.reviewerName} Says {": "}{" "}
                </b>{" "}
                {review.text}{" "}
                <button
                  className="transparent-button"
                  onClick={() => deletReview(review.id)}
                >
                  ❌
                </button>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Reviews;
