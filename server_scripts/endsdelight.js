ServerEvents.recipes((event) => {
    event.remove('ends_delight:non_hatchable_dragon_egg');
    event.remove({id:'ends_delight:crack_non_hatchable_dragon_egg'});

    event.recipes.create.cutting(['2x ends_delight:half_dragon_egg_shell', 'ends_delight:liquid_dragon_egg'], "minecraft:dragon_egg")
    event.recipes.create.cutting(['2x ends_delight:dragon_tooth'], "minecraft:dragon_head")
})