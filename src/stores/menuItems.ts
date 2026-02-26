import { atom } from 'nanostores'
import { nav } from '../pages/index.data'

export const menuItems = atom([...nav.links])
