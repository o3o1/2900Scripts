ServerEvents.recipes((event) => {
    event.remove({id:"hotbath:hot_water_bucket"});

    event.recipes.create.mixing(Fluid.of("hotbath:hot_water_fluid", 1000), [Fluid.of("kubejs:sulfur_gas", 10), Fluid.water(1000)]).heated();
    event.recipes.create.mixing(Fluid.of("hotbath:honey_bath_fluid", 1000), [Fluid.of("create:honey", 100), Fluid.of("hotbath:hot_water_fluid", 1000)]).heated();
    event.recipes.create.mixing(Fluid.of("hotbath:milk_bath_fluid", 1000), [Fluid.of("minecraft:milk", 500), Fluid.of("hotbath:hot_water_fluid", 1000)]).heated();
    event.recipes.create.compacting(Fluid.of("hotbath:peony_bath_fluid", 1000), ["minecraft:peony", Fluid.of("hotbath:hot_water_fluid", 1000)]).heated();
    event.recipes.create.compacting(Fluid.of("hotbath:rose_bath_fluid", 1000), ["minecraft:rose_bush", Fluid.of("hotbath:hot_water_fluid", 1000)]).heated();
    event.recipes.create.compacting(Fluid.of("hotbath:herbal_bath_fluid", 1000), ["hotbath:bath_herb", Fluid.of("hotbath:hot_water_fluid", 1000)]).heated();
})