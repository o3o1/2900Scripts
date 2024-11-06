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

	e.hide('molten_metals:molten_iron');
	e.hide('molten_metals:molten_copper');
	e.hide('molten_metals:molten_gold');
	e.hide('molten_metals:molten_zinc');
	e.hide('molten_metals:molten_brass');
	e.hide('molten_metals:molten_netherite');
	e.hide('molten_metals:molten_silver');
	e.hide('molten_metals:molten_electrum');

	e.hide('molten_metals:molten_iron_bucket');
	e.hide('molten_metals:molten_copper_bucket');
	e.hide('molten_metals:molten_gold_bucket');
	e.hide('molten_metals:molten_zinc_bucket');
	e.hide('molten_metals:molten_brass_bucket');
	e.hide('molten_metals:molten_netherite_bucket');
	e.hide('molten_metals:molten_silver_bucket');
	e.hide('molten_metals:molten_electrum_bucket');
})

JEIEvents.addItems(e => {
	e.add("minecraft:bundle")
	e.add("sophisticatedbackpacks:backpack")

	e.add(Item.of('tetra:modular_double', '{Damage:0,"double/basic_hammer_left_material":"basic_hammer/stone","double/basic_hammer_right_material":"basic_hammer/stone","double/basic_handle_material":"basic_handle/stick","double/handle":"double/basic_handle","double/head_left":"double/basic_hammer_left","double/head_right":"double/basic_hammer_right"}'))
})