import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import PhotoFacade from "../../photolinks";
import "./photos.css";

export default () => {
  let navigate = useNavigate();
  //const [demo, demo2] = useOutletContext(); // [demo, demo2] is the context passed from App.jsx
  return (
    <div className="photoscontainer">
    <div className="photos">
      <h1>PHOTOS:</h1>
      {/* <b>Message from App:</b> {demo}, {demo2} */}
      {PhotoFacade.getAll().map((photo) => {
        return (
            <img
              key={photo.id}
              onClick={() => {
                // window.location.href = `/photos/${photo.id}`;
                navigate(`/photos/${photo.id}`);
              }}
              src={photo.url}
              style={{ width: 300, margin: 6 }}
            />
        );
      })}
      </div>
      <div className="photodetail">
      <Outlet />
      </div>
      <div></div>
    </div>
  );
};
