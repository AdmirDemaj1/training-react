const express = require("express");

const { getAll, get, add, replace, remove } = require("../data/dog");
const {
  isValidText,
  isValidDate,
  isValidImageUrl,
} = require("../util/validation");

const router = express.Router();

router.get("/dogs", async (req, res, next) => {
  try {
    const dogs = await getAll();
    res.json({ dogs: dogs });
  } catch (error) {
    next(error);
  }
});

router.get("/dogs/:id", async (req, res, next) => {
  try {
    console.log(req.params.id);
    const dog = await get(req.params.id);
    console.log(dog);
    res.json({ dog: dog });
  } catch (error) {
    next(error);
  }
});

router.post("/dogs", async (req, res, next) => {
  const data = req.body;

  console.log("dataaa heree", data);

  let errors = {};

  // if (!isValidText(data.title)) {
  //   errors.title = "Invalid title.";
  // }

  // if (!isValidText(data.description)) {
  //   errors.description = "Invalid description.";
  // }

  // if (!isValidDate(data.publishYear)) {
  //   errors.date = "Invalid date.";
  // }

  // if (!isValidImageUrl(data.coverImage)) {
  //   errors.image = "Invalid image.";
  // }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Adding the event failed due to validation errors.",
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: "Dog saved.", dog: data });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  const data = req.body;

  let errors = {};

  // if (!isValidText(data.title)) {
  //   errors.title = "Invalid title.";
  // }

  // if (!isValidText(data.description)) {
  //   errors.description = "Invalid description.";
  // }

  // if (!isValidDate(data.date)) {
  //   errors.date = "Invalid date.";
  // }

  // if (!isValidImageUrl(data.image)) {
  //   errors.image = "Invalid image.";
  // }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Updating the doog failed due to validation errors.",
      errors,
    });
  }

  try {
    await replace(req.params.id, data);
    res.json({ message: "Dog updated.", dog: data });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await remove(req.params.id);
    res.json({ message: "Dog deleted." });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
