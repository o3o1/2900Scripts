EntityEvents.death(event=>{
    if (event.entity.type == 'minecraft:ender_dragon') {
        const { level } = event;

        for (const onlinePlayer of level.getPlayers()) {
            if(!onlinePlayer.persistentData["Dragon_Lang"])
            {
                onlinePlayer.tell(Text.of("\u00a7kListen\u00a7r").color("dark_purple"));
                onlinePlayer.tell(Text.of("\u00a7kMy blood forge my eggs\u00a7r").color("dark_purple"));
                onlinePlayer.tell(Text.of("\u00a7kMy soul is eternal\u00a7r").color("dark_purple"));
                onlinePlayer.tell(Text.of("\u00a7kMy inheritance is destined\u00a7r").color("dark_purple"));
                onlinePlayer.tell(Text.of("\u00a7kEternal\u00a7r").color("dark_purple"));
                onlinePlayer.tell(Text.of("\u00a7kEternal\u00a7r").color("dark_purple"));
                onlinePlayer.tell(Text.of("\u00a7kEternal\u00a7r").color("dark_purple"));
                onlinePlayer.tell(Text.of("— 末影龙").red());
            }else
            {
                let poem = [
                    "静听",
                    "吾之神血浇筑吾卵",
                    "吾之神魂永恒不灭",
                    "吾之神承命中注定",
                    "永恒",
                    "永恒",
                    "永恒",
                ]
                for (let line of poem) {
                    let modified = "";
                    for (let char of line) {
                        let r = Math.random() < 0.65;
                        if (r) {
                            modified += '\u00a7k';
                        }
                        modified += char;
                        if (r) {
                            modified += '\u00a7r';
                        }
                    }
                    onlinePlayer.tell(Text.of(modified).color("dark_purple"));
                }
                onlinePlayer.tell(Text.of("— 末影龙").red()); 
            }
        }
    }
})