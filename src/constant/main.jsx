// VAPES

import black_ice from "../../public/vapes/black_ice/black_ice.webp";
import black_ice_back from "../../public/vapes/black_ice/black_back.webp";
import black_ice_side from "../../public/vapes/black_ice/black_side.webp";

import ice_mint from "../../public/vapes/ice_mint/ice_mint.webp";
import ice_mint_back from "../../public/vapes/ice_mint/ice_mint_back.webp";
import ice_mint_side from "../../public/vapes/ice_mint/ice_mint_side.webp";

import pina_colada from "../../public/vapes/pina_colada/pina_colada.webp";
import pina_colada_back from "../../public/vapes/pina_colada/pina_back.webp";
import pina_colada_side from "../../public/vapes/pina_colada/pina_side.webp";

import sperrmint from "../../public/vapes/sperrmint/sperrmint.webp";
import sperrmint_back from "../../public/vapes/sperrmint/sperrmint_back.webp";
import sperrmint_side from "../../public/vapes/sperrmint/sperrmint_side.webp";

import perch_ice from "../../public/vapes/perch_ice/perch_ice.webp";
import perch_ice_back from "../../public/vapes/perch_ice/perch_ice_back.webp";
import perch_ice_side from "../../public/vapes/perch_ice/perch_ice_side.webp";

import garpe_ice from "../../public/vapes/garpe_ice/grape_ice.webp";
import garpe_ice_back from "../../public/vapes/garpe_ice/garpe_ice_back.webp";
import garpe_ice_side from "../../public/vapes/garpe_ice/garpe_ice_side.webp";

import sweet_mango from "../../public/vapes/sweet_mango/sweet_mango.webp";
import sweet_mango_back from "../../public/vapes/sweet_mango/sweet_mango_back.webp";
import sweet_mango_side from "../../public/vapes/sweet_mango/sweet_mago_side.webp";

import perch_mango from "../../public/vapes/perch_mango/perch_mango.webp";
import perch_mango_back from "../../public/vapes/perch_mango/perch_mango_back.webp";
import perch_mango_side from "../../public/vapes/perch_mango/perch_mango_side.webp";

import apple_mango from "../../public/vapes/apple_mango/apple_mango.webp";
import apple_mango_back from "../../public/vapes/apple_mango/apple_mango_back.webp";
import apple_mango_side from "../../public/vapes/apple_mango/apple_mango_side.webp";

import blueberry_ice from "../../public/vapes/blueberry_ice/blueberry_ice.webp";
import blueberry_ice_back from "../../public/vapes/blueberry_ice/blueberry_back.webp";
import blueberry_ice_side from "../../public/vapes/blueberry_ice/blueberry_side.webp";

import triple_berry from "../../public/vapes/triple_berry/triple_berry.webp";
import triple_berry_back from "../../public/vapes/triple_berry/triple_berry_back.webp";
import triple_berry_side from "../../public/vapes/triple_berry/triple_berry_side.webp";

import strawberry from "../../public/vapes/strawberry/strawberry_watermelon.webp";
import strawberry_back from "../../public/vapes/strawberry/strawberry_watermelon_back.webp";
import strawberry_side from "../../public/vapes/strawberry/strawberry_watermelon_side.webp";

import watermenlon_ice from "../../public/vapes/watermelon_ice/watermelon_ice.webp";
import watermenlon_ice_back from "../../public/vapes/watermelon_ice/watermelon_ice_back.webp";
import watermenlon_ice_side from "../../public/vapes/watermelon_ice/watermelon_ice_side.webp";

import tropical_fruits from "../../public/vapes/tropical_fruits/tropical_fruits.webp";
import tropical_fruits_back from "../../public/vapes/tropical_fruits/tropical_fruits_back.webp";
import tropical_fruits_side from "../../public/vapes/tropical_fruits/tropical_fruits_side.webp";

