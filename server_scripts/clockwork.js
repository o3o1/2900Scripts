ServerEvents.recipes((event) => {
    event.remove({id:"vs_clockwork:crafting/kinetics/wanderlite_matrix"});
    event.recipes.create.filling('vs_clockwork:wanderlite_matrix', [
        Fluid.of("molten_metals:molten_cobalt", 810),
        "vs_clockwork:wanderlite_cube",
      ]);

    event.recipes.create.filling('vs_clockwork:creative_gravitron', [
      Fluid.of("molten_metals:molten_cobalt", 1000),
      "vs_clockwork:gravitron",
    ]);
})