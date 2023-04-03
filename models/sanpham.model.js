const db = require("./db");

const productSchema = new db.mongoose.Schema(
  {
    name: { type: String, required: true },
    id_category: { type:db.mongoose.Schema.ObjectId, ref: "category" },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    status: { type: String, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: false },
    // detail: {
    //   operatingSystem: {type: String, required: true},
    //   display: {
    //     size: {type: String, required: true},
    //     ScreenTechnology: {type: String, required: true},
    //   },
    //   camera: {
    //     rear: {type: String},
    //     front: {type: String},
    //   },
    //   processor: {
    //     cpu: {type: String, required: true},
    //     gpu: {type: String, required: true},
    //   },
    //   storage: {
    //     ram: {type: String, required: true},
    //     rom: {type: String, required: true},
    //   },
    //   battery: {
    //     capacity: {type: String},
    //     ChargingTechnology: {type: String},
    //   },
    //   design: {type: String},
    //   weight: {type: String},
    // },
    // color: {type: String, required: true},
    manufacturer: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const categorySchema = new db.mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let product = db.mongoose.model("product", productSchema);
let category = db.mongoose.model("category", categorySchema);

module.exports = {product, category}
