ServerEvents.recipes((event) => {
  event.recipes.create.compacting(
    [Item.of("kubejs:semi_solid_steel")],
    [Fluid.of("molten_metals:molten_iron", 100), "minecraft:coal"]
  );

  event.recipes.create
    .sequenced_assembly(
      [Item.of("alloyed:steel_ingot")],
      "kubejs:semi_solid_steel",
      [
        event.recipes.create.pressing(
          "kubejs:semi_solid_steel",
          "kubejs:semi_solid_steel"
        ),
      ]
    )
    .transitionalItem("kubejs:semi_solid_steel")
    .loops(12);

  event.replaceInput(
    { id: "tetra:chainmail_helmet" },
    "tetra:forged_mesh",
    "minecraft:chain"
  );
  event.replaceInput(
    { id: "tetra:chainmail_chestplate" },
    "tetra:forged_mesh",
    "minecraft:chain"
  );
  event.replaceInput(
    { id: "tetra:chainmail_leggings" },
    "tetra:forged_mesh",
    "minecraft:chain"
  );
  event.replaceInput(
    { id: "tetra:chainmail_boots" },
    "tetra:forged_mesh",
    "minecraft:chain"
  );
});
