StartupEvents.registry("item", (event) => {
    event.create("steel_bullet_core");
    event.create("unprocessed_brass_shell");
    event.create("brass_shell_with_acid");
    event.create("brass_shell");

    event.create("incomplete_ammo_slap").texture('kubejs:item/brass_shell');
    event.create("incomplete_ammo_12g").texture('kubejs:item/brass_shell');
    event.create("incomplete_ammo_rbapb").texture('kubejs:item/brass_shell');

})