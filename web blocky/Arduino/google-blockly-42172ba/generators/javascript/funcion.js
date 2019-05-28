'use strict';

goog.provide('Blockly.JavaScript.funcion');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['function'] = function(block) {
  var text_function = block.getFieldValue('FUNCTION');
  var statements_function = Blockly.JavaScript.statementToCode(block, 'FUNCTION');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['function_return'] = function(block) {
  var text_function = block.getFieldValue('FUNCTION');
  var statements_setup = Blockly.JavaScript.statementToCode(block, 'SETUP');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['if_return'] = function(block) {
  var value_if = Blockly.JavaScript.valueToCode(block, 'IF', Blockly.JavaScript.ORDER_ATOMIC);
  var value_return = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};