ServerEvents.recipes((event) => {
  event.remove({ id: "create_wizardry:common_ink_recipe" });
  event.remove({ id: "create_wizardry:common_ink_mana_recipe" });
  event.remove({ id: "create_wizardry:uncommon_ink_recipe" });
  event.remove({ id: "create_wizardry:rare_ink_recipe" });
  event.remove({ id: "create_wizardry:create_ec_rare_ink_recipe" });
  event.remove({ id: "create_wizardry:epic_ink_recipe" });
  event.remove({ id: "create_wizardry:create_ec_epic_ink_recipe" });
  event.remove({ id: "create_wizardry:legendary_ink_recipe" });
  event.remove({ id: "create_wizardry:create_ec_legendary_ink_recipe" });

  event.recipes.create.mixing(Fluid.of("create_wizardry:mana", 500), [
    "lapis_lazuli",
    '3x irons_spellbooks:arcane_essence',
    Fluid.of("kubejs:molten_zinc", 500),
    Fluid.of("create_enchantment_industry:experience", 12),
  ]);

  event.remove({id: 'irons_spellbooks:legendary_ink'})
});
