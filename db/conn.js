const mongoose = require("mongoose");

const Db =
  "mongodb+srv://macbook:macbook@cluster0.ztfod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((e) => {
    console.log(e);
  });
