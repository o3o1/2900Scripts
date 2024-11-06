// ServerEvents.recipes((event) => {
//   //event.remove({type:"createoreexcavation:vein"});
//   event.remove({ id: "createoreexcavation:ore_vein_type/coal" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/copper" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/diamond" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/emerald" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/glowstone" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/gold" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/hardened_diamond" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/iron" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/lapis" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/nether_gold" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/netherite" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/quartz" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/redstone" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/water" });
//   event.remove({ id: "createoreexcavation:ore_vein_type/zinc" });

//   event.remove({ id: "createoreexcavation:drilling/coal" });
//   event.remove({ id: "createoreexcavation:drilling/copper" });
//   event.remove({ id: "createoreexcavation:drilling/diamond" });
//   event.remove({ id: "createoreexcavation:drilling/emerald" });
//   event.remove({ id: "createoreexcavation:drilling/glowstone" });
//   event.remove({ id: "createoreexcavation:drilling/gold" });
//   event.remove({ id: "createoreexcavation:drilling/hardened_diamond" });
//   event.remove({ id: "createoreexcavation:drilling/iron" });
//   event.remove({ id: "createoreexcavation:drilling/lapis" });
//   event.remove({ id: "createoreexcavation:drilling/nether_gold" });
//   event.remove({ id: "createoreexcavation:drilling/netherite" });
//   event.remove({ id: "createoreexcavation:drilling/quartz" });
//   event.remove({ id: "createoreexcavation:drilling/redstone" });
//   event.remove({ id: "createoreexcavation:drilling/water" });
//   event.remove({ id: "createoreexcavation:drilling/zinc" });

//   event.recipes.createoreexcavation
//     .vein(
//       '{"translate":"block.minecraft.cobblestone"}',
//       "minecraft:cobblestone"
//     )
//     .placement(2, 1, 575671)
//     .id("kubejs:cobblestone_vein");

//   event.recipes.createoreexcavation
//     .drilling("7x minecraft:cobblestone", "kubejs:cobblestone_vein", 8) // extraction time in ticks at 32 RPM
//     .id("kubejs:cobblestone_drilling")
//     .stress(6)
//     .drill("createoreexcavation:drill");
// });
