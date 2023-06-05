

let rec = 'data/furnace.json'


let grid = document.getElementById("grid");






function test() {
    let patter;
    let keyV;

    let slot = new Array();

    let height;

    let KeyResource = new Array();

    fetch(rec, { mode: "no-cors" })
        .then(response => response.json())
        .then(json => patter = json.pattern)
        .then(
            patter => {


                let i = 0;
                patter.forEach(element => {
                    slot.push(element[0]);
                    slot.push(element[1]);
                    slot.push(element[2]);

                });








            }


        )
        .then(fetch(rec, { mode: "no-cors" })
            .then(response => response.json())
            .then(json => keyV = json.key)
            .then(keyV => {
                let filtred = [...new Set(slot)];


                for (let i = 0; i < 9; i++) {
                    let e;
                    let x;
                    e = keyV[slot[i]]



                    if (e == undefined) {


                    }
                    else {
                        x = e["item"];

                        if (x == undefined) {
                            x = e["tag"];
                            const TagValues = {
                                'minecraft:is_armor': "minecraft:iron_chestplate",
                                'minecraft:arrow': "minecraft:arrow",
                                'minecraft:banners': "minecraft:white_banner",
                                'minecraft:boats': "minecraft:oak_boat",
                                'minecraft:bookshelf_books': "minecraft:book",
                                'minecraft:chainmail_tier': "minecraft:chainmail_helmet",
                                'minecraft:chest_boat': "minecraft:oak_chest_boat",
                                'minecraft:coals': "minecraft:coal",
                                'minecraft:is_cooked': "minecraft:cooked_porkchop",
                                'minecraft:crimson_stems': "minecraft:crimson_stem",
                                'minecraft:diamond_tier': "minecraft:diamond_helmet",
                                'minecraft:door': "minecraft:oak_door",
                                'minecraft:is_fish': "minecraft:cooked_cod",
                                'minecraft:is_food': "minecraft:apple",
                                'minecraft:golden_tier': "minecraft:golden_helmet",
                                'minecraft:hanging_sign': "minecraft:oak_hanging_sign",
                                'minecraft:is_axe': "minecraft:diamond_axe",
                                'minecraft:is_hoe': "minecraft:diamond_hoe",
                                'minecraft:horse_armor': "minecraft:diamond_horse_armor",
                                'minecraft:iron_tier': "minecraft:iron_helmet",
                                'minecraft:leather_tier': "minecraft:leather_helmet",
                                'minecraft:logs': 'minecraft:oak_log',
                                'minecraft:logs_that_burn': "minecraft:oak_log",
                                'minecraft:mangrove_logs': "minecraft:mangrove_log",
                                'minecraft:is_meat': "minecraft:porkchop",
                                'minecraft:is_minecart': "minecraft:minecart",
                                'minecraft:music_disc': "minecraft:music_disc_cat",
                                'minecraft:netherite_tier': "minecraft:netherite_helmet",
                                'minecraft:is_pickaxe': "minecraft:diamond_pickaxe",
                                'minecraft:planks': "minecraft:oak_planks",
                                'minecraft:sand': "minecraft:sand",
                                'minecraft:is_shovel': "minecraft:diamond_shovel",
                                'minecraft:sign': "minecraft:oak_sign",
                                'minecraft:soul_fire_base_blocks': "minecraft:souů_soil",
                                'minecraft:spawn_egg': "minecraft:zombie_spawn_egg",
                                'minecraft:stone_bricks': "minecraft:stone_bricks",
                                'minecraft:stone_crafting_materials': "minecraft:cobblestone",
                                'minecraft:stone_tier': "minecraft:stone_pickaxe",
                                'minecraft:stone_tool_materials': "minecraft:cobblestone",
                                'minecraft:is_sword': "minecraft:diamond_sword",
                                'minecraft:is_tool': "minecraft:diamond_pickaxe",
                                'minecraft:vibration_damper': "minecraft:white_wool",
                                'minecraft:warped_stems': "minecraft:warped_stem",
                                'minecraft:wooden_slabs': "minecraft:oak_slab",
                                'minecraft:wooden_tier': "minecraft:wooden_pickaxe",
                                'minecraft:wool': "minecraft:white_wool",



                            };
                            x = TagValues[x];
                        }



                    }
                    console.table(x);
                    let ar;
                    if (x != undefined) {
                        ar = x.split(":");
                        fetch(`img/item/${ar[1]}.png`)
                            .then(response => {
                                if (response.ok) {
                                    document.getElementById(String(i)).src = `img/item/${ar[1]}.png`
                                }
                                else if (response.status === 404) {
                                    document.getElementById(String(i)).src = `img/item/${ar[1]}_front.png`

                                }

                                document.getElementById(String(i)).title = ar[1];
                            });
                    }






                }

            }
            ));










}

// the code ca nread it, now implement it with dynamic keys system