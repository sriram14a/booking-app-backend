import express from "express";
import { bookNewRoom,updateRoom,getRoomsByID,getRooms,getAllRooms } from "../bookings.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newRoom = req.body;
    await bookNewRoom(newRoom);
    res.status(200).json({ message: "successfully inserted", data: newRoom });
  } catch {
    res.status(404).json({ message: "failed to insert" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRoom = req.body;
    const result =  await updateRoom(id, updatedRoom);
    res
      .status(200)
      .json({ message: "successfully updated", data: result });
  } catch {
    res.status(404).json({ message: "failed to update" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const room = await getRoomsByID(id);
  room ? res.send(room) : res.status(404).send({ message: "No room found" });
});

router.get("/", async (req, res) => {
  const { customer_name } = req.query;
  console.log(req.query, customer_name);
  const rooms = await getRooms(req);
  res.send(rooms);
});

router.get("/", async (req, res) => {
  await getAllRooms(req);
  res.send(req);
});
console.log("2")
export const roomRo