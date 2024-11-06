ServerEvents.recipes((event) => {
    // event.recipes.create
    // .mixing(Fluid.of("kubejs:dragon_blood", 360), [
    //   'minecraft:dragon_head',
    //   'tetra:dragon_sinew',
    //   '4x irons_spellbooks:dragonskin'
    // ])
    // .superheated();
    event.recipes.create.filling(Item.of('dragonmounts:dragon_egg', '{BlockEntityTag:{Breed:"dragonmounts:end"}}'), [
      Fluid.of("kubejs:dragon_blood", 250),
      'minecraft:dragon_egg',
    ]).id("survial_island:dragon_egg");

    event.recipes.create.filling('create:creative_motor', [
        Fluid.of("kubejs:dragon_blood", 250),
        'kubejs:creative_mechanism',
    ]);

    event.recipes.create.filling('kubejs:dragon_blood_bottle', [
      Fluid.of("kubejs:dragon_blood", 250),
      'minecraft:glass_bottle',
    ]);

    event.recipes.create.emptying(
      [Fluid.of("kubejs:dragon_blood", 250), "minecraft:glass_bottle"],
      "kubejs:dragon_blood_bottle"
    );

    event.shapeless('create:creative_motor', [
        "kubejs:dragon_blood_bottle",
        'kubejs:creative_mechanism',
    ]);

    event.shapeless("kubejs:dragon_blood_steel_ingot", "9x kubejs:dragon_blood_steel_nugget")
    event.shapeless("kubejs:dragon_blood_steel_block", "9x kubejs:dragon_blood_steel_ingot")

    event.shapeless("9x kubejs:dragon_blood_steel_ingot", "kubejs:dragon_blood_steel_block")
    event.shapeless("9x kubejs:dragon_blood_steel_nugget", "kubejs:dragon_blood_steel_ingot")
});