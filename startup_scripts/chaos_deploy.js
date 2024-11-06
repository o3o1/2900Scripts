function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randomBool(seed) {
  const rand = mulberry32(seed);
  return rand() > 0.5 ? 0 : 1;
}

ForgeEvents.onEvent(
  "com.moepus.createfluid.content.processing.ChaosDeployingEvent",
  (event) => {
    const server = Utils.getServer();
    if (server === null) return;
    let recipe_result = event.getRecipeResult();
    let is_incm = recipe_result.id == "kubejs:incomplete_creative_mechanism";
    let is_cm =
      recipe_result.id == "kubejs:creative_mechanism" ||
      recipe_result.id == "minecraft:dead_bush";
    if (is_incm || is_cm) {
      let WORLD_SEED = server.worldData.worldGenOptions().seed();
      let seed = (WORLD_SEED / 10000 + (WORLD_SEED % 10000)).toFixed();

      let victim = event.getVictim();
      let raper = event.getRaper();
      let step = event.getStep();
      let ingredients = ["kubejs:silver_nugget", "createdeco:netherite_nugget"];

      let choosen = randomBool(seed + step);

      let wrong_recipe = raper.id != ingredients[choosen];
      //console.log("Step :" + step + ingredients[choosen]);

      if (
        wrong_recipe ||
        (victim.nbt &&
          victim.nbt.contains("WrongRecipe") &&
          victim.nbt.getBoolean("WrongRecipe") == true)
      ) {
        if (is_incm) {
          let replaced = recipe_result.copy();
          let inbt = replaced.getOrCreateTag();
          inbt.putBoolean("WrongRecipe", true);
          inbt.putInt("Chaos", (Math.random() * 1000).toFixed());
          event.setReplaced(replaced);
        } else {
          event.setReplaced(Item.of("minecraft:dead_bush"));
        }
      } else {
        if (is_incm) {
          let replaced = recipe_result.copy();
          let inbt = replaced.getOrCreateTag();
          inbt.putBoolean("WrongRecipe", false);
          inbt.putInt("Chaos", (Math.random() * 65535).toFixed());
          event.setReplaced(replaced);
        }
      }
    }
  }
);
