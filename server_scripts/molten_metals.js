ServerEvents.tags('fluid', event => {
    let moltenMetals = [
        'iron',
        'copper',
        'gold',
        'zinc',
        'brass',
        'netherite',
        'silver',
        'electrum',
    ]
    for (let metal of moltenMetals) {
        event.add('kubejs:molten_metals', `kubejs:molten_${metal}`)
    }
})

ServerEvents.recipes((event) => {
    function createGeneralRecipes(name) {
        event.recipes.create.emptying([Fluid.of(`kubejs:molten_${name}`, 90), 'molten_metals:ingot_mold'], 
            `molten_metals:molten_${name}_ingot_mold`
        )
        event.recipes.create.emptying([Fluid.of(`kubejs:molten_${name}`, 90), 'molten_metals:ceramic_ingot_mold'], 
            `molten_metals:molten_${name}_ceramic_ingot_mold`
        )
        event.recipes.create.filling(`molten_metals:molten_${name}_ingot_mold`, 
            [Fluid.of(`kubejs:molten_${name}`, 90), 'molten_metals:ingot_mold']
        )
        event.recipes.create.filling(`molten_metals:molten_${name}_ceramic_ingot_mold`, 
            [Fluid.of(`kubejs:molten_${name}`, 90), 'molten_metals:ceramic_ingot_mold']
        )
    }
    
    function createRecipesForIronCopperZinc(name) {
        event.remove({ id: `molten_metals:emptying/molten_${name}_from_metal_mold` });
        event.remove({ id: `molten_metals:emptying/molten_${name}_from_ceramic_mold` });
        event.remove({ id: `molten_metals:filling/${name}_filled_metal_mold` });
        event.remove({ id: `molten_metals:filling/${name}_filled_ceramic_mold` });
        event.remove({ id: `molten_metals:mixing/molten_${name}_from_block` });
        event.remove({ id: `molten_metals:mixing/molten_${name}_from_block_raw` });
        event.remove({ id: `molten_metals:mixing/molten_${name}_from_ingot` });
        event.remove({ id: `molten_metals:mixing/molten_${name}_from_ingot_raw` });
        event.remove({ id: `molten_metals:mixing/molten_${name}_from_nugget` });

        event.recipes.create.mixing(Fluid.of(`kubejs:molten_${name}`, 810), `minecraft:${name}_block`).lowheated()
        event.recipes.create.mixing(Fluid.of(`kubejs:molten_${name}`, 1296), `#molten_metals:meltable_raw_${name}_blocks`).lowheated()
        event.recipes.create.mixing(Fluid.of(`kubejs:molten_${name}`, 90), `#molten_metals:meltable_${name}`).lowheated()
        event.recipes.create.mixing(Fluid.of(`kubejs:molten_${name}`, 144), `#molten_metals:meltable_raw_${name}`).lowheated()
        event.recipes.create.mixing(Fluid.of(`kubejs:molten_${name}`, 10), `#molten_metals:meltable_${name}_nuggets`).lowheated()
    }
    
    let moltenMetals = [
        'iron',
        'copper',
        'zinc',
        'gold',
        'brass',
        'silver',
        'electrum',
    ]

    for (let metal of moltenMetals) {
        createGeneralRecipes(metal)
    }
    
    event.remove({ id: "molten_metals:mixing/molten_iron_from_nugget_raw" });
    event.remove({ id: "molten_metals:mixing/molten_brass_from_alloying" });
    event.remove({ id: "create_wizardry:mana_recipe" });
    let moltenMetals1 = [
        'iron',
        'copper',
        'zinc',
    ]
    for (let metal of moltenMetals1) {
        createRecipesForIronCopperZinc(metal)
    }
    event.recipes.create.mixing(Fluid.of('kubejs:molten_iron', 16), 'kubejs:raw_iron_nugget').lowheated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_zinc', 810), 'create:zinc_block').lowheated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_brass', 100), [Fluid.of('kubejs:molten_copper', 70), Fluid.of('kubejs:molten_zinc', 30)])
    event.recipes.create.mixing(Fluid.of('create_wizardry:mana', 500), [Fluid.of('kubejs:molten_zinc', 500), '4x create:experience_nugget', '3x irons_spellbooks:arcane_essence', 'minecraft:lapis_lazuli']).heated()
    
    // gold
    event.remove({ id: 'molten_metals:emptying/molten_gold_from_metal_mold' });
    event.remove({ id: 'molten_metals:emptying/molten_gold_from_ceramic_mold' });
    event.remove({ id: 'molten_metals:filling/gold_filled_metal_mold' });
    event.remove({ id: 'molten_metals:filling/gold_filled_ceramic_mold' });
    event.remove({ id: 'molten_metals:mixing/molten_gold_from_block' });
    event.remove({ id: 'molten_metals:mixing/molten_gold_from_block_raw' });
    event.remove({ id: 'molten_metals:mixing/molten_gold_from_ingot' });
    event.remove({ id: 'molten_metals:mixing/molten_gold_from_ingot_raw' });
    event.remove({ id: 'molten_metals:mixing/molten_gold_from_nugget' });
    event.remove({ id: "molten_metals:mixing/molten_gold_from_nugget_raw" });

    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 810), 'minecraft:gold_block').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 1296), '#molten_metals:meltable_raw_gold_blocks').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 90), '#molten_metals:meltable_gold').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 144), '#molten_metals:meltable_raw_gold').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 10), '#molten_metals:meltable_gold_nuggets').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 16), 'kubejs:raw_gold_nugget').heated()

    // netherite
    event.remove({ id: 'molten_metals:emptying/molten_netherite_from_metal_mold' });
    event.remove({ id: 'molten_metals:filling/netherite_filled_metal_mold' });
    // event.remove({ id: 'molten_metals:mixing/molten_netherite_from_alloying' });
    // event.remove({ id: 'molten_metals:mixing/molten_netherite_from_block' });
    // event.remove({ id: 'molten_metals:mixing/molten_netherite_from_ingot' });
    
    event.recipes.create.emptying([Fluid.of(`kubejs:molten_netherite`, 90), 'molten_metals:ingot_mold'], 
        `molten_metals:molten_netherite_ingot_mold`
    )
    event.recipes.create.filling(`molten_metals:molten_netherite_ingot_mold`, 
        [Fluid.of(`kubejs:molten_netherite`, 90), 'molten_metals:ingot_mold']
    )
    event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 90), ['3x minecraft:netherite_scrap', Fluid.of('kubejs:molten_gold', 360)]).superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 810), 'minecraft:netherite_block').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 90), '#molten_metals:meltable_netherite_ingots').superheated()
    
    event.recipes.create.sequenced_assembly(
		'protection_pixel:hellsnakeas_chestplate', 
        'protection_pixel:hellsnake_chestplate', 
        [ 
		event.recipes.createFilling('protection_pixel:incompletehellsnake', ['protection_pixel:incompletehellsnake', Fluid.lava(250)]),
        event.recipes.createPressing('protection_pixel:incompletehellsnake', 'protection_pixel:incompletehellsnake'),
		event.recipes.createDeploying('protection_pixel:incompletehellsnake', ['protection_pixel:incompletehellsnake', 'create:sturdy_sheet']),
        event.recipes.createDeploying('protection_pixel:incompletehellsnake', ['protection_pixel:incompletehellsnake', 'create:sturdy_sheet']),
		event.recipes.createDeploying('protection_pixel:incompletehellsnake', ['protection_pixel:incompletehellsnake', 'create:precision_mechanism']),
        event.recipes.createFilling('protection_pixel:incompletehellsnake', ['protection_pixel:incompletehellsnake', Fluid.of('kubejs:molten_netherite', 45)]),
	]).transitionalItem('protection_pixel:incompletehellsnake').loops(2) 
    
    event.custom({
        "type":"createaddition:liquid_burning",
        "input": {
            "fluidTag": "kubejs:molten_metals",
            "amount": 1000
        },
        "burnTime": 19200
    })
});
