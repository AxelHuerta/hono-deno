import { Hono } from "hono";
import getTasas from "./service/tasas.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/tasas", async (c) => {
  const tasas = await getTasas();
  return c.json(tasas);
});

Deno.serve(app.fetch);
