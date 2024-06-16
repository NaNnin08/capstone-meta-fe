import React from "react";

// data
import { MenuData } from "../assets/data/menu";

// image
import DeliveryIcon from "../assets/icons_assets/menu_delivery.png";

const Menu = () => {
  return (
    <div className="menu" id="menu">
      <div className="menu_title">
        <h1>This weeks specials!</h1>

        <button className="menu_button">Online Menu</button>
      </div>

      <div className="menu_card_container">
        {MenuData.map((menu) => (
          <div className="menu_card" key={menu.name}>
            <img src={menu.image} alt={`${menu.name}`} />

            <div className="menu_body">
              <div className="menu_card_title">
                <h3>{menu.name}</h3>

                <p>${menu.price}</p>
              </div>

              <div className="menu_card_description">
                <p>{menu.description}</p>
              </div>

              <div className="menu_card_footer">
                <p>Order a delivery</p>{" "}
                <img src={DeliveryIcon} alt="delivery" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
