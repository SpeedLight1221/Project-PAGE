
// let BNav = document.getElementById("BNav");

// let SNAv = document.getElementById("SideNav");

// let SB = SNAv.children;

// let BCheck = false;
// let SCheck = false;



// function Show() {
//     SNAv.style.display = "Flex";
//     BCheck = true;
//     SNAv.style.width = SNAv.style.width;

// }

// function Bleft() {
//     BCheck = false;
//     Hide();
// }


// function SEnter() {
//     SCheck = true;
//     console.log("x");

// }
// function Sleft() {
//     SCheck = false;
//     console.log("Y");
//     Hide();
// }


// function Hide() {
//     if (BCheck == true) {
//         return;
//     }

//     if (SCheck == true) {

//         return;
//     }

//     SNAv.style.display = "None";
// }

// BNav.addEventListener("mouseenter", Show);
// BNav.addEventListener("mouseleave", Bleft);

// SNAv.addEventListener("mouseenter", SEnter);
// SNAv.addEventListener("mouseleave", Sleft);

// for (let i = 0; i < SB.length; i++) {
//     SB[i].addEventListener("mouseenter", SEnter);
//     SB[i].addEventListener("mouseleave", Sleft);
// }


const TagValues ={
    'minecraft:is_armor': "minecraft:iron_chestplate",
    'minecraft:arrow': "minecraft:arrow",
    'minecraft:banners': "minecraft:white_banner",
    'minecraft:boats': "minecraft:oak_boat",
    
    'minecraft:stone_crafting_materials':"minecraft:cobblestone"

};

console.log(TagValues['minecraft:is_armor']);