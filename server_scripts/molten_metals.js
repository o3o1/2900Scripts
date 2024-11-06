ServerEvents.recipes((event) => {
    event.remove({ id: "molten_metals:emptying/molten_iron_from_metal_mold" });
    event.remove({ id: "molten_metals:emptying/molten_iron_from_ceramic_mold" });
    event.remove({ id: "molten_metals:filling/iron_filled_metal_mold" });
    event.remove({ id: "molten_metals:filling/iron_filled_ceramic_mold" });
    
    event.recipes.create.emptying([Fluid.of('kubejs:molten_iron', 90), 'molten_metals:ingot_mold'], 
        'molten_metals:molten_iron_ingot_mold'
    )
    event.recipes.create.emptying([Fluid.of('kubejs:molten_iron', 90), 'molten_metals:ceramic_ingot_mold'], 
        'molten_metals:molten_iron_ceramic_ingot_mold'
    )
    event.recipes.create.filling('molten_metals:molten_iron_ingot_mold', 
        [Fluid.of('kubejs:molten_iron', 90), 'molten_metals:ingot_mold']
    )
    event.recipes.create.filling('molten_metals:molten_iron_ceramic_ingot_mold', 
        [Fluid.of('kubejs:molten_iron', 90), 'molten_metals:ceramic_ingot_mold']
    )
    event.recipes.create.mixing(Fluid.of('kubejs:molten_iron', 810), 'minecraft:iron_block').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_iron', 1296), '#molten_metals:meltable_raw_iron_blocks').heated()
  });
