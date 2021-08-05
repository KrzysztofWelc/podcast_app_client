import React from "react";
import { Link } from "react-router-dom";
import env from "react-dotenv";

export default function UserTile({ data }) {
  return (
    <Link to={"/user/" + data.id}>
      <div className="card w-64 mr-3" style={{ minWidth: "18rem" }}>
        <img
          className="card-img-top"
          src={`${env.BASE_URL}api/users/avatar/${data.profile_img}`}
          alt="Card image cap"
        />
        <div className="p-3">
          <h5 className="text-2xl md:text-4xl mb-2">{data.username}</h5>
        </div>
      </div>
    </Link>
  );
}
