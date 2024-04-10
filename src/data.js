// import hero slider images
import HeroSlideImage1 from "./assets/img/dogs/dog-slide-1.png";
import HeroSlideImage2 from "./assets/img/dogs/dog-slide-2.png";
import HeroSlideImage3 from "./assets/img/dogs/dog-slide-3.png";
// import dog category images
import DogCateg1 from "./assets/img/dogs/dog-categ-1.png";
import DogCateg2 from "./assets/img/dogs/dog-categ-2.png";
import DogCateg3 from "./assets/img/dogs/dog-categ-3.png";
import DogCateg4 from "./assets/img/dogs/dog-categ-4.png";

export const navigation = [
  {
    name: "home",
    href: "#",
  },
  {
    name: "appointment",
    href: "#appointment",
  },
  {
    name: "prices",
    href: "#prices",
  },
  {
    name: "contact",
    href: "#contact",
  },
];

export const heroSlider = [
  {
    id: 1,
    title: "We take care of your pet.",
    image: HeroSlideImage1,
    subtitle: "From Shaggy to Chic: Unleash Your Pup's Inner Diva with Us! ",
    buttonText: "Get an appointment",
  },
  {
    id: 2,
    title: "Pawsitively Perfect Styles for Your Furry Friend",
    image: HeroSlideImage2,
    subtitle: "Step into our salon and watch your pup's style come to life!",
    buttonText: "Get an appointment",
  },
  {
    id: 3,
    title: "Tailored Cuts, Happy Mutts!",
    image: HeroSlideImage3,
    subtitle: "Transforming Tails into Works of Art, One Trim at a Time!",
    buttonText: "Get an appointment",
  },
];

export const bundleData = [
  {
    id: 1,
    image: DogCateg1,
    name: "small",
    dogCategory: "1 - 9 kg",
    services: [
      {
        name: "smart",
        price: "$20",
        list: ["wash", "style", "groom", "trim"],
      },
      {
        name: "premium",
        price: "$40",
        list: [
          "all smart services",
          "ears cleaning",
          "nail cut",
          "teeth cleaning",
          "skincare consultation",
        ],
      },
      {
        name: "royal",
        price: "$60",
        list: [
          "all premium services",
          "shedding control",
          "tail docking",
          "pawdicure ",
          "aromatherapy bath",
          "customized haircuts",
          "medicated baths",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "medium",
    image: DogCateg2,
    dogCategory: "10 - 19 kg",
    services: [
      {
        name: "smart",
        price: "$80",
        list: ["wash", "style", "groom", "trim"],
      },
      {
        name: "premium",
        price: "$100",
        list: [
          "all smart services",
          "ears cleaning",
          "nail cut",
          "teeth cleaning",
          "skincare consultation",
        ],
      },
      {
        name: "royal",
        price: "$120",
        list: [
          "all premium services",
          "shedding control",
          "tail docking",
          "pawdicure ",
          "aromatherapy bath",
          "customized haircuts",
          "medicated baths",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "big",
    image: DogCateg3,
    dogCategory: "20 - 29 kg",
    services: [
      {
        name: "smart",
        price: "$140",
        list: ["wash", "style", "groom", "trim"],
      },
      {
        name: "premium",
        price: "$160",
        list: [
          "all smart services",
          "ears cleaning",
          "nail cut",
          "teeth cleaning",
          "skincare consultation",
        ],
      },
      {
        name: "royal",
        price: "$180",
        list: [
          "all premium services",
          "shedding control",
          "tail docking",
          "pawdicure ",
          "aromatherapy bath",
          "customized haircuts",
          "medicated baths",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "super",
    image: DogCateg4,
    dogCategory: "30 - 39 kg",
    services: [
      {
        name: "smart",
        price: "$200",
        list: ["wash", "style", "groom", "trim"],
      },
      {
        name: "premium",
        price: "$210",
        list: [
          "all smart services",
          "ears cleaning",
          "nail cut",
          "teeth cleaning",
          "skincare consultation",
        ],
      },
      {
        name: "royal",
        price: "$220",
        list: [
          "all premium services",
          "shedding control",
          "tail docking",
          "pawdicure ",
          "aromatherapy bath",
          "customized haircuts",
          "medicated baths",
        ],
      },
    ],
  },
];
