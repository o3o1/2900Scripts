ServerEvents.chestLootTables((event) => {
    event.modify(`minecraft:abandoned_mineshaft`, (table) => {
        table.addPool((pool) => {
            pool.rolls = 1;
            pool.randomChance(0.06);
            pool.addItem(Item.of('waystones:warp_scroll'), 3, 1);
        });
    });
    event.modify(`hopo:portal/better_ruined_portal`, (table) => {
        table.addPool((pool) => {
            pool.rolls = 5;
            pool.randomChance(0.7);
            pool.addItem(Item.of('minecraft:splash_potion', '{Potion:"minecraft:weakness"}'), 1, 1);
        });
    });
});