import strawberry_banana from "../../public/vapes/strawberry_banana/strawberry_banana.webp";
import strawberry_banana_back from "../../public/vapes/strawberry_banana/strawberry_banana_back.webp";
import strawberry_banana_side from "../../public/vapes/strawberry_banana/strawberry_banana_side.webp";

export const NAV_OPTIONS = [
  {
    id: 1,
    href: "#home",
    text: "HOME",
    // submenu: [{ text: "vape" }, { text: "vape" }],
  },
  {
    id: 2,
    href: "#about",
    text: "ABOUT",
    // submenu: [{ text: "vape" }, { text: "vape" }],
  },
  {
    id: 3,
    href: "#products",
    text: "PRODUCTS",
    submenu: [{ text: "Aventador" }, { text: "Vape" }],
  },
];

export const PRODUCTS = [
  {
    id: 0,
    name: "BLACK ICE",
    bgColor: "#000",
    textColor: "#fff",
    img: [black_ice, black_ice_side, black_ice_back],
  },
  {
    id: 1,
    name: "ICE MINT",
    bgColor: "#9af96d",
    textColor: "#fff",
    img: [ice_mint, ice_mint_back, ice_mint_side],
  },
  {
    id: 2,
    name: "BLUEBERRY ICE",
    bgColor: "#017ef4",
    textColor: "#fff",
    img: [blueberry_ice, blueberry_ice_side, blueberry_ice_back],
  },
  {
    id: 3,
    name: "STRAWBERRY WATERMELON",
    bgColor: "#d40000",
    textColor: "#fff",
    img: [strawberry, strawberry_side, strawberry_back],
  },
  {
    id: 4,
    name: "STRAWBERRY BANANA",
    bgColor: "#f2f427",
    textColor: "#fff",
    img: [strawberry_banana, strawberry_banana_side, strawberry_banana_back],
  },
  {
    id: 5,
    name: "PEACH ICE",
    bgColor: "#fba400",
    textColor: "#fff",
    img: [perch_ice, perch_ice_side, perch_ice_back],
  },
  {
    id: 6,
    name: "PEACH MANGO WATERMELON",
    bgColor: "#b60035",
    textColor: "#fff",
    img: [perch_mango, perch_mango_side, perch_mango_back],
  },
  {
    id: 7,
    name: "TRIPLE BERRY ICE",
    bgColor: "#492ac5",
    textColor: "#fff",
    img: [triple_berry, triple_berry_side, triple_berry_back],
  },
  {
    id: 8,
    name: "SPEARMINT",
    bgColor: "#acacae",
    textColor: "#fff",
    img: [sperrmint, sperrmint_side, sperrmint_back],
  },
  {
    id: 9,
    name: "TROPICAL FRUITS",
    bgColor: "#fc9303",
    textColor: "#fff",
    img: [tropical_fruits, tropical_fruits_side, tropical_fruits_back],
  },
  {
    id: 10,
    name: "PIÑA COLADA",
    bgColor: "#f7de9f",
    textColor: "#fff",
    img: [pina_colada, pina_colada_side, pina_colada_back],
  },
  {
    id: 11,
    name: "ICED APPLE MANGO",
    bgColor: "#f3d136",
    textColor: "#fff",
    img: [apple_mango, apple_mango_side, apple_mango_back],
  },
  {
    id: 12,
    name: "WATERMELON ICE",
    bgColor: "#e64a37",
    textColor: "#fff",
    img: [watermenlon_ice, watermenlon_ice_side, watermenlon_ice_back],
  },
  {
    id: 13,
    name: "SWEET MANGO",
    bgColor: "#f9ce5c",
    textColor: "#fff",
    img: [sweet_mango, sweet_mango_side, sweet_mango_back],
  },
  {
    id: 14,
    name: "GRAPE ICE",
    bgColor: "#b27cb6",
    textColor: "#fff",
    img: [garpe_ice, garpe_ice_side, garpe_ice_back],
  },
];
