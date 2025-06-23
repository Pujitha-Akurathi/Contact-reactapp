import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
   <div
  className="item"
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    padding: "10px 15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    minHeight: "70px"
  }}
>
  {/* Left Section: Avatar + Info */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flex: 1,
      minWidth: 0,
      gap: "15px"
    }}
  >
    <img
      className="ui avatar image"
      src={user}
      alt="user"
      style={{ width: "50px", height: "50px", objectFit: "cover" }}
    />
    <div className="content" style={{ overflow: "hidden" }}>
      <Link
        to={`/contact/${id}`}
        state={{ contact: props.contact }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="header" style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          {name}
        </div>
        <div>{email}</div>
      </Link>
    </div>
  </div>

  {/* Right Section: Icons - Fixed Width */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      width: "80px", // 👈 Ensures alignment across cards
      gap: "10px"
    }}
  >
    <Link to="/edit" state={{ contact: props.contact }}>
      <i
        className="edit alternate outline icon"
        style={{
          color: "blue",
          fontSize: "1.3rem",
          cursor: "pointer"
        }}
      ></i>
    </Link>
    <i
      className="trash alternate outline icon"
      style={{
        color: "red",
        fontSize: "1.3rem",
        cursor: "pointer"
      }}
      onClick={() => props.clickHandler(id)}
    ></i>
  </div>
</div>
  );
};

export default ContactCard;
