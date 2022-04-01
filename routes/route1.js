const express = require("express");
const router = express.Router();
const axios = require("axios").default;

router.route("/initialGet").get(async function (req, res) {
  // fetch initial load

  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }

});

router.route("/initialGet/:id").get( async function (req, res) {

    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

        let data = response.data.find((e)=> e.id == req.params.id);
        res.send(data);
      } catch (error) {
        console.error(error);
      }


  res.send({ success: true, message: "found get by id" });
});

module.exports = router;
//krishna.mohan@eatmeglobal.com