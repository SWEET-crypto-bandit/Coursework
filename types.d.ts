export interface Enemy {
  name?: string;
  health: number;
  maxHealth: number;
  damage: number;
}

export interface InventoryItem {
  id: string;
  count: number;
}

export interface Business {
  owned: boolean;
  balance: number;
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
  business: Business;
  inventory: InventoryItem[];
}

declare global {
  function applyTurnCosts(): Promise<boolean>;
  function upInterface(): void;
  function videoRevers(ss: string): void;

  function creayDialog(text: string): Promise<void>;
  function choiceDialog3(
    text: string,
    btn1Text: string,
    btn2Text: string,
    btn3Text: string,
    callback1?: (() => any) | null,
    callback2?: (() => any) | null,
    callback3?: (() => any) | null
  ): Promise<number>;

  function snackBar(): Promise<void> | void;
  function darkcity(): Promise<void> | void;
  function city(): Promise<void> | void;

  function playDarkMisuc3(): void;
  function playDarkMisuc5(): void;
}

export {};
