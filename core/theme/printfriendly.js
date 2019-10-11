/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2018 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview High contrast theme.
 * Darker colours to contrast the white font.
 */
'use strict';

goog.provide('Blockly.Themes.PrintFriendly');

goog.require('Blockly.Theme');


// Temporary holding object.
Blockly.Themes.PrintFriendly = {};

/*
4d4d4d
606060
737373
868686
999999
acacac
bfbfbf
d3d3d3

e6e6e6




*/



Blockly.Themes.PrintFriendly.defaultBlockStyles = {
  "colour_blocks": {
    "colourPrimary": "#929292",
    "colourSecondary": "#c4c4c4",
    "colourTertiary": "#000000"
  },
  "list_blocks": {
    "colourPrimary": "#404040",
    "colourSecondary": "#c4c4c4",
    "colourTertiary": "#000000"
  },
  "logic_blocks": {
    "colourPrimary": "#828282",
    "colourSecondary": "#c4c4c4",
    "colourTertiary": "#000000"
  },
  "loop_blocks": {
    "colourPrimary": "#a3a3a3",
    "colourSecondary": "#c4c4c4",
    "colourTertiary": "#000000"
  },
  "math_blocks": {
    "colourPrimary": "#505050",
    "colourSecondary": "#c4c4c4",
    "colourTertiary": "#000000"
  },
  "procedure_blocks": {
    "colourPrimary": "#616161",
    "colourSecondary": "#c4c4c4",
    "colourTertiary": "#000000"
  },
  "text_blocks": {
    "colourPrimary": "#b3b3b3",
    "colourSecondary": "#c4c4c4",
    "colourTertiary": "#000000"
  },
  "variable_blocks": {
    "colourPrimary": "#717171",
    "colourSecondary": "#c4c4c4",
    "colourTertiary": "#000000"
  },
  "variable_dynamic_blocks": {
    "colourPrimary": "#717171",
    "colourSecondary": "#c4c4c4",
    "colourTertiary": "#000000"
  },
  "hat_blocks": {
    "colourPrimary": "#717171",
    "colourSecondary": "#c4c4c4",
    "colourTertiary": "#000000",
    "hat": "cap"
  }
};

Blockly.Themes.PrintFriendly.categoryStyles = {
  "colour_category": {
    "colour": "#929292" // 21.25     6
  },
  "list_category": {
    "colour": "#404040"  // 13.91     1
  },
  "logic_category": {
    "colour": "#828282" // 20.38     5
  },
  "loop_category": {
    "colour": "#a3a3a3"  // 29.89    7
  },
  "math_category": {
    "colour": "#505050"  // 14.64      2
  },
  "procedure_category": {
    "colour": "#616161"   // 16.97     3
  },
  "text_category": {
    "colour": "#b3b3b3"   // 31.03      8
  },
  "variable_category": {
    "colour": "#717171"    // 17.78      4
  },
  "variable_dynamic_category": {
    "colour": "#717171"
  }
};

// This style is still being fleshed out and may change.
Blockly.Themes.PrintFriendly =
    new Blockly.Theme(Blockly.Themes.PrintFriendly.defaultBlockStyles,
        Blockly.Themes.PrintFriendly.categoryStyles);
