ServerEvents.recipes((event) => {
  event.remove("create_wizardry:arcane_essence_recipe");
  event.remove("create_wizardry:arcane_essence_glowstone_filling");
  event.remove("create_wizardry:arcane_essence_flour_filling");
  event.remove("create_wizardry:arcane_essence_redstone_filling");
  event.remove("create_wizardry:arcane_essence_sugar_filling");

  event.remove({ id: "enchantinginfuser:enchanting_infuser" });
  event.shaped("enchantinginfuser:enchanting_infuser", [" B ", "DXD", "OOO"], {
    B: "createaddition:electrum_sheet",
    D: "minecraft:diamond",
    O: "minecraft:obsidian",
    X: "minecraft:glowstone",
  });

  event.remove("enchantinginfuser:advanced_enchanting_infuser");
  event.shaped(
    "enchantinginfuser:advanced_enchanting_infuser",
    [" B ", "DXD", "OYO"],
    {
      B: "create_enchantment_industry:enchanting_guide",
      D: "minecraft:netherite_ingot",
      O: "minecraft:crying_obsidian",
      Y: "enchantinginfuser:enchanting_infuser",
      X: "create:industrial_iron_block",
    }
  );

  event.recipes.create.haunting(
    "minecraft:crying_obsidian",
    "minecraft:obsidian"
  );

  // event.remove("minecraft:bookshelf");
  // event.recipes.create
  // .sequenced_assembly(
  //   ["minecraft:bookshelf"],
  //   "minecraft:chiseled_bookshelf",
  //   [
  //     event.recipes.createDeploying("minecraft:chiseled_bookshelf", [
  //       "minecraft:chiseled_bookshelf",
  //       "minecraft:book",
  //     ]),
  //   ]
  // )
  // .transitionalItem("minecraft:chiseled_bookshelf")
  // .loops(6);
  event.recipes.create.cutting(
    "minecraft:chiseled_bookshelf",
    "#minecraft:logs"
  );

  event.recipes.create.milling(
    [Item.of("createaddition:electrum_nugget").withChance(0.1)],
    "create:ochrum"
  );

  let ancient_tomes = {
    "minecraft:protection": 4,
    "minecraft:fire_protection": 4,
    "minecraft:feather_falling": 4,
    "minecraft:blast_protection": 4,
    "minecraft:projectile_protection": 4,
    "minecraft:sharpness": 5,
    "minecraft:unbreaking": 3,
    "minecraft:fortune": 3,
    "minecraft:smite": 5,
    "minecraft:bane_of_arthropods": 5,
    "minecraft:looting": 3,
    "minecraft:efficiency": 5,
  };
  let ancient_tome_to_bag = (name, level) => {
    return Item.of(
      "supplementaries:sack",
      '{BlockEntityTag:{ForgeCaps:{},Items:[{Count:1b,Slot:0b,id:"quark:ancient_tome",tag:{StoredEnchantments:[{id:"' +
        name +
        '",lvl:' +
        level +
        "s}]}}]}}"
    );
  };
  let generate_patience_bonus = (rate) => {
    let result = [Item.of("kubejs:book_of_wisdom")];
    let enchants = Object.keys(ancient_tomes).length;
    for (const [name, level] of Object.entries(ancient_tomes)) {
      result.push(ancient_tome_to_bag(name, level).withChance(rate / enchants));
    }
    return result;
  };

  let shuffle = (array, seed) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    seed = seed || 1;
    let random = function () {
      var x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  const server = Utils.getServer();
  if (server === null) return;

  let WORLD_SEED = server.worldData.worldGenOptions().seed();

  let seed = (WORLD_SEED / 10000 + (WORLD_SEED % 10000)).toFixed();
  console.log("SERVER SEED " + seed);

  let pages = shuffle(
    [
      "kubejs:page_of_knowledge",
      "kubejs:page_of_enlightenment",
      "kubejs:page_of_wisdom",
      "kubejs:page_of_thought",
      "kubejs:page_of_philosophy",
      "kubejs:page_of_inspiration",
      "kubejs:page_of_vision",
    ],
    seed
  );

  let create = event.recipes.create;
  create.cutting([Item.of(pages[0], 7)], "kubejs:book_of_wisdom");

  let recipes = shuffle(
    [
      (x, y) =>
        create.filling(x, [
          Fluid.of("create_enchantment_industry:experience", 30),
          y,
        ]),
      (x, y) => create.milling(x, y),
      (x, y) => create.pressing(x, y),
      (x, y) => create.sandpaper_polishing(x, y),
      (x, y) => create.splashing(x, y),
      (x, y) => create.haunting(x, y),
      (x, y) => create.emptying([Fluid.water(30), x], y),
      (x, y) => create.deploying([x], [y, "create:zinc_nugget"]),
      (x, y) =>
        create.mechanical_crafting(x, ["yz"], {
          y: y,
          z: "create:copper_nugget",
        }),
      (x, y) => event.smelting(x, y),
    ],
    seed
  );
  let formulas = [(x) => (x * 2) % 7, (x) => (x ^ 2) % 7, (x) => (x ^ 3) % 7];

  for (let j = 1; j < pages.length; j++) {
    event
      .shapeless(pages[0], pages[j])
      .id("kubejs:page2default_" + j + "_manual_only");
  }

  for (let i = 0; i < formulas.length; i++) {
    for (let j = 0; j < pages.length; j++) {
      let from = pages[j];
      let to = pages[formulas[i](j)];
      if (from != to) {
        recipes[i](to, from);
      }
    }
  }

  create.compacting(
    generate_patience_bonus(0.02),
    [Fluid.of("molten_metals:molten_brass", 360)].concat(pages)
  );
});
