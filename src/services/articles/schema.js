import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ArticleSchema = new Schema(
  {
    headLine: { type: String, required: true },
    subHead: { type: String, required: true },
    content: { type: String, required: true },
    category: {
      name: { type: String, required: true },
      img: String,
    },
    author: {
      name: { type: String, required: true },
      img: String,
    },
    cover: String,
    reviews: [
      {
        text: { type: String, required: true },
        user: { type: String, required: true },
      },
    ],
  },

  { timestamps: true }
);

export default model("Articles", ArticleSchema);
