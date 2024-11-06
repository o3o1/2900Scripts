ServerEvents.recipes((event) => {
  event.remove("waystones:warp_stone");
  event.recipes.create
      .sequenced_assembly([
        Item.of("waystones:warp_stone").withChance(0.075),
        Item.of("minecraft:amethyst_shard").withChance(0.29),
        Item.of("minecraft:ender_pearl").withChance(0.6),
        Item.of("waystones:warp_scroll").withChance(0.03),
        Item.of("waystones:warp_dust").withChance(0.005),
      ], "minecraft:ender_pearl", [
        event.recipes.createDeploying("minecraft:ender_pearl", [
          "minecraft:ender_pearl",
          "minecraft:amethyst_cluster",
        ]),
        event.recipes.createDeploying("minecraft:ender_pearl", [
          "minecraft:ender_pearl",
          "kubejs:silver_nugget",
        ]),
        event.recipes.create.pressing(
          "minecraft:ender_pearl",
          "minecraft:ender_pearl"
        ),
      ])
      .transitionalItem("minecraft:ender_pearl")
      .loops(3);

  event.replaceInput(
    { mod: "waystones" }, // Arg 1: the filter
    'minecraft:obsidian',            // Arg 2: the item to replace
    'minecraft:crying_obsidian'         // Arg 3: the item to replace it with
  )

  event.remove("createendertransmission:energy_transmitter");
  event.remove("createendertransmission:item_transmitter");
  event.remove("createendertransmission:fluid_transmitter");

  let create_sequenced_transmission_recipe = (item, ingredient) => {
    event.recipes.create
      .sequenced_assembly([Item.of(item)], "create:precision_mechanism", [
        event.recipes.createDeploying("create:incomplete_precision_mechanism", [
          "create:incomplete_precision_mechanism",
          ingredient,
        ]),
        event.recipes.create.filling("create:incomplete_precision_mechanism", [
          Fluid.of("molten_metals:molten_gold", 360),
          "create:incomplete_precision_mechanism",
        ]),
        event.recipes.createDeploying("create:incomplete_precision_mechanism", [
          "create:incomplete_precision_mechanism",
          "waystones:sharestone",
        ]),
      ])
      .transitionalItem("create:incomplete_precision_mechanism")
      .loops(5);
  };
  create_sequenced_transmission_recipe(
    "createendertransmission:energy_transmitter",
    "create:shaft"
  );
  create_sequenced_transmission_recipe(
    "createendertransmission:item_transmitter",
    "create:chute"
  );
  create_sequenced_transmission_recipe(
    "createendertransmission:fluid_transmitter",
    "create:fluid_pipe"
  );

  event.remove("createendertransmission:chunk_loader");
  event.shaped("createendertransmission:chunk_loader", 
  ["GGG",
   "GAG",
   "OOO"], {
    A: "create:precision_mechanism",
    O: "minecraft:obsidian",
    G: "minecraft:glass",
  });
});
