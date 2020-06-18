export interface SurfaceProperties {
  oil: number;
  tarmac: number;
  tarmac2: number;
  grass: number;
  mud: number;
  gravel: number;
  gravel2: number;
  sand: number;
  sand2: number;
  snow: number;
  snow2: number;
  ice: number;
  kerb: number;
  kerb2: number;
  looseGravel: number;
}

export interface ScaledCarData {
  airResistance: number;
  downforce: number;
  power: number;
  topSpeed: number;
  sliding: number;
  weight: number;
  balance: number;
}

export interface CalculationResult {
  performance: ScaledCarData;
  grip: SurfaceProperties;
  slowdown: SurfaceProperties;
}

export interface GripResult {
  gripTarmac: number;
  gripTarmac2: number;
}

export interface RealCarData {
  power: number;
  weight: number;
  topSpeed: number;
  downforce: number;
  airResistance: number;
  tyreWidthFront: number;
  tyreWidthRear: number;
  tyreCompound: number;
  drivetrain: number;
  isHistoric: boolean;
}
