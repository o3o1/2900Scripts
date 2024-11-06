ServerEvents.recipes((event) => {
    event.remove({type:"createbigcannons:melting"});
    event.remove({id:"createbigcannons:basin_foundry_lid"});
    event.remove({id:"createbigcannons:compacting/iron_to_cast_iron_ingot"});

    event.remove({id:"createbigcannons:compacting/forge_steel_ingot"});
    event.remove({id:"molten_metals:emptying/molten_steel_from_bucket"});
    event.remove({id:"create:fill_minecraft_bucket_with_molten_metals_molten_steel"});

    event.recipes.create.mixing("6x minecraft:gunpowder", ['createbigcannons:nitropowder', '2x alexscaves:sulfur_dust', '3x minecraft:charcoal'])

    event.recipes.create
    .mixing(Fluid.of("createbigcannons:molten_nethersteel", 10), [
      'createbigcannons:nethersteel_nugget',
    ])
    .superheated();
    event.recipes.create
    .mixing(Fluid.of("createbigcannons:molten_nethersteel", 90), [
      'createbigcannons:nethersteel_ingot',
    ])
    .superheated();
    event.recipes.create
    .mixing(Fluid.of("createbigcannons:molten_nethersteel", 810), [
      'createbigcannons:nethersteel_block',
    ])
    .superheated();

    event.recipes.create
    .mixing(Fluid.of("createbigcannons:molten_cast_iron", 10), [
      'createbigcannons:cast_iron_nugget',
    ])
    .heated();
    event.recipes.create
    .mixing(Fluid.of("createbigcannons:molten_cast_iron", 90), [
      'createbigcannons:cast_iron_ingot',
    ])
    .heated();
    event.recipes.create
    .mixing(Fluid.of("createbigcannons:molten_cast_iron", 810), [
      'createbigcannons:cast_iron_block',
    ])
    .heated();
})