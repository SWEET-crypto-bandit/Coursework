export interface Player {
   
    name?: string,
    many: number,
    lvl: number,
    health: number,
    maxHealth: number,
    damage: number,
    radiation: number,
    inventory: string[],
    map?:string

}