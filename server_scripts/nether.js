ServerEvents.recipes((event) => {
  event.recipes.create.crushing(
    [Item.of("minecraft:blaze_rod", 7), Item.of("minecraft:iron_nugget", 4)],
    "create:blaze_burner"
  );
  event.recipes.create.crushing(
    [
      Item.of("create:cinder_flour", 1),
      Item.of("create:cinder_flour", 1).withChance(0.5),
    ],
    "minecraft:nether_bricks"
  );

  event.recipes.create
    .compacting(
      [
        Item.of("minecraft:totem_of_undying").withChance(0.05),
        Item.of("minecraft:light_weighted_pressure_plate").withChance(0.95),
      ],
      [
        "createdeco:decal_skull",
        Item.of("minecraft:emerald_block", 2),
        Fluid.of("kubejs:molten_gold", 360),
      ]
    )
    .heated();

  event.recipes.create
    .mixing(
      [
        Fluid.of("kubejs:molten_iron", 90),
        Fluid.of("kubejs:blazing_blood", 400),
      ],
      "create:blaze_burner"
    )
    .superheated();

  event.recipes.create.compacting(
    [Item.of("minecraft:blaze_rod")],
    [Fluid.of("kubejs:blazing_blood", 100)]
  );

  event.remove({ id: "protection_pixel:chestplatelingingloot" });
  event.remove({ id: "protection_pixel:leggingsliningloot" });

  let sequenced_protection_pixel_recipe = (input, out) => {
    event.recipes.create
      .sequenced_assembly([out], input, [
        event.recipes.create.filling(input, [
          Fluid.of("kubejs:molten_iron", 90),
          input,
        ]),
        event.recipes.create.filling(input, [
          Fluid.of("kubejs:blazing_blood", 1000),
          input,
        ]),
        event.recipes.create.pressing(input, [input]),
      ])
      .transitionalItem(input)
      .loops(3);
  };

  sequenced_protection_pixel_recipe(
    "minecraft:diamond_chestplate",
    "protection_pixel:chestplatelining"
  );
  sequenced_protection_pixel_recipe(
    "minecraft:diamond_leggings",
    "protection_pixel:leggingslining"
  );

  event.remove({ id: "protection_pixel:grenadeloot" });
  event.recipes.create
    .sequenced_assembly(
      ["protection_pixel:pneumaticgrenade"],
      "create:propeller",
      [
        event.recipes.create.deploying(
          "create:propeller",
          [
            "create:propeller",
            "create:precision_mechanism",
          ]
        ),
        event.recipes.create.filling("create:propeller", [
          Fluid.of("kubejs:blazing_blood", 200),
          "create:propeller",
        ]),
        event.recipes.create.filling("create:propeller", [
          Fluid.of("kubejs:molten_brass", 180),
          "create:propeller",
        ]),
      ]
    )
    .transitionalItem("create:propeller")
    .loops(1);

  event.remove({id:"protection_pixel:smallnetheritesheetloot"});
  
});
