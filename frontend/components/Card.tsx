import { User } from "@/types/user";
import React from "react";
import style from "../styles/home.module.css";

interface CardProps {
  userInfo: User;
}

const Card: React.FC<CardProps> = ({ userInfo }) => {
  return (
    <div className={style.card}>
      <div>
        <h3 className="text-neutral-600 ml-3">Name</h3>
        <p className="text-[#1e8fffbb] ml-8">{userInfo.name}</p>
      </div>
      <div>
      <h3 className="text-neutral-600 ml-3">City</h3>
        <p className="text-[#1e8fffbb] ml-8">{userInfo.city}</p>
      </div>
      <div>
      <h3 className="text-neutral-600 ml-3">Country</h3>
        <p className="text-[#1e8fffbb] ml-8">{userInfo.country}</p>
      </div>
      <div>
      <h3 className="text-neutral-600 ml-3">Favorite sport</h3>
        <p className="text-[#1e8fffbb] ml-8">{userInfo.favorite_sport}</p>
      </div>
    </div>
  );
};

export default Card;
