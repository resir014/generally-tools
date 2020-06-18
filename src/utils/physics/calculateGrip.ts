import { SurfaceProperties } from './types';

type NonTarmacSurfaceProperties = Omit<SurfaceProperties, 'tarmac' | 'tarmac2' | 'kerb' | 'kerb2'>;

/**
 * Calculates grip penalty/bonus based on car's drivetrain
 * @param {number} grip Grip value
 * @param {number} drivetrain Drivetrain value
 * @returns {number}
 */
function gripPenaltyBonus(grip: number, drivetrain: number) {
  switch (drivetrain) {
    case 2: {
      // Rear-wheel drive
      return grip - 0.05;
    }
    case 3: {
      // Four-wheel drive
      return grip + 0.05;
    }
    default: {
      // Front-wheel drive
      return grip;
    }
  }
}

/**
 * Calculates tarmac2 grip.
 *
 * Required parameters:
 * 1. Front tyre's width (twf)
 * 2. Rear tyre's width (twr)
 * 3. Compound from 1 to 7... (tc)
 *
 * The formula comes out like this:
 *
 * ```js
 * ((twf+twr) * (1+(tc*0.1))) * 0.006
 * ```
 *
 * @param {number} tyreWidthFront
 * @param {number} tyreWidthRear
 * @param {number} tyreCompound
 */
function calculateTarmac2Grip(tyreWidthFront: number, tyreWidthRear: number, tyreCompound: number) {
  return (tyreWidthFront + tyreWidthRear) * (1 + tyreCompound * 0.1) * 0.006;
}

/**
 * Historic cars get a 15% grip penalty
 * @param {number} grip
 */
function historicPenalty(grip: number) {
  return grip - 0.15 * grip;
}

/**
 * Kerbs have a respective tarmac grip - 1.
 * @param {number} tarmacGrip
 */
export function calculateKerbGrip(tarmacGrip: number) {
  return tarmacGrip - 1;
}

/**
 * @param {number} tyreWidthFront
 * @param {number} tyreWidthRear
 * @param {number} tyreCompound
 * @param {boolean} isHistoric
 */
export function calculateTarmacGrip(
  tyreWidthFront: number,
  tyreWidthRear: number,
  tyreCompound: number,
  isHistoric: boolean,
) {
  let tarmac;
  let tarmac2;

  tarmac2 = calculateTarmac2Grip(tyreWidthFront, tyreWidthRear, tyreCompound);

  // Now we can find gripTarmac1.
  if (tyreCompound < 6) {
    // if TC type less than 6, tarmac2 - 0.1
    tarmac = tarmac2 - 0.1;
  } else {
    // if TC type more than 5, tarmac2 - 0.2
    tarmac = tarmac2 - 0.2;
  }

  if (isHistoric) {
    tarmac = historicPenalty(tarmac);
    tarmac2 = historicPenalty(tarmac2);
  }

  return { tarmac, tarmac2 };
}

/**
 * Calculates non-tarmac grip values
 * @param {number} tyreCompound Tyre compound value
 * @param {number} drivetrain Drivetrain value
 */
export function calculateNonTarmacGrip(tyreCompound: number, drivetrain: number): NonTarmacSurfaceProperties {
  switch (tyreCompound) {
    case 1: {
      // Economy
      const gripNonTarmac = gripPenaltyBonus(0.6, drivetrain);
      const gripMudSnow = gripPenaltyBonus(0.4, drivetrain);
      const gripOilIce = gripPenaltyBonus(0.35, drivetrain);
      return {
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        looseGravel: gripNonTarmac,
        oil: gripOilIce,
        ice: gripOilIce,
        mud: gripMudSnow,
        snow: gripMudSnow,
        snow2: gripMudSnow,
      };
    }
    case 2: {
      // Comfort
      const gripNonTarmac = gripPenaltyBonus(0.725, drivetrain);
      const gripMudSnow = gripPenaltyBonus(0.55, drivetrain);
      const gripOilIce = gripPenaltyBonus(0.5, drivetrain);
      return {
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        looseGravel: gripNonTarmac,
        oil: gripOilIce,
        ice: gripOilIce,
        mud: gripMudSnow,
        snow: gripMudSnow,
        snow2: gripMudSnow,
      };
    }
    case 3: {
      // Road
      const gripNonTarmac = gripPenaltyBonus(0.85, drivetrain);
      const gripMudSnow = gripPenaltyBonus(0.7, drivetrain);
      const gripOilIce = gripPenaltyBonus(0.65, drivetrain);
      return {
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        looseGravel: gripNonTarmac,
        oil: gripOilIce,
        ice: gripOilIce,
        mud: gripMudSnow,
        snow: gripMudSnow,
        snow2: gripMudSnow,
      };
    }
    case 4: {
      // Sport
      const gripNonTarmac = gripPenaltyBonus(0.725, drivetrain);
      const gripMudSnow = gripPenaltyBonus(0.6, drivetrain);
      const gripOilIce = gripPenaltyBonus(0.55, drivetrain);
      return {
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        looseGravel: gripNonTarmac,
        oil: gripOilIce,
        ice: gripOilIce,
        mud: gripMudSnow,
        snow: gripMudSnow,
        snow2: gripMudSnow,
      };
    }
    case 5: {
      // Super
      const gripNonTarmac = gripPenaltyBonus(0.65, drivetrain);
      const gripMudSnow = gripPenaltyBonus(0.6, drivetrain);
      const gripOilIce = gripPenaltyBonus(0.55, drivetrain);
      return {
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        looseGravel: gripNonTarmac,
        oil: gripOilIce,
        ice: gripOilIce,
        mud: gripMudSnow,
        snow: gripMudSnow,
        snow2: gripMudSnow,
      };
    }
    default: {
      // Semi-slicks + Racing Slicks
      const gripNonTarmac = gripPenaltyBonus(0.5, drivetrain);
      return {
        oil: gripNonTarmac,
        grass: gripNonTarmac,
        gravel: gripNonTarmac,
        gravel2: gripNonTarmac,
        sand: gripNonTarmac,
        sand2: gripNonTarmac,
        snow: gripNonTarmac,
        snow2: gripNonTarmac,
        ice: gripNonTarmac,
        looseGravel: gripNonTarmac,
        mud: gripNonTarmac,
      };
    }
  }
}
