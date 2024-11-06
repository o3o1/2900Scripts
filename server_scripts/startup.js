ServerEvents.loaded((event) => {
  event.server.runCommandSilent("/gamerule disableRaids true");
  event.server.runCommandSilent(
    "/gamerule artifacts.pickaxeHeater.enabled false"
  );

  var str = [
    "",
    "\x1b[93m",
    "___  ___          ______          ",
    "|  \\/  |          | ___ \\         ",
    "|      | ___   ___| |_/ /   _ ___ ",
    "| |\\/| |/ _ \\ / _ \\  __/ | | / __|",
    "| |  | | (_) |  __/ |  | |_| \\__ \\",
    "\\_|  |_/\\___/ \\___\\_|   \\__,_|___/",
    "The Legend Of 2900",
    "海上机械师",
    "\x1b[39m",
  ].join("\r\n");
  console.log(str);
});
