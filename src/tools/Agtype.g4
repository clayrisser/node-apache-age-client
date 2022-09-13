/**
 * File: /src/tools/Agtype.g4
 * Project: apache-age-client
 * File Created: 13-09-2022 04:45:20
 * Author: Clay Risser
 * -----
 * Last Modified: 13-09-2022 04:50:07
 * Modified By: Clay Risser
 * -----
 * Risser Labs LLC (c) Copyright 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

grammar Agtype;

agType: agValue EOF;

agValue: value typeAnnotation?;

value:
	STRING			# StringValue
	| INTEGER		# IntegerValue
	| floatLiteral	# FloatValue
	| 'true'		# TrueBoolean
	| 'false'		# FalseBoolean
	| 'null'		# NullValue
	| obj			# ObjectValue
	| array			# ArrayValue;

obj: '{' pair (',' pair)* '}' | '{' '}';

pair: STRING ':' agValue;

array: '[' agValue (',' agValue)* ']' | '[' ']';

typeAnnotation: '::' IDENT;

IDENT: [A-Z_a-z][$0-9A-Z_a-z]*;

STRING: '"' (ESC | SAFECODEPOINT)* '"';

fragment ESC: '\\' (["\\/bfnrt] | UNICODE);

fragment UNICODE: 'u' HEX HEX HEX HEX;

fragment HEX: [0-9a-fA-F];

fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F];

INTEGER: '-'? INT;

fragment INT: '0' | [1-9] [0-9]*;

floatLiteral:
	RegularFloat
	| ExponentFloat
	| '-'? 'Infinity'
	| 'NaN';

RegularFloat: '-'? INT DECIMAL;

ExponentFloat: '-'? INT DECIMAL? SCIENTIFIC;

fragment DECIMAL: '.' [0-9]+;

fragment SCIENTIFIC: [Ee][+-]? [0-9]+;

WS: [ \t\n\r]+ -> skip;
