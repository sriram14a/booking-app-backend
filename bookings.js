import { client } from "./index.js";

export async function bookNewRoom(newRoom) {
  return await client.db("Booking_app").collection("Rooms").insertOne(newRoom);
}

export async function updateRoom(id, updatedRoom) {
  return await client
    .db("Booking_app")
    .collection("Rooms")
    .updateOne({ id: id }, { $set: updatedRoom });
}

export async function getRoomsByID(id) {
  return await client.db("Booking_app").collection("Rooms").findOne({ id: id });
}

export async function getRooms(req) {
  return await client.db("Booking_app").collection("Rooms").find(req.query).toArray();
}

export async function getAllRooms(req) {
  return await client.db("Booking_app").collection("Rooms").find(req.query).toArray();
}
