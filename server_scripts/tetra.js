ServerEvents.recipes((event) => {
    event.recipes.create.filling('tetra:thermal_cell', [
        Fluid.of("kubejs:blazing_blood", 600),
        'minecraft:netherite_ingot',
    ]);
  });
  