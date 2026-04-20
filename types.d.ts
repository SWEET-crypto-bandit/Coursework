export interface Enemy {
  name?: string;
  health: number;
  maxHealth: number;
  damage: number;
}

export interface Player {
  name?: string;
  maney: number;
  food: number;
  maxFood: number;
  health: number;
  maxHealth: number;
  damage: number;
  radiation: number;
  inventory: InventoryItem[];
}
