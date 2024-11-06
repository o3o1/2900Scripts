ServerEvents.recipes((event) => {
  event.remove({ id: "createaddition:compacting/seed_oil" });
  event.remove({ id: "createaddition:mixing/bioethanol" });
  event.remove({ id: "createdieselgenerators:mixing/biodiesel" });
  event.remove({ id: "createdieselgenerators:basin_fermenting/golden_carrot" });
  event.remove({ id: "createdieselgenerators:basin_fermenting/golden_apple" });

  event.remove({ id: "createdieselgenerators:crafting/asphalt_block" });
  event.remove({ id: "createdieselgenerators:mixing/asphalt_block" });

  event.recipes.create.compacting(
    [
      "createdieselgenerators:asphalt_block",
      Fluid.of("createdieselgenerators:diesel", 190),
    ],
    [Fluid.of("kubejs:heavy_oil", 1000)]
  );
});
