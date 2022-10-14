import sets from '../../assets/images/icons/sets.svg'
import rols from '../../assets/images/icons/rols.svg'
import salats from '../../assets/images/icons/salats.svg'
import soups from '../../assets/images/icons/soups.svg'
import drinks from '../../assets/images/icons/drinks.svg'
import stoks from '../../assets/images/icons/stoks.svg'

export const menu = [
    {
        name:"Сеты",
        path: "/menu/sets", 
        availability: true,
        icon: sets
    },
    {
        name:"Роллы",
        path: "/menu/rolls", 
        availability: true,
        icon: rols
    },
    {
        name:"Салаты",
        path: "/menu/salats", 
        availability: false,
        icon: salats
    },
    {
        name:"Супы",
        path: "/menu/soups", 
        availability: false,
        icon: soups
    },
    {
        name:"Напитки",
        path: "/menu/drinks", 
        availability: true,
        icon: drinks
    },
    {
        name:"Акции",
        path: "/menu/stoks", 
        availability: true,
        icon: stoks
    }
]