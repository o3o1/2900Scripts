ServerEvents.recipes((event) => {
    event.remove({ id: "sophisticatedbackpacks:iron_backpack" });
    event.remove({ id: "sophisticatedbackpacks:upgrade_base" });
    event.recipes.create.cutting('sophisticatedbackpacks:upgrade_base', 'minecraft:leather');

    event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_1_from_starter" });
    event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_1" });
    event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_2" });
    event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_3" });
    event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_4" });

    event.recipes.create.compacting('sophisticatedbackpacks:stack_upgrade_tier_1', ["sophisticatedbackpacks:upgrade_base", Item.of('#forge:storage_blocks/iron', 9)]);
    event.recipes.create.compacting('sophisticatedbackpacks:stack_upgrade_tier_2', ["sophisticatedbackpacks:stack_upgrade_tier_1", Item.of('#forge:storage_blocks/gold', 9)]);
    event.recipes.create.compacting('sophisticatedbackpacks:stack_upgrade_tier_3', ["sophisticatedbackpacks:stack_upgrade_tier_2", Item.of('#forge:storage_blocks/diamond', 9)]).heated();
    event.recipes.create.compacting('sophisticatedbackpacks:stack_upgrade_tier_4', ["sophisticatedbackpacks:stack_upgrade_tier_3", Item.of('#forge:storage_blocks/netherite', 9)]).superheated();

    event.remove({ id: 'sophisticatedbackpacks:crafting_upgrade' });
    event.recipes.create.mixing('sophisticatedbackpacks:crafting_upgrade', ["sophisticatedbackpacks:upgrade_base", Item.of('minecraft:crafting_table')]);

    event.remove({ id: 'sophisticatedbackpacks:pickup_upgrade' });
    event.remove({ id: 'sophisticatedbackpacks:advanced_pickup_upgrade' });
    event.recipes.create.mixing('sophisticatedbackpacks:pickup_upgrade', ["sophisticatedbackpacks:upgrade_base", Item.of('minecraft:redstone', 9)]);
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_pickup_upgrade', ['sophisticatedbackpacks:pickup_upgrade', 'create:precision_mechanism'])

    event.remove({ id: 'sophisticatedbackpacks:filter_upgrade' });
    event.remove({ id: 'sophisticatedbackpacks:advanced_filter_upgrade' });
    event.recipes.create.mixing('sophisticatedbackpacks:filter_upgrade', ["sophisticatedbackpacks:upgrade_base", Item.of('minecraft:string', 9)]);
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_filter_upgrade', ['sophisticatedbackpacks:filter_upgrade', 'create:precision_mechanism'])

    event.remove({ id: 'sophisticatedbackpacks:magnet_upgrade' });
    event.remove({ id: 'sophisticatedbackpacks:advanced_magnet_upgrade' });
    event.recipes.create.mixing('sophisticatedbackpacks:magnet_upgrade', ["sophisticatedbackpacks:upgrade_base", Item.of('alloyed:steel_ingot', 9)]);
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_magnet_upgrade', ['sophisticatedbackpacks:magnet_upgrade', 'create:precision_mechanism'])

    event.remove({ id: 'sophisticatedbackpacks:feeding_upgrade' });
    event.remove({ id: 'sophisticatedbackpacks:advanced_feeding_upgrade' });
    event.recipes.create.mixing('sophisticatedbackpacks:feeding_upgrade', ["sophisticatedbackpacks:upgrade_base", Item.of("minecraft:golden_apple", 2), Item.of("#forge:ender_pearls", 2)]);
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_feeding_upgrade', ['sophisticatedbackpacks:feeding_upgrade', 'create:precision_mechanism'])

    event.remove({ id: 'sophisticatedbackpacks:compacting_upgrade' });
    event.remove({ id: 'sophisticatedbackpacks:advanced_compacting_upgrade' });
    event.recipes.create.mixing('sophisticatedbackpacks:compacting_upgrade', ["sophisticatedbackpacks:upgrade_base", Item.of("minecraft:piston", 9)]);
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_compacting_upgrade', ['sophisticatedbackpacks:compacting_upgrade', 'create:precision_mechanism'])

    event.remove({ id: 'sophisticatedbackpacks:void_upgrade' });
    event.remove({ id: 'sophisticatedbackpacks:advanced_void_upgrade' });
    event.recipes.create.mixing('sophisticatedbackpacks:void_upgrade', ["sophisticatedbackpacks:upgrade_base", Item.of("#forge:obsidian", 9)]);
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_void_upgrade', ['sophisticatedbackpacks:void_upgrade', 'create:precision_mechanism'])

    event.remove({ id: 'sophisticatedbackpacks:restock_upgrade' });
    event.remove({ id: 'sophisticatedbackpacks:advanced_restock_upgrade' });
    event.recipes.create.mixing('sophisticatedbackpacks:restock_upgrade', ["sophisticatedbackpacks:upgrade_base", Item.of('#forge:plates/gold', 2), Item.of('create:electron_tube', 2)]);
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_restock_upgrade', ['sophisticatedbackpacks:restock_upgrade', 'create:precision_mechanism'])

    event.remove({ id: 'sophisticatedbackpacks:refill_upgrade' });
    event.remove({ id: 'sophisticatedbackpacks:advanced_refill_upgrade' });
    event.recipes.create.mixing('sophisticatedbackpacks:refill_upgrade', ["sophisticatedbackpacks:upgrade_base", Item.of('#forge:ingots/brass', 2), Item.of('create:electron_tube', 2)]);
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_refill_upgrade', ['sophisticatedbackpacks:refill_upgrade', 'create:precision_mechanism'])

    event.remove({ id: 'sophisticatedbackpacks:deposit_upgrade' });
    event.remove({ id: 'sophisticatedbackpacks:advanced_deposit_upgrade' });
    event.recipes.create.mixing('sophisticatedbackpacks:deposit_upgrade', ["sophisticatedbackpacks:upgrade_base", '4x create:smart_chute']);
    event.recipes.create.deploying('sophisticatedbackpacks:advanced_deposit_upgrade', ['sophisticatedbackpacks:deposit_upgrade', 'create:precision_mechanism'])
})