import React, { useState } from "react";
import StarRating from "./components/star-rating";
import "./App.css";
import Form from "./components/form";
import ReviewList from "./components/review-list";
import { uuid } from "uuidv4";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({movie: "", review: "", id: uuid() });
  const [editing, setEditing] = useState(false);

  return (
    <div className="app">
      <h1>Movie Reviews</h1>
      <StarRating />
      <Form editing={editing} form={form} reviews={reviews} setEditing={setEditing} setForm={setForm} setReviews={setReviews} />
      <ReviewList reviews={reviews} setForm={setForm} setEditing={setEditing} setReviews={setReviews} />
    </div>
  );
}

export default App;