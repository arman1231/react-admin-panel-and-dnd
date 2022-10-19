import React from "react";
import "./featuredInfo.scss";
import { Link } from "react-router-dom";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <h1>Это главный компонент</h1>
      <p>Вы можете перейти в <Link to='/planner'>Планировщик</Link> или посмотреть <Link to='/users'>список пользователей</Link></p>
    </div>
  );
}
