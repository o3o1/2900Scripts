ServerEvents.recipes((event) => {
  event.remove({ id: "tacz:gun_smith_table" });

  event.remove({ id: "tacz:gunpowder" });
  event.remove({ id: "alexscaves:gunpowder_from_sulfur" });
  event.remove({ id: "kinetic_pixel:barrelreuse" });

  event.remove({ id: "kinetic_pixel:brasscsloot" });
  event.remove({ id: "kinetic_pixel:andesitealloycsloot" });
  event.remove({ id: "kinetic_pixel:specialsteelcsloot" });
  event.remove({ id: "kinetic_pixel:specialsteelloot" });
  event.remove({ id: "kinetic_pixel:nitropropellantloot" });
  event.remove({ id: "kinetic_pixel:gascylinderloot" });

  event.remove({ id: "kinetic_pixel:componenttemplateloot" });
  event.shaped("kinetic_pixel:componenttemplate", ["ABA", "AAA"], {
    A: "minecraft:clay_ball",
    B: "#forge:rods/iron",
  });

  event.remove({ id: "kinetic_pixel:barrelloot" });
  event.recipes.create.filling("kinetic_pixel:barrel", [
    Fluid.of("createbigcannons:molten_steel", 90),
    "kinetic_pixel:componenttemplate",
  ]);
  // event.recipes.create.cutting("kinetic_pixel:barrel", "alloyed:steel_ingot");

  event.remove({ id: "kinetic_pixel:ammunitionbxloot" });
  event.stonecutting("kinetic_pixel:ammunitionbox", "alloyed:steel_ingot");

  event.recipes.create
    .cutting(
      Item.of("tacz:ammo", 12, '{AmmoId:"create_armorer:gas_pistol_ammo"}'),
      "create:brass_ingot"
    )
    .processingTime(500);
  event.recipes.create.crushing(
    [
      Item.of("kinetic_pixel:pressurepoweredfirearmblueprint").withChance(0.4),
      Item.of("kinetic_pixel:heatpoweredfirearmblueprint").withChance(0.4),
      Item.of("kinetic_pixel:laboratorialfirearmblueprint").withChance(0.2),
    ],
    "minecraft:creeper_head"
  );

  event.recipes.create.compacting(
    Fluid.of("kubejs:flow_gunpowder", 90),
    "minecraft:gunpowder"
  );

  event.recipes.create
    .cutting(
      Item.of("kubejs:unprocessed_brass_shell"),
      "createdeco:brass_coin"
    )
    .processingTime(300);

  event.recipes.create.filling("kubejs:brass_shell_with_acid", [
    Fluid.of("alexscaves:acid", 10),
    "kubejs:unprocessed_brass_shell",
  ]);

  event.recipes.create.emptying(
    [Fluid.of("alexscaves:acid", 9), "kubejs:brass_shell"],
    "kubejs:brass_shell_with_acid"
  );

  event.recipes.create.cutting(
    "9x kubejs:steel_bullet_core",
    "alloyed:steel_ingot"
  );

  //slap
  event.recipes.create
    .sequenced_assembly(
      [Item.of("tacz:ammo", '{AmmoId:"create_armorer:slap"}')],
      "kubejs:brass_shell",
      [
        event.recipes.create.filling("kubejs:incomplete_ammo_slap", [
          Fluid.of("kubejs:flow_gunpowder", 15),
          "kubejs:incomplete_ammo_slap",
        ]),
        event.recipes.create.filling("kubejs:incomplete_ammo_slap", [
          Fluid.of("molten_metals:molten_copper", 30),
          "kubejs:incomplete_ammo_slap",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_ammo_slap", [
          "kubejs:incomplete_ammo_slap",
          "kubejs:steel_bullet_core",
        ]),
      ]
    )
    .transitionalItem("kubejs:incomplete_ammo_slap")
    .loops(1);

  //12g
  event.recipes.create
    .sequenced_assembly(
      [Item.of("tacz:ammo", '{AmmoId:"tacz:12g"}')],
      "kubejs:brass_shell",
      [
        event.recipes.createDeploying("kubejs:incomplete_ammo_12g", [
          "kubejs:incomplete_ammo_12g",
          "alloyed:steel_nugget",
        ]),
        event.recipes.create.filling("kubejs:incomplete_ammo_12g", [
          Fluid.of("kubejs:flow_gunpowder", 5),
          "kubejs:incomplete_ammo_12g",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_ammo_12g", [
          "kubejs:incomplete_ammo_12g",
          "minecraft:blaze_powder",
        ]),
        event.recipes.create.filling("kubejs:incomplete_ammo_12g", [
          Fluid.of("kubejs:flow_gunpowder", 5),
          "kubejs:incomplete_ammo_12g",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_ammo_12g", [
          "kubejs:incomplete_ammo_12g",
          "alloyed:steel_nugget",
        ]),
        event.recipes.create.filling("kubejs:incomplete_ammo_12g", [
          Fluid.of("molten_metals:molten_copper", 90),
          "kubejs:incomplete_ammo_12g",
        ]),
      ]
    )
    .transitionalItem("kubejs:incomplete_ammo_12g")
    .loops(1);

  //rbapb
  event.recipes.create
    .sequenced_assembly(
      [Item.of("tacz:ammo", '{AmmoId:"create_armorer:rbapb"}')],
      "kubejs:brass_shell",
      [
        event.recipes.createDeploying("kubejs:incomplete_ammo_rbapb", [
          "kubejs:incomplete_ammo_rbapb",
          "refinedstorage:advanced_processor",
        ]),
        event.recipes.create.filling("kubejs:incomplete_ammo_rbapb", [
          Fluid.of("kubejs:blazing_blood", 200),
          "kubejs:incomplete_ammo_rbapb",
        ]),
        event.recipes.create.filling("kubejs:incomplete_ammo_rbapb", [
          Fluid.of("molten_metals:molten_copper", 60),
          "kubejs:incomplete_ammo_rbapb",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_ammo_rbapb", [
          "kubejs:incomplete_ammo_rbapb",
          "kubejs:steel_bullet_core",
        ]),
      ]
    )
    .transitionalItem("kubejs:incomplete_ammo_rbapb")
    .loops(1);

  // attachments
  event.shaped(
    Item.of(
      "tacz:attachment",
      '{AttachmentId:"create_armorer:extended_mag_ca_1"}'
    ),
    ["AGA"],
    {
      A: "createdeco:andesite_sheet",
      G: "createdeco:netherite_sheet",
    }
  );

  event.shaped(
    Item.of(
      "tacz:attachment",
      '{AttachmentId:"create_armorer:extended_mag_ca_2"}'
    ),
    ["AGA", "AGA"],
    {
      A: "create:copper_sheet",
      G: "createdeco:netherite_sheet",
    }
  );

  event.shaped(
    Item.of(
      "tacz:attachment",
      '{AttachmentId:"create_armorer:extended_mag_ca_3"}'
    ),
    ["AGA", "AGA", "AGA"],
    {
      A: "create:brass_sheet",
      G: "createdeco:netherite_sheet",
    }
  );

  event.shapeless(
    Item.of(
      "tacz:attachment",
      '{AttachmentId:"create_armorer:sight_standard"}'
    ),
    ["crystal_clear:train_clear_glass_casing", "refinedstorage:basic_processor"]
  );
  event.shapeless(
    Item.of(
      "tacz:attachment",
      '{AttachmentId:"create_armorer:sight_medium_distance"}'
    ),
    [
      "crystal_clear:train_clear_glass_casing",
      "refinedstorage:improved_processor",
    ]
  );
  event.shapeless(
    Item.of(
      "tacz:attachment",
      '{AttachmentId:"create_armorer:scope_telephoto"}'
    ),
    [
      "crystal_clear:train_clear_glass_casing",
      "refinedstorage:advanced_processor",
    ]
  );

  event.shaped(
    Item.of(
      "tacz:attachment",
      '{AttachmentId:"create_armorer:muzzle_refit_brass_retractor"}'
    ),
    [" G ", "GAG", " G "],
    {
      A: "create:chute",
      G: "create:brass_sheet",
    }
  );

  event.remove({ id: 'createbigcannons:compacting/packed_gunpowder' });
  event.recipes.create.compacting('createbigcannons:packed_gunpowder',
    ['minecraft:string', '3x minecraft:gunpowder']
  )
  event.remove({ id: 'regions_unexplored:ash' });
  event.shapeless('regions_unexplored:ash', ['4x supplementaries:ash']);
});
