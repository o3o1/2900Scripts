ItemEvents.tooltip(event => {
    event.addAdvanced('alexscaves:remote_detonator', (item, advanced, text) => {
        text.add(1, Text.of('宁宁的秘密武器').italic(true).blue());
    })

    event.add("kubejs:creative_mechanism", '请查看任务书：混沌装配')
    event.add("alexscaves:nuclear_bomb", '使用起爆器引爆')

    event.add("kubejs:rough_diamond", '使用砂纸打磨成钻石')
    event.add("kubejs:rough_lazurite", '使用砂纸打磨成青金石')

    event.add("minecraft:glowstone", '可以在黑石尖塔上方找到')
    event.add("minecraft:glowstone_dust", '可以使用注液配方制作')
    event.add("minecraft:crimson_nylium", '可以在猪灵堡垒找到')

    event.add('alexscaves:fissile_core', '讨伐核能苦力怕获得')
    event.add('sophisticatedbackpacks:backpack', '怪物有概率掉落')
    event.add('kubejs:lapis_lazuli_shard', '僵尸猪灵概率掉落')
    event.add('minecraft:ghast_tear', '可以通过猪灵交易获得')

    //event.add('refinedstorage:external_storage', '存在严重BUG，等待mod作者修复')
    event.add('create:tree_fertilizer', '存在严重BUG，等待mod作者修复')
})