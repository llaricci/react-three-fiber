import { TextureLoader } from 'three'
import {	
    dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images' 

const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const groundTexture = new TextureLoader().load(grassImg)

export{
    dirtTexture,
    logTexture,
    grassTexture,
    glassTexture,
    groundTexture
}