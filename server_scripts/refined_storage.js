ServerEvents.recipes((event) => {
  //event.remove({ id: "refinedstorage:external_storage" });
  event.remove({ id: "refinedstorage:destruction_core" });
  event.recipes.create.filling("refinedstorage:destruction_core", [
    Fluid.of("kubejs:blazing_blood", 200),
    "refinedstorage:basic_processor",
  ]);

  event.remove({ id: "refinedstorage:construction_core" });
  event.recipes.create.filling("refinedstorage:construction_core", [
    Fluid.of("kubejs:molten_diamond", 200),
    "refinedstorage:basic_processor",
  ]);

  event.remove({ id: "refinedstorage:processor_binding" });
  event.remove({ id: "refinedstorage:raw_basic_processor" });
  event.remove({ id: "refinedstorage:raw_improved_processor" });
  event.remove({ id: "refinedstorage:raw_advanced_processor" });

  event.recipes.create.filling("refinedstorage:raw_basic_processor", [
    Fluid.of("kubejs:molten_iron", 135),
    "#forge:silicon",
  ]);
  event.shapeless("refinedstorage:raw_basic_processor", ["#forge:silicon", "3x minecraft:iron_ingot"])
  
  event.recipes.create.filling("refinedstorage:raw_improved_processor", [
    Fluid.of("kubejs:molten_gold", 135),
    "#forge:silicon",
  ]);
  event.shapeless("refinedstorage:raw_improved_processor", ["#forge:silicon", "3x minecraft:gold_ingot"])

  event.recipes.create.filling("refinedstorage:raw_advanced_processor", [
    Fluid.of("kubejs:molten_diamond", 135),
    "#forge:silicon",
  ]);
  event.shapeless("refinedstorage:raw_advanced_processor", ["#forge:silicon", "3x minecraft:diamond"])

  event.remove({ id: "refinedstorage:64k_fluid_storage_disk" });
  event.remove({ id: "refinedstorage:256k_fluid_storage_disk" });
  event.remove({ id: "refinedstorage:1024k_fluid_storage_disk" });
  event.remove({ id: "refinedstorage:1k_storage_disk" });
  event.remove({ id: "refinedstorage:4k_storage_disk" });
  event.remove({ id: "refinedstorage:16k_storage_disk" });
  event.remove({ id: "refinedstorage:64k_storage_disk" });

});
