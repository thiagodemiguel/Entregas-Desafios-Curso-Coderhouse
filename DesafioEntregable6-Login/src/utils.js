//definiicion de ruta absoluta
import {dirname} from 'path'
import {fileURLToPath} from 'url'
//import bcrypt from "bcrypt"
//export const hashData
export const __dirname = dirname(fileURLToPath(import.meta.url));