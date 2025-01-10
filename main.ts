import { Hono } from "hono";
import { getTasas } from "./controllers/tasas.controller.ts";
import { getUdis } from "./controllers/udis.controller.ts";
import { getSofipos } from "./controllers/sofipos.controller.ts";

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

app.get("/sofipos", async (c) => {
  const sofipos = await getSofipos();
  return c.json(sofipos);
});

Deno.serve(app.fetch);
