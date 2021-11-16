import { FaRegBell } from "react-icons/fa";
import { notifications } from "../../../dummyData";
import Accordion from "../../features/accordion/accordion";
import Card from "../../features/accordion/card";

function Notification() {
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
        <span className="cart-count">{notifications.EnAttente.length+ notifications.Confirmé.length + notifications.Collecté.length + notifications.Livré.length + notifications.Finalisé.length}</span>
      </div>

      <div className={`dropdown-menu dropdown-menu-right `}>
        <>
          <Accordion type="checkout">
            <Card title="En attente" expanded={true}>
              {notifications.EnAttente.map((notification, index) => {
                return (
                  <div className="dropdown-cart-products pt-2" key={index}>
                    {notification}
                  </div>
                );
              })}
            </Card>

            <Card title="Confirmé">
              {notifications.Confirmé.map((notification, index) => {
                return (
                  <div className="dropdown-cart-products pt-2" key={index}>
                    {notification}
                  </div>
                );
              })}
            </Card>

            <Card title="Collecté">
              {notifications.Collecté.map((notification, index) => {
                return (
                  <div className="dropdown-cart-products pt-2" key={index}>
                    {notification}
                  </div>
                );
              })}
            </Card>

            <Card title="Livré">
              {notifications.Livré.map((notification, index) => {
                return (
                  <div className="dropdown-cart-products pt-2" key={index}>
                    {notification}
                  </div>
                );
              })}
            </Card>

            <Card title="Finalisé">
              {notifications.Finalisé.map((notification, index) => {
                return (
                  <div className="dropdown-cart-products pt-2" key={index}>
                    {notification}
                  </div>
                );
              })}
            </Card>
          </Accordion>
        </>
      </div>
    </div>
  );
}

export default Notification;
