JEIEvents.removeRecipes(e => {
	e.remove('create:spout_filling', 'survial_island:dragon_egg');
})

JEIEvents.hideItems(e => {
	e.hide('createbigcannons:basin_foundry_lid');
	
	e.hide('immersive_aircraft:sail');
	e.hide('immersive_aircraft:propeller');
	e.hide('immersive_aircraft:industrial_gears');

	e.hide('createaddition:bioethanol_bucket');
	e.hide('createaddition:bioethanol');
	e.hide('createdieselgenerators:biodiesel_bucket');
	e.hide('createdieselgenerators:biodiesel');

	e.hide('balancedflight:ascended_flight_ring');

	e.hide('tacz:gun_smith_table');
})

JEIEvents.addItems(e => {
	e.add("minecraft:bundle")
	e.add("sophisticatedbackpacks:backpack")

	e.add(Item.of('tetra:modular_double', '{Damage:0,"double/basic_hammer_left_material":"basic_hammer/stone","double/basic_hammer_right_material":"basic_hammer/stone","double/basic_handle_material":"basic_handle/stick","double/handle":"double/basic_handle","double/head_left":"double/basic_hammer_left","double/head_right":"double/basic_hammer_right"}'))
})