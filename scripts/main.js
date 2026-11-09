// src/main.ts
import { world } from "@minecraft/server";
world.afterEvents.buttonPush.subscribe((buttonPush) => {
  world.sendMessage("Wow button pushed.");
  world.sendMessage("and more stuff.");
});
