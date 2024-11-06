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
    event.remove({ id: "immersive_aircraft:enhanced_propeller" });

    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 810), 'minecraft:gold_block').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 1296), '#molten_metals:meltable_raw_gold_blocks').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 90), '#molten_metals:meltable_gold').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 144), '#molten_metals:meltable_raw_gold').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 10), '#molten_metals:meltable_gold_nuggets').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 16), 'kubejs:raw_gold_nugget').heated()
    event.recipes.create.filling('immersive_aircraft:enhanced_propeller', [Fluid.of('kubejs:molten_gold', 360), 'create:propeller'])

    // silver
    event.remove({ id: 'molten_metals:emptying/molten_silver_from_metal_mold' });
    event.remove({ id: 'molten_metals:emptying/molten_silver_from_ceramic_mold' });
    event.remove({ id: 'molten_metals:filling/silver_filled_metal_mold' });
    event.remove({ id: 'molten_metals:filling/silver_filled_ceramic_mold' });
    event.remove({ id: 'molten_metals:mixing/molten_silver_from_ingot' });
    event.remove({ id: 'molten_metals:mixing/molten_silver_from_nugget' });
    event.remove({ id: "create_enchantment_industry:mixing/hyper_experience" });

    event.recipes.create.mixing(Fluid.of('kubejs:molten_silver', 90), 'kubejs:silver_ingot').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_silver', 10), 'kubejs:silver_nugget').heated()
    event.recipes.create.mixing(Fluid.of('create_enchantment_industry:hyper_experience', 10), [Fluid.of('kubejs:molten_silver', 30), Fluid.of('create_enchantment_industry:experience', 100), '4x kubejs:lapis_lazuli_shard']).superheated()

    // electrum
    event.remove({ id: 'molten_metals:emptying/molten_electrum_from_metal_mold' });
    event.remove({ id: 'molten_metals:emptying/molten_electrum_from_ceramic_mold' });
    event.remove({ id: 'molten_metals:filling/electrum_filled_metal_mold' });
    event.remove({ id: 'molten_metals:filling/electrum_filled_ceramic_mold' });
    event.remove({ id: 'molten_metals:mixing/molten_electrum_from_ingot' });
    event.remove({ id: 'molten_metals:mixing/molten_electrum_from_nugget' });
    event.remove({ id: "createdieselgenerators:distillation/molten_electrum" });

    event.recipes.create.mixing(Fluid.of('kubejs:molten_electrum', 90), 'createaddition:electrum_ingot').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_electrum', 10), 'createaddition:electrum_nugget').heated()
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
            "fluid": "kubejs:molten_electrum",
            "amount": 90
            }
        ],
        "heatRequirement": "superheated",
        "processingTime": 100,
        "results": [
            {
            "fluid": "kubejs:molten_gold",
            "amount": 40
            },
            {
            "fluid": "kubejs:molten_silver",
            "amount": 40
            }
        ]
    })

    // brass
    event.remove({ id: 'molten_metals:emptying/molten_brass_from_metal_mold' });
    event.remove({ id: 'molten_metals:emptying/molten_brass_from_ceramic_mold' });
    event.remove({ id: 'molten_metals:filling/brass_filled_metal_mold' });
    event.remove({ id: 'molten_metals:filling/brass_filled_ceramic_mold' });
    event.remove({ id: "molten_metals:mixing/molten_brass_from_alloying" });
    event.remove({ id: "molten_metals:mixing/molten_brass_from_block" });
    event.remove({ id: "molten_metals:mixing/molten_brass_from_ingot" });
    event.remove({ id: "molten_metals:mixing/molten_brass_from_nugget" });
    event.remove({ id: "createdieselgenerators:distillation/molten_brass" });
    
    event.recipes.create.mixing(Fluid.of('kubejs:molten_brass', 100), [Fluid.of('kubejs:molten_copper', 70), Fluid.of('kubejs:molten_zinc', 30)])
    event.recipes.create.mixing(Fluid.of('kubejs:molten_brass', 90), '#molten_metals:meltable_brass').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_brass', 810), 'create:brass_block').heated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_brass', 10), 'create:brass_nugget').heated()
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
            "fluid": "kubejs:molten_brass",
            "amount": 90
            }
        ],
        "heatRequirement": "heated",
        "processingTime": 100,
        "results": [
            {
            "fluid": "kubejs:molten_copper",
            "amount": 40
            },
            {
            "fluid": "kubejs:molten_zinc",
            "amount": 40
            }
        ]
    })
    
    // netherite
    event.remove({ id: 'molten_metals:emptying/molten_netherite_from_metal_mold' });
    event.remove({ id: 'molten_metals:filling/netherite_filled_metal_mold' });
    event.remove({ id: 'molten_metals:mixing/molten_netherite_from_alloying' });
    event.remove({ id: 'molten_metals:mixing/molten_netherite_from_block' });
    event.remove({ id: 'molten_metals:mixing/molten_netherite_from_ingot' });
    event.remove({ id: 'protection_pixel:hellsnakeasloot' });
    event.remove({ id: 'protection_pixel:lancerasloot' });
    event.remove({ id: 'protection_pixel:closedasloot' });
    event.remove({ id: 'protection_pixel:hunterasloot' });
    event.remove({ id: 'protection_pixel:bloodprisonerasloot' });
    event.remove({ id: 'protection_pixel:hammerasloot' });
    event.remove({ id: 'protection_pixel:breakerasloot' });
    event.remove({ id: 'protection_pixel:workerasloot' });
    event.remove({ id: 'protection_pixel:slingshotasloot' });
    event.remove({ id: 'protection_pixel:magneticasloot' });
    event.remove({ id: 'protection_pixel:plagueasloot' });
    event.remove({ id: 'protection_pixel:prismasloot' });
    event.remove({ id: 'protection_pixel:pioneerasloot' });
    event.remove({ id: 'protection_pixel:buoyancyasloot' });
    event.remove({ id: 'protection_pixel:anchorpointasloot' });
    
    event.recipes.create.emptying([Fluid.of(`kubejs:molten_netherite`, 90), 'molten_metals:ingot_mold'], 
        `molten_metals:molten_netherite_ingot_mold`
    )
    event.recipes.create.filling(`molten_metals:molten_netherite_ingot_mold`, 
        [Fluid.of(`kubejs:molten_netherite`, 90), 'molten_metals:ingot_mold']
    )
    event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 90), ['3x minecraft:netherite_scrap', Fluid.of('kubejs:molten_gold', 360)]).superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 810), 'minecraft:netherite_block').superheated()
    event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 90), '#molten_metals:meltable_netherite_ingots').superheated()
    
    let armor = [
        ['protection_pixel:hellsnakeas_chestplate', 'protection_pixel:hellsnake_chestplate', 'protection_pixel:incompletehellsnake', 2],
        ['protection_pixel:lanceras_helmet', 'protection_pixel:lancer_helmet', 'protection_pixel:incompletelancer', 1],
        ['protection_pixel:closedas_helmet', 'protection_pixel:closed_helmet', 'protection_pixel:incompleteclosed', 1],
        ['protection_pixel:hunteras_helmet', 'protection_pixel:hunter_helmet', 'protection_pixel:incompletehunter', 1],
        ['protection_pixel:bloodprisoneras_helmet', 'protection_pixel:bloodprisoner_helmet', 'protection_pixel:incompletebloodprisoner', 1],
        ['protection_pixel:hammeras_helmet', 'protection_pixel:hammer_helmet', 'protection_pixel:incompletehammer', 1],
        ['protection_pixel:breakeras_chestplate', 'protection_pixel:breaker_chestplate', 'protection_pixel:incompletebreaker', 2],
        ['protection_pixel:workerhornetas_chestplate', 'protection_pixel:workerhornet_chestplate', 'protection_pixel:incompleteworkerhornet', 2],
        ['protection_pixel:slingshotas_leggings', 'protection_pixel:slingshot_leggings', 'protection_pixel:incompleteslingshot', 2],
        ['protection_pixel:magneticstormas_chestplate', 'protection_pixel:magneticstorm_chestplate', 'protection_pixel:incompletemagneticstorm', 2],
        ['protection_pixel:plagueas_helmet', 'protection_pixel:plague_helmet', 'protection_pixel:incompleteplague', 1],
        ['protection_pixel:wingsofprismas_chestplate', 'protection_pixel:wingsofprism_chestplate', 'protection_pixel:incompletewingsofprism', 2],
        ['protection_pixel:pioneeras_chestplate', 'protection_pixel:pioneer_chestplate', 'protection_pixel:incompletepioneer', 2],
        ['protection_pixel:buoyancyas_leggings', 'protection_pixel:buoyancy_leggings', 'protection_pixel:incompletebuoyancy', 2],
        ['protection_pixel:anchorpointas_leggings', 'protection_pixel:anchorpoint_leggings', 'protection_pixel:incompleteanchorpoint', 2],
    ]
    
    function sequencedAssemblyForNetherite(output, input, inter, loops) {
        event.recipes.create.sequenced_assembly(
            output, 
            input, 
            [ 
            event.recipes.createFilling(inter, [inter, Fluid.lava(250)]),
            event.recipes.createPressing(inter, inter),
            event.recipes.createDeploying(inter, [inter, 'create:sturdy_sheet']),
            event.recipes.createDeploying(inter, [inter, 'create:sturdy_sheet']),
            event.recipes.createDeploying(inter, [inter, 'create:precision_mechanism']),
            event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:molten_netherite', 45)]),
        ]).transitionalItem(inter).loops(loops)
    }
    
    for (let [output, input, inter, loops] of armor) {
        sequencedAssemblyForNetherite(output, input, inter, loops)
    }
    
    event.custom({
        "type":"createaddition:liquid_burning",
        "input": {
            "fluidTag": "kubejs:molten_metals",
            "amount": 1000
        },
        "burnTime": 19200
    })
});
