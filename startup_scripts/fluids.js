StartupEvents.registry('fluid', event => {
    event.create('blazing_blood')
      .displayName('Blaze blood')
      .stillTexture('kubejs:block/blaze/still')
      .flowingTexture('kubejs:block/blaze/flowing')
      .bucketColor(0xF6A617)
      .rarity('epic')
      .luminosity(15)
      .bucketItem.burnTime(2000)
      .rarity('epic');

    event.create('iron_ion_solution')
    .thinTexture(0xFFFF66)
    .bucketColor(0xFFFF66)

    event.create('copper_ion_solution')
    .thinTexture(0x1015FF)
    .bucketColor(0x1015FF)

    event.create('gold_ion_solution')
    .thinTexture(0xFFD700)
    .bucketColor(0xFFD700)

    event.create('zinc_ion_solution')
    .thinTexture(0xFFFFFF)
    .bucketColor(0xFFFFFF)

    event.create('cobalt_ion_solution')
    .thinTexture(0xFFB6C1)
    .bucketColor(0xFFB6C1)

    event.create('molten_amethyst')
    .displayName('Molten Amethyst')
    .stillTexture('kubejs:block/amethyst/still')
    .flowingTexture('kubejs:block/amethyst/flowing')
    .bucketColor(0x604590)
    .luminosity(15)

    event.create('molten_diamond')
    .displayName('Molten Diamond')
    .stillTexture('kubejs:block/diamond/still')
    .flowingTexture('kubejs:block/diamond/flowing')
    .bucketColor(0x5FD1C3)
    .luminosity(15)

    event.create('molten_emerald')
    .displayName('Molten Emerald')
    .stillTexture('kubejs:block/emerald/still')
    .flowingTexture('kubejs:block/emerald/flowing')
    .bucketColor(0x1CC24E)
    .luminosity(15)

    event.create('molten_metals:molten_cobalt')
    .displayName('Molten Cobalt')
    .stillTexture('kubejs:block/cobalt/still')
    .flowingTexture('kubejs:block/cobalt/flowing')
    .bucketColor(0x387AC8)
    .luminosity(15)

    function createMoltenMetal(name, color) {
      let capName = name.charAt(0).toUpperCase() + name.slice(1)  
      let moltenMetal = event.create(`molten_${name}`)
        .displayName(`Molten ${capName}`)
        .stillTexture(`kubejs:block/${name}/molten_${name}`)
        .flowingTexture(`kubejs:block/${name}/molten_${name}_flowing`)
        .bucketColor(color)
        .luminosity(15);
      moltenMetal.bucketItem.texture(`kubejs:item/molten_${name}_bucket`)
    }

    let moltenMetals = [
      ['iron', 0x9C9C9C],
      ['copper', 0xFF6600],
      ['gold', 0xFFD700],
      ['zinc', 0xFFFFFF],
      ['brass', 0xD4A017],
      ['netherite', 0x4D4D4D],
      ['silver', 0xC0C0C0],
      ['electrum', 0xFFD700],
    ]

    for (let metal of moltenMetals) {
      createMoltenMetal(metal[0], metal[1])
    }

    event.create('dragon_blood')
    .thinTexture(0xe02fc9)
    .bucketItem.rarity("epic")

    event.create('naphtha')
    .thinTexture(0x6F2404)
    .bucketColor(0x6F2404)

    event.create('heavy_oil')
    .thinTexture(0x010101)
    .bucketColor(0x010101)

    event.create('sulfur_gas')
    .thinTexture(0xffffe6)
    .bucketColor(0xffffe6)

    event.create('flow_gunpowder')
    .thickTexture(0xA19D9F)
    .displayName('Flowing Gunpowder')
    .noBucket()
    .noBlock();
})