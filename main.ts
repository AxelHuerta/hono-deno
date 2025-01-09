import { Hono } from "hono";
import { getTasas } from "./controllers/tasas.controller.ts";
import { getUdis } from "./controllers/udis.controller.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/tasas", async (c) => {
  const tasas = await getTasas();
  return c.json(tasas);
});

app.get("/udis", async (c) => {
  const udis = await getUdis();
  return c.json(udis);
});

Deno.serve(app.fetch);
