// @ts-check

import { calculateNonTarmacGrip, calculateTarmacGrip, calculateKerbGrip } from './calculateGrip';
import { CalculationResult, RealCarData } from './types';

/**
 * @param {number} tyreWidthFront
 * @param {number} tyreWidthRear
 * @param {number} weight
 */
function getBalance(tyreWidthFront: number, tyreWidthRear: number, weight: number) {
  return (tyreWidthFront / tyreWidthRear) * 1.4 - weight * 0.0005;
}

/**
 * @param {import('./types').RealCarData} carData
 * @returns {import('./types').CalculationResult}
 */
export default function calculatePhysics({
  topSpeed,
  airResistance,
  downforce,
  power,
  tyreWidthFront,
  tyreWidthRear,
  tyreCompound,
  drivetrain,
  isHistoric,
  weight,
}: RealCarData): CalculationResult {
  const topSpeedScaled = topSpeed * 0.277;
  const weightScaled = weight * 0.6;
  const sliding = 0;

  const balance = getBalance(tyreWidthFront, tyreWidthRear, weight);

  const tarmacGrip = calculateTarmacGrip(tyreWidthFront, tyreWidthRear, tyreCompound, isHistoric);

  /** @type {import('./types').CalculationResult} */
  const result = {
    performance: {
      sliding,
      balance,
      airResistance: airResistance,
      downforce: downforce,
      power: power,
      topSpeed: topSpeedScaled,
      weight: weightScaled,
    },
    grip: {
      ...tarmacGrip,
      ...calculateNonTarmacGrip(tyreCompound, drivetrain),
      kerb: calculateKerbGrip(tarmacGrip.tarmac),
      kerb2: calculateKerbGrip(tarmacGrip.tarmac2),
    },
    slowdown: {
      oil: 0.1,
      tarmac: 0.01,
      tarmac2: 0.01,
      grass: 0.5,
      mud: 0.5,
      gravel: 0.2,
      gravel2: 0.1,
      sand: 2,
      sand2: 1.5,
      snow: 1.5,
      snow2: 1.5,
      ice: 0.1,
      kerb: 0,
      kerb2: 0.1,
      looseGravel: 0.3,
    },
  };

  return result;
}
