ServerEvents.recipes((event) => {
  event.remove("createlowheated:basic_burner");
  event.shaped("createlowheated:basic_burner", ["AGA", " A "], {
    A: "create:andesite_alloy",
    G: "minecraft:hay_block",
  });
  event.recipes.create.haunting(
    "minecraft:wither_skeleton_skull",
    "minecraft:skeleton_skull"
  );
  event.remove("create:crushing/nether_gold_ore");
  event.remove("create:crushing/nether_quartz_ore");
  event.remove("createaddition:mixing/netherrack");

  event.recipes.create.haunting(
    "minecraft:warped_nylium",
    "minecraft:crimson_nylium"
  );

  event.recipes.create.compacting("minecraft:ghast_tear", [
    "minecraft:twisting_vines",
    "minecraft:weeping_vines",
  ]);

  event.remove("functionalstorage:ender_drawer");

  event.remove("irons_spellbooks:divine_pearl");
  event.blasting("irons_spellbooks:divine_pearl", "alexscaves:pearl");

  event.shapeless("kubejs:rough_diamond_block", ["9x kubejs:rough_diamond"]);
  event.shapeless("9x kubejs:rough_diamond", "kubejs:rough_diamond_block");
  event.recipes.create.sandpaper_polishing(
    "minecraft:diamond",
    "kubejs:rough_diamond"
  );
  event.recipes.create.crushing(
    "createaddition:diamond_grit",
    "kubejs:rough_diamond"
  );

  event.recipes.create.sandpaper_polishing(
    ["minecraft:lapis_lazuli"],
    "kubejs:rough_lazurite"
  );
  event.recipes.create.crushing(
    [
      "12x kubejs:lapis_lazuli_shard",
      Item.of("createaddition:electrum_nugget").withChance(0.1),
    ],
    "kubejs:rough_lazurite"
  );
  event.remove({ id: "minecraft:blue_dye" });
  event.shapeless("minecraft:lapis_lazuli", ["9x kubejs:lapis_lazuli_shard"]);
  event.shapeless("9x kubejs:lapis_lazuli_shard", "minecraft:lapis_lazuli");

  event.recipes.create.pressing("kubejs:lapis_sheet", "minecraft:lapis_lazuli");

  event.recipes.create.compacting("irons_spellbooks:blank_rune", [
    "6x alexscaves:moth_dust",
    "alexscaves:polymer_plate",
  ]);

  event.recipes.create.crushing(
    Item.of("minecraft:coal").withChance(0.4),
    "#create:stone_types/scorchia"
  );

  event.remove({
    id: "create:industrial_iron_block_from_iron_ingots_stonecutting",
  });
  event.remove({ id: "createdeco:compacting/industrial_iron_ingot" });

  //event.shapeless('minecraft:warped_nylium', ['minecraft:netherrack','5x minecraft:warped_roots'])
  //event.shapeless('minecraft:crimson_nylium', ['minecraft:netherrack','5x minecraft:crimson_roots'])
  event.remove({ id: "create:crafting/tree_fertilizer" });
  event.remove({ id: "create:crafting/appliances/tree_fertilizer" });

  event.shaped("minecraft:bundle", ["SRS", "R R", "RRR"], {
    S: {
      item: "minecraft:string",
    },
    R: {
      item: "minecraft:rabbit_hide",
    },
  });

  event.shaped("minecraft:bundle", ["SRS"], {
    S: {
      item: "minecraft:string",
    },
    R: {
      item: "minecraft:leather",
    },
  });
});
