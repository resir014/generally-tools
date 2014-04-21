/*
 * Copyright (c) 2014 Resi Respati <resir014@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

$(document).ready(function() {
    $("#calculate").click(function() {
        /*
         * Define the input variables
         */

        // Car Statistics
        var p = parseFloat($("#inputPower").val()).toFixed(1);                  // Power
        var w = parseFloat($("#inputWeight").val()).toFixed(1);                 // Weight
        var v = parseFloat($("#inputTopSpeed").val()).toFixed(1);               // Top Speed
        var wd = parseFloat($("#inputWeightDistribution").val()).toFixed(1);    // Weight distribution

        // Downforce
        var df = parseFloat($("#inputDownforce").val()).toFixed(1);             // Downforce
        var cd = parseFloat($("#inputAirResistance").val()).toFixed(1);         // Drag coefficient

        // Tyres
        var twf = parseInt($("#inputTyreWidthFront").val());                        // Front tyre width (mm)
        var twr = parseInt($("#inputTyreWidthRear").val());                         // Rear typre width (mm)
        var tc = parseInt($("#inputTyreQuality").val());                            // Tyre compound
        var d = parseInt($("#inputDrivetrain").val());                              // Drivetrain

        /*
         * Calculates scaled physics for GR car models.
         *
         * Should be re-arranged from top to bottom.
         */

        // Scaled top speed value.
        var vc = (v*0.277).toFixed(1);

        // Scaled weight.
        var wc = (w*0.6).toFixed(1);

        // Sliding (zero because it's useless as fuck)
        var s = (0).toFixed(1);

        // Balance
        function balance(twf, twr, w) {
            var tw = twf / twr;
            var bal = ((tw)*1.4) - (w*0.0005);
            return bal;
        }

        var bal = (balance(twf, twr, w)).toFixed(1);

        /*
         * Default grip variables.
         */

        var gripOil,
            gripTarmac1,
            gripTarmac2,
            gripGrass,
            gripMud,
            gripGravel1,
            gripGravel2,
            gripSand1,
            gripSand2,
            gripSnow,
            gripIce,
            gripKerb1,
            gripKerb2,
            gripLooseGravel;

        /*
         * Calculates tarmac2 grip.
         *
         * Required parameters:
         * 1) Front tyre's width (twf)
         * 2) Rear tyre's width (twr)
         * 3) Compound from 1 to 7... (tc)
         *
         * The formula comes out like this:
         * ((twf+twr)*tc) * 0.006
         */

        // We put the equation in a function to make it more readable
        function calculateGrip(tc, twf, twr) {
            var grip = ((twf+twr)*tc) * 0.006;
            return grip;
        }

        gripTarmac2 = (calculateGrip(tc, twf, twr)).toFixed(2);

        // Now we can find gripTarmac1.
        if (tc<6) {
            // if TC type less than 6, tarmac2-0.1
            gripTarmac1 = (gripTarmac2 - 0.1).toFixed(2);
        } else {
            // if TC type more than 5, tarmac2-0.2
            gripTarmac1 = (gripTarmac2 - 0.2).toFixed(2);
        }

        // Historic cars get a 15% grip penalty
        function historicPenalty(grip) {
            return grip - (0.15*grip);
        }

        if ($("#isHistoric").prop("checked")) {
            gripTarmac2 = historicPenalty(gripTarmac2).toFixed(2);
            gripTarmac1 = historicPenalty(gripTarmac1).toFixed(2);
        }

        // Kerbs have a respective tarmac grip - 1.
        function gripKerb(grip) {
            return grip - 1;
        }

        gripKerb1 = gripKerb(gripTarmac1).toFixed(2);
        gripKerb2 = gripKerb(gripTarmac2).toFixed(2);

        /*
         * Non-tarmac grips
         */

        if (tc>5) {
            // Racing tyres have a non-tarmac grip of 0.5
            gripOil
            = gripGrass
            = gripMud
            = gripGravel1
            = gripGravel2
            = gripSand1
            = gripSand2
            = gripSnow
            = gripIce
            = gripLooseGravel = (0.5).toFixed(2);
        } else if (tc=1) {
            gripGrass = gripLooseGravel = gripGravel1 = gripGravel2 = gripSand1 = gripSand2 = (0.6).toFixed(2);
            gripMud = gripSnow = (0.4).toFixed(2);
            gripOil = gripIce = (0.35).toFixed(2);
        } else if (tc=2) {
            gripGrass = gripLooseGravel = gripGravel2 = gripSand1 = gripSand2 = (0.725).toFixed(2);
            gripMud = gripSnow = (0.55).toFixed(2);
            gripOil =  gripIce = (0.5).toFixed(2);
        } else if (tc=3) {
            gripGrass = gripLooseGravel = gripGravel2 = gripSand1 = gripSand2 = (0.85).toFixed(2);
            gripMud = gripSnow = (0.7).toFixed(2);
            gripOil = gripIce = (0.65).toFixed(2);
        } else if (tc=4) {
            gripGrass = gripLooseGravel = gripGravel2 = gripSand1 = gripSand2 = (0.725).toFixed(2);
            gripMud = gripSnow = (0.6).toFixed(2);
            gripOil = gripIce = (0.55).toFixed(2);
        } else if (tc=5) {
            gripGrass = gripLooseGravel = gripGravel2 = gripSand1 = gripSand2 = (0.65).toFixed(2);
            gripMud = gripSnow = (0.5).toFixed(2);
            gripOil = gripIce = (0.45).toFixed(2);
        }

        // Non-tarmac grip penalties and bonuses
        function gripPenaltyRWD(grip) {
            return (grip - 0.05).toFixed(2);
        }

        function gripBonus4WD(grip) {
            return (grip + 0.05).toFixed(2);
        }

        if (d=2) {
            gripOil = gripPenaltyRWD(gripOil);
            gripGrass = gripPenaltyRWD(gripGrass);
            gripMud = gripPenaltyRWD(gripMud);
            gripGravel1 = gripPenaltyRWD(gripGravel1);
            gripGravel2 = gripPenaltyRWD(gripGravel2);
            gripSand1 = gripPenaltyRWD(gripSand1);
            gripSand2 = gripPenaltyRWD(gripSand2);
            gripSnow = gripPenaltyRWD(gripSnow);
            gripIce = gripPenaltyRWD(gripIce);
            gripLooseGravel = gripPenaltyRWD(gripLooseGravel);
        } else if (d=3) {
            gripOil = gripBonus4WD(gripOil);
            gripGrass = gripBonus4WD(gripGrass);
            gripMud = gripBonus4WD(gripMud);
            gripGravel1 = gripBonus4WD(gripGravel1);
            gripGravel2 = gripBonus4WD(gripGravel2);
            gripSand1 = gripBonus4WD(gripSand1);
            gripSand2 = gripBonus4WD(gripSand2);
            gripSnow = gripBonus4WD(gripSnow);
            gripIce = gripBonus4WD(gripIce);
            gripLooseGravel = gripBonus4WD(gripLooseGravel);
        }

        /*
         * Default slowdown values.
         */

        var slowdownOil = (0.1).toFixed(2);
        var slowdownTarmac1 = (0.01).toFixed(2);
        var slowdownTarmac2 = (0.01).toFixed(2);
        var slowdownGrass = (0.5).toFixed(2);
        var slowdownMud = (0.5).toFixed(2);
        var slowdownGravel1 = (0.2).toFixed(2);
        var slowdownGravel2 = (0.1).toFixed(2);
        var slowdownSand1 = (2).toFixed(2);
        var slowdownSand2 = (1.5).toFixed(2);
        var slowdownSnow = (1.5).toFixed(2);
        var slowdownIce = (0.1).toFixed(2);
        var slowdownKerb1 = (0).toFixed(2);
        var slowdownKerb2 = (0.1).toFixed(2);
        var slowdownLooseGravel = (0.3).toFixed(2);

        /*
         * Write down the results on page.
         */

        // Calculated performance values
        $("#airResistance").html(cd);
        $("#downforce").html(df);
        $("#power").html(p);
        $("#topSpeed").html(vc);
        $("#sliding").html(s);
        $("#weight").html(wc);
        $("#balance").html(bal);

        // Calculated grip values
        $("#gripOil").html(gripOil);
        $("#gripTarmac1").html(gripTarmac1);
        $("#gripTarmac2").html(gripTarmac2);
        $("#gripGrass").html(gripGrass);
        $("#gripMud").html(gripMud);
        $("#gripGravel1").html(gripGravel1);
        $("#gripGravel2").html(gripGravel2);
        $("#gripSand1").html(gripSand1);
        $("#gripSand2").html(gripSand2);
        $("#gripSnow").html(gripSnow);
        $("#gripIce").html(gripIce);
        $("#gripKerb1").html(gripKerb1);
        $("#gripKerb2").html(gripKerb2);
        $("#gripLooseGravel").html(gripLooseGravel);

        // Calculated slowdown values
        $("#slowdownOil").html(slowdownOil);
        $("#slowdownTarmac1").html(slowdownTarmac1);
        $("#slowdownTarmac2").html(slowdownTarmac2);
        $("#slowdownGrass").html(slowdownGrass);
        $("#slowdownMud").html(slowdownMud);
        $("#slowdownGravel1").html(slowdownGravel1);
        $("#slowdownGravel2").html(slowdownGravel2);
        $("#slowdownSand1").html(slowdownSand1);
        $("#slowdownSand2").html(slowdownSand2);
        $("#slowdownSnow").html(slowdownSnow);
        $("#slowdownIce").html(slowdownIce);
        $("#slowdownKerb1").html(slowdownKerb1);
        $("#slowdownKerb2").html(slowdownKerb2);
        $("#slowdownLooseGravel").html(slowdownLooseGravel);
    });
});
