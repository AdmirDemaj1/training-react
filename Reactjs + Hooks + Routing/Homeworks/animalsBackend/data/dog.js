const fs = require("node:fs/promises");

const { v4: generateId } = require("uuid");

const { NotFoundError } = require("../util/errors");

async function readData() {
  const data = await fs.readFile("dogs.json", "utf8");
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile("dogs.json", JSON.stringify(data));
}

async function getAll() {
  const storedData = await readData();
  if (!storedData.dogs) {
    throw new NotFoundError("Could not find any dogs.");
  }
  return storedData.dogs;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.dogs || storedData.dogs.length === 0) {
    throw new NotFoundError("Could not find any dogs.");
  }

  const dog = storedData.dogs.find((ev) => ev.id === id);

  if (!dog) {
    throw new NotFoundError("Could not find dog for id " + id);
  }

  return dog;
}

async function add(data) {
  const storedData = await readData();
  storedData.dogs.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.dogs || storedData.dogs.length === 0) {
    throw new NotFoundError("Could not find any dogs.");
  }

  const index = storedData.dogs.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError("Could not find dog for id " + id);
  }

  storedData.events[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.dogs.filter((ev) => ev.id !== id);
  await writeData({ dogs: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
