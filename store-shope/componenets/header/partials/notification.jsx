import ALink from "../../features/alink";
import { FaRegBell } from "react-icons/fa";
import { notifications } from "../../../dummyData";

function Notification(props) {
  return (
    <div className="dropdown cart-dropdown">
      <div
        className="dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-display="static"
      >
        <FaRegBell style={{ fontSize: "2rem" }} />
        <span className="cart-count">{notifications.length}</span>
      </div>

      <div
        className={`dropdown-menu dropdown-menu-right ${
          !notifications.length ? "text-center" : ""
        }`}
      >
        {!notifications.length ? (
          <p>Aucune notification.</p>
        ) : (
          <>
            {
              notifications.map((notification, index) => {
               return <div className="dropdown-cart-products pb-2" key={index}>{notification}</div>
              })
            }
          </>
        )}
      </div>
    </div>
  );
}

export default Notification;
