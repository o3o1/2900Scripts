ServerEvents.recipes((event) => {
  event.remove("alexscaves:energized_galena_azure");
  event.remove("alexscaves:energized_galena_scarlet");
  event.remove("alexscaves:tesla_bulb");

  event.recipes.create.compacting(
    [
      Item.of("alexscaves:tesla_bulb").withChance(0.15),
      Item.of("alexscaves:galena").withChance(0.85),
    ],
    ["alexscaves:energized_galena_azure", "alexscaves:energized_galena_scarlet"]
  );

  event.recipes.create
    .deploying(
      ["alexscaves:galena"],
      ["minecraft:red_sandstone", "alexscaves:telecore"]
    )
    .keepHeldItem();
});
