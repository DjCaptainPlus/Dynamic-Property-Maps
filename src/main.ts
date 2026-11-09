import { world } from "@minecraft/server"
import { doSomething } from "./other.ts";

world.afterEvents.buttonPush.subscribe(buttonPush => {
    world.sendMessage("Wow button pushed.");
    world.sendMessage("and more stuff.")

    doSomething();

    thingy(false);

})

export function thingy(argument: boolean): number {
    if (argument) {
        return 10;
    }

    return 143;
}