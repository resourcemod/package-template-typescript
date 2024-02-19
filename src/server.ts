import { events, chat, constants } from "resourcemod";

events.onItemPickup((event) => {
  chat.sayToEveryone(`${event.player.name} just picked up ${event.item}.`, constants.GameMessageTarget.Chat);
});
