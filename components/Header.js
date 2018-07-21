import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Hackd Crowdsale</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/faq">
          <a className="item">F.A.Q.</a>
        </Link>
        <Link route="/founders">
          <a className="item">Founders Wallet</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
