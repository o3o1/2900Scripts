ServerEvents.recipes((event) => {
  event.remove({ id: "molten_metals:crushing/slag_crushing" });
  event.remove({ id: "molten_metals:slag_from_block" });
  event.remove({ id: "molten_metals:slag_from_nugget" });
  event.remove({ id: "molten_metals:slag_nugget" });
  event.remove({ id: "molten_metals:slag_block" });

  event.recipes.create.mixing(Fluid.of("kubejs:iron_ion_solution", 100), [
    Fluid.of("alexscaves:acid", 100),
    "kubejs:raw_iron_nugget",
  ]);
  event.recipes.create.mixing(Fluid.of("kubejs:iron_ion_solution", 1000), [
    Fluid.of("alexscaves:acid", 1000),
    "create:crushed_raw_iron",
  ]);
  event.recipes.create
    .mixing(Fluid.of("molten_metals:molten_iron", 54), [
      Fluid.of("kubejs:iron_ion_solution", 100),
    ])
    .superheated();

  event.recipes.create.mixing("2x minecraft:gold_nugget", [
    Fluid.of("alexscaves:acid", 100),
    "kubejs:raw_gold_nugget",
  ]);
  event.recipes.create.mixing("25x minecraft:gold_nugget", [
    Fluid.of("alexscaves:acid", 1000),
    "create:crushed_raw_gold",
  ]);
  // event.recipes.create
  // .mixing(Fluid.of("molten_metals:molten_gold", 54), [
  //   Fluid.of("kubejs:gold_ion_solution", 100),
  // ])
  // .superheated();

  event.recipes.create.mixing(Fluid.of("kubejs:copper_ion_solution", 1000), [
    Fluid.of("alexscaves:acid", 1000),
    "create:crushed_raw_copper",
  ]);
  event.recipes.create
    .mixing(Fluid.of("molten_metals:molten_copper", 54), [
      Fluid.of("kubejs:copper_ion_solution", 100),
    ])
    .superheated();

  event.recipes.create.mixing(Fluid.of("kubejs:zinc_ion_solution", 1000), [
    Fluid.of("alexscaves:acid", 1000),
    "create:crushed_raw_zinc",
  ]);
  event.recipes.create
    .mixing(Fluid.of("molten_metals:molten_zinc", 54), [
      Fluid.of("kubejs:zinc_ion_solution", 100),
    ])
    .superheated();

  event.remove({ id: "molten_metals:splashing/brass_ingot_from_metal_mold" });
  event.remove({ id: "molten_metals:splashing/copper_ingot_from_metal_mold" });
  event.remove({ id: "molten_metals:splashing/gold_ingot_from_metal_mold" });
  event.remove({ id: "molten_metals:splashing/iron_ingot_from_metal_mold" });
  event.remove({
    id: "molten_metals:splashing/netherite_ingot_from_metal_mold",
  });
  event.remove({ id: "molten_metals:splashing/zinc_ingot_from_metal_mold" });
  event.remove({
    id: "molten_metals:splashing/electrum_ingot_from_metal_mold",
  });

  event.recipes.create
    .mixing(Fluid.of("molten_metals:molten_netherite", 25), [
      "#minecraft:netherite_items",
    ])
    .superheated();

  event.blasting("alloyed:steel_ingot", "alloyed:steel_sheet");
  event.blasting("minecraft:gold_ingot", "create:golden_sheet");
  event.blasting(
    "createaddition:electrum_ingot",
    "createaddition:electrum_sheet"
  );
  event.blasting("create:andesite_alloy", "createdeco:andesite_sheet");
  event.blasting("minecraft:netherite_ingot", "createdeco:netherite_sheet");
  event.blasting("create:zinc_ingot", "createaddition:zinc_sheet");
  event.blasting("minecraft:copper_ingot", "create:copper_sheet");
  event.blasting("create:brass_ingot", "create:brass_sheet");
  event.blasting("alloyed:bronze_ingot", "alloyed:bronze_sheet");

  event.recipes.create
    .mixing(Fluid.of("kubejs:molten_amethyst", 90), "minecraft:amethyst_shard")
    .heated();
  event.recipes.create
    .mixing(Fluid.of("kubejs:molten_amethyst", 360), "minecraft:amethyst_block")
    .heated();
  event.recipes.create.compacting(
    "minecraft:amethyst_shard",
    Fluid.of("kubejs:molten_amethyst", 90)
  );

  let melten_diamond_pair = {
    "minecraft:diamond": 90,
    "minecraft:diamond_block": 810,
    "minecraft:diamond_sword": 25,
    "minecraft:diamond_pickaxe": 25,
    "minecraft:diamond_axe": 25,
    "minecraft:diamond_hoe": 25,
    "minecraft:diamond_helmet": 25*3,
    "minecraft:diamond_chestplate": 25*5,
    "minecraft:diamond_leggings": 25*5,
    "minecraft:diamond_boots": 25*2
  }
  for (const [key, value] of Object.entries(melten_diamond_pair)) {
    event.recipes.create
    .mixing(Fluid.of("kubejs:molten_diamond", value), key)
    .superheated();
  }
  
  event.recipes.create.compacting(
    "minecraft:diamond",
    Fluid.of("kubejs:molten_diamond", 90)
  );

  event.recipes.create
    .mixing(Fluid.of("kubejs:molten_emerald", 90), "minecraft:emerald")
    .heated();
  event.recipes.create
    .mixing(Fluid.of("kubejs:molten_emerald", 810), "minecraft:emerald_block")
    .heated();
  event.recipes.create.compacting(
    "minecraft:emerald",
    Fluid.of("kubejs:molten_emerald", 90)
  );

  //cobalt
  event.blasting(
    "regions_unexplored:cobalt_obsidian",
    "minecraft:crying_obsidian"
  );
  event.recipes.create.emptying(
    [Fluid.of("kubejs:cobalt_ion_solution", 75), "4x create:powdered_obsidian"],
    "regions_unexplored:cobalt_obsidian"
  );
  event.recipes.create
    .mixing(
      [
        Fluid.of("molten_metals:molten_cobalt", 2),
        Fluid.of("kubejs:iron_ion_solution", 30),
      ],
      [Fluid.of("kubejs:cobalt_ion_solution", 50), "6x minecraft:iron_nugget"]
    )
    .superheated();

  event.remove({
    id: "molten_metals:splashing/netherite_ingot_from_ceramic_mold",
  });
  event.remove({
    id: "molten_metals:emptying/molten_netherite_from_ceramic_mold",
  });
  event.remove({ id: "molten_metals:filling/netherite_filled_ceramic_mold" });
  event.recipes.create.filling("molten_metals:molten_cobalt_ingot_mold", [
    Fluid.of("molten_metals:molten_cobalt", 90),
    "molten_metals:ingot_mold",
  ]);
  // event.recipes.create.filling(
  //   "molten_metals:molten_cobalt_ceramic_ingot_mold",
  //   [
  //     Fluid.of("molten_metals:molten_cobalt", 90),
  //     "molten_metals:ceramic_ingot_mold",
  //   ]
  // );

  // event.recipes.create.emptying(
  //   [
  //     Fluid.of("molten_metals:molten_cobalt", 90),
  //     "molten_metals:ceramic_ingot_mold",
  //   ],
  //   "molten_metals:molten_cobalt_ceramic_ingot_mold"
  // );
  event.recipes.create.emptying(
    [Fluid.of("molten_metals:molten_cobalt", 90), "molten_metals:ingot_mold"],
    "molten_metals:molten_cobalt_ingot_mold"
  );
  event.recipes.create
    .mixing(Fluid.of("molten_metals:molten_cobalt", 90), [
      "kubejs:cobalt_ingot",
    ])
    .heated();
  event.recipes.create
    .mixing(Fluid.of("molten_metals:molten_cobalt", 10), [
      "kubejs:cobalt_nugget",
    ])
    .heated();
  event.recipes.create
    .mixing(Fluid.of("molten_metals:molten_cobalt", 810), [
      "kubejs:cobalt_block",
    ])
    .heated();

  event.shapeless("kubejs:cobalt_ingot", ["9x kubejs:cobalt_nugget"]);
  event.shapeless("9x kubejs:cobalt_nugget", "kubejs:cobalt_ingot");
  event.shapeless("kubejs:cobalt_block", ["9x kubejs:cobalt_ingot"]);
  event.shapeless("9x kubejs:cobalt_ingot", "kubejs:cobalt_block");
});
