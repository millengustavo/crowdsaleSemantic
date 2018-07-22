import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu stackable style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Hackd Crowdsale</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/team">
          <a className="item">Team</a>
        </Link>
        <Link route="/faq">
          <a className="item">FAQ</a>
        </Link>
        <Link route="/founders">
          <a className="item">Wallet</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
