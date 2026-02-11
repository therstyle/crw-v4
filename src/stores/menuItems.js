import { atom } from 'nanostores'
import { nav } from '../pages/index.data.js'

export const menuItems = atom([...nav.links])
