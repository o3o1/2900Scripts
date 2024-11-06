ServerEvents.recipes((event) => {
  event.remove("alexscaves:scarlet_neodymium_ingot");
  event.remove("alexscaves:azure_neodymium_ingot");

  event.recipes.create
    .sequenced_assembly(
      [
        Item.of("alexscaves:scarlet_neodymium_ingot").withChance(0.3),
        Item.of("minecraft:iron_ingot").withChance(0.7),
      ],
      "alexscaves:raw_scarlet_neodymium",
      [
        event.recipes.create.filling("alexscaves:raw_scarlet_neodymium", [
          Fluid.of("createbigcannons:molten_steel", 30),
          "alexscaves:raw_scarlet_neodymium",
        ]),
        event.recipes.create.pressing(
          "alexscaves:raw_scarlet_neodymium",
          "alexscaves:raw_scarlet_neodymium"
        ),
        event.recipes.createDeploying("alexscaves:raw_scarlet_neodymium", [
          "alexscaves:raw_scarlet_neodymium",
          "minecraft:redstone",
        ]),
      ]
    )
    .transitionalItem("alexscaves:raw_scarlet_neodymium")
    .loops(3);

  event.recipes.create
    .sequenced_assembly(
      [
        Item.of("alexscaves:azure_neodymium_ingot").withChance(0.3),
        Item.of("minecraft:iron_ingot").withChance(0.7),
      ],
      "alexscaves:raw_azure_neodymium",
      [
        event.recipes.create.filling("alexscaves:raw_azure_neodymium", [
          Fluid.of("createbigcannons:molten_steel", 30),
          "alexscaves:raw_azure_neodymium",
        ]),
        event.recipes.create.pressing(
          "alexscaves:raw_azure_neodymium",
          "alexscaves:raw_azure_neodymium"
        ),
        event.recipes.createDeploying("alexscaves:raw_azure_neodymium", [
          "alexscaves:raw_azure_neodymium",
          "minecraft:glowstone_dust",
        ]),
      ]
    )
    .transitionalItem("alexscaves:raw_azure_neodymium")
    .loops(3);

  event.remove("alexscaves:nuclear_bomb");
  event.recipes.create.mechanical_crafting(
    "alexscaves:nuclear_bomb",
    [
        "FCCCF",
        "BCACB",
        "BAGAB",
        "BDADB",
        "FDDDF"],
    {
      A: "alexscaves:fissile_core",
      B: "alexscaves:uranium_rod",
      C: "alexscaves:block_of_scarlet_neodymium",
      D: "alexscaves:block_of_azure_neodymium",
      F: 'createaddition:capacitor',
      G: "create:redstone_link"
    }
  );

  event.remove('alexscaves:remote_detonator');
  event.recipes.create.mechanical_crafting(
    'alexscaves:remote_detonator',
    [
        " A   ",
        "AAAAA",
        "ABBBA",
        " AGA ",
        " AFA "],
    {
      A: "alexscaves:polymer_plate",
      B: "minecraft:glass",
      F: 'createaddition:capacitor',
      G: "create:linked_controller"
    }
  );

  event.remove('alexscaves:polymer_plate');
  event.recipes.create.compacting([
    Item.of('alexscaves:polymer_plate').withChance(0.2),
    Item.of('alexscaves:unrefined_waste').withChance(0.8)
  ], ['alexscaves:toxic_paste', 'alexscaves:sulfur_dust', Item.of('alexscaves:radon_bottle', 8)]).superheated();

  event.remove('alexscaves:uranium_rod');
  event.recipes.create.mixing("alexscaves:uranium_rod",[Item.of('alexscaves:uranium', 6), Item.of('minecraft:blaze_rod')]);

  event.recipes.create.mixing('alexscaves:toxic_paste',[Item.of('alexscaves:uranium_shard', 2), Item.of('minecraft:mud')]).heated();

  event.remove("alexscaves:block_of_scarlet_neodymium");
  event.remove("alexscaves:block_of_azure_neodymium");

  event.recipes.create.compacting("alexscaves:block_of_scarlet_neodymium",[
    Fluid.of("kubejs:blazing_blood", 100),
    "9x alexscaves:scarlet_neodymium_ingot"
  ]).heated();

  event.recipes.create.compacting("alexscaves:block_of_azure_neodymium",[
    Fluid.of("kubejs:blazing_blood", 100),
    "9x alexscaves:azure_neodymium_ingot"
  ]).heated();

  event.remove({id:"alexscaves:raygun"})
  event.recipes.create.mechanical_crafting(
    'alexscaves:raygun',
    [
        "AAAAAA ",
        " ACCBBB",
        " AGA   ",
        " AFA   "],
    {
      A: "alexscaves:polymer_plate",
      B: "minecraft:depth_glass",
      C: 'alexscaves:fissile_core',
      G: "alexscaves:acid_bucket",
      F: 'kubejs:cobalt_block',
    }
  );
});
