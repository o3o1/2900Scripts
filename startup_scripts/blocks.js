StartupEvents.registry('block', event => {
    event.create("rough_diamond_block") // Create a new block
    .displayName("Rough Diamond Block") // Set a custom name
    .hardness(16.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_diamond_tool') // the tool tier must be at least iron
    .mapColor(0x70)
    .soundType('amethyst')

    event.create("dragon_blood_steel_block")
    .displayName("Dragon Blood Steel Block")
    .hardness(20.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_netherite_tool') // the tool tier must be at least iron
    .mapColor(0x70)
    .soundType('copper')
    .item(item=>item.fireResistant(true).rarity("epic"));

    // event.create('molten_metals:molten_cobalt_ceramic_ingot_mold')
    // .hardness(0.0)
    // .requiresTool(false)
    // .soundType('decorated_pot')
    // .opaque(false)
    // .fullBlock(false)
    // .noCollision()
    // .box(5, 0, 3, 11, 4, 13)
    // .property(BlockProperties.HORIZONTAL_FACING)
    // .item(item=>item.maxStackSize(1));
    event.create('molten_metals:molten_cobalt_ingot_mold') 
    .hardness(0.0)
    .requiresTool(false)
    .soundType('copper')
    .opaque(false)
    .fullBlock(false)
    .noCollision()
    .box(5, 0, 3, 11, 4, 13)
    .property(BlockProperties.HORIZONTAL_FACING)
    .item(item=>item.maxStackSize(1));

    event.create("cobalt_block") // Create a new block
    .displayName("Cobalt Block") // Set a custom name
    .hardness(3.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_diamond_tool') // the tool tier must be at least iron
    .mapColor(0x70)
    .soundType('copper')
})