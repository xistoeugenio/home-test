import { User } from "@/types/user";
import React from "react";

interface CardProps {
  userInfo: User
}

const Card: React.FC<CardProps> = ({userInfo}) => {
  return (
    <div className="bg-indigo-500 w-48 h-56 ">
      <p>{userInfo.name}</p>
      <p>{userInfo.city}</p>
      <p>{userInfo.country}</p>
      <p>{userInfo.favorite_sport}</p>
    </div>
  );
};

export default Card;
