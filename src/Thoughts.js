const { Schema, model } = require("mongoose");

const ThoughtsSchema = new Schema(
  {
    content: {
      type: Schema.Types.String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Thoughts", ThoughtsSchema);
