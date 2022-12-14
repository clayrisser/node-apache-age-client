/**
 * File: /src/tools/AgtypeLexer.js
 * Project: apache-age-client
 * File Created: 13-09-2022 04:56:05
 * Author: Apache Software Foundation
 * -----
 * Last Modified: 13-09-2022 07:01:22
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
/* eslint-disable spellcheck/spell-checker */

// Generated from src/tools/Agtype.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from "antlr4";

const serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
  "\u5964\u0002\u0015\u00b9\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
  "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
  "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
  "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
  "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
  "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
  "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
  "\u0004\u001b\t\u001b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
  "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
  "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
  "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
  "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
  "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
  "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
  "\u0003\u000e\u0003\u000f\u0003\u000f\u0007\u000fh\n\u000f\f\u000f\u000e",
  "\u000fk\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010",
  "p\n\u0010\f\u0010\u000e\u0010s\u000b\u0010\u0003\u0010\u0003\u0010\u0003",
  "\u0011\u0003\u0011\u0003\u0011\u0005\u0011z\n\u0011\u0003\u0012\u0003",
  "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
  "\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0005\u0015\u0087\n\u0015",
  "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016",
  "\u008e\n\u0016\f\u0016\u000e\u0016\u0091\u000b\u0016\u0005\u0016\u0093",
  "\n\u0016\u0003\u0017\u0005\u0017\u0096\n\u0017\u0003\u0017\u0003\u0017",
  "\u0003\u0017\u0003\u0018\u0005\u0018\u009c\n\u0018\u0003\u0018\u0003",
  "\u0018\u0005\u0018\u00a0\n\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
  "\u0003\u0019\u0006\u0019\u00a6\n\u0019\r\u0019\u000e\u0019\u00a7\u0003",
  "\u001a\u0003\u001a\u0005\u001a\u00ac\n\u001a\u0003\u001a\u0006\u001a",
  "\u00af\n\u001a\r\u001a\u000e\u001a\u00b0\u0003\u001b\u0006\u001b\u00b4",
  "\n\u001b\r\u001b\u000e\u001b\u00b5\u0003\u001b\u0003\u001b\u0002\u0002",
  "\u001c\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
  "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
  "\u0010\u001f\u0011!\u0002#\u0002%\u0002'\u0002)\u0012+\u0002-\u0013",
  "/\u00141\u00023\u00025\u0015\u0003\u0002\f\u0005\u0002C\\aac|\u0007",
  "\u0002&&2;C\\aac|\n\u0002$$11^^ddhhppttvv\u0005\u00022;CHch\u0005\u0002",
  "\u0002!$$^^\u0003\u00023;\u0003\u00022;\u0004\u0002GGgg\u0004\u0002",
  '--//\u0005\u0002\u000b\f\u000f\u000f""\u0002\u00bf\u0002\u0003\u0003',
  "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
  "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
  "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
  "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
  "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
  "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
  "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
  "\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002-\u0003\u0002",
  "\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002",
  "\u0002\u00037\u0003\u0002\u0002\u0002\u0005<\u0003\u0002\u0002\u0002",
  "\u0007B\u0003\u0002\u0002\u0002\tG\u0003\u0002\u0002\u0002\u000bI\u0003",
  "\u0002\u0002\u0002\rK\u0003\u0002\u0002\u0002\u000fM\u0003\u0002\u0002",
  "\u0002\u0011O\u0003\u0002\u0002\u0002\u0013Q\u0003\u0002\u0002\u0002",
  "\u0015S\u0003\u0002\u0002\u0002\u0017V\u0003\u0002\u0002\u0002\u0019",
  "X\u0003\u0002\u0002\u0002\u001ba\u0003\u0002\u0002\u0002\u001de\u0003",
  "\u0002\u0002\u0002\u001fl\u0003\u0002\u0002\u0002!v\u0003\u0002\u0002",
  "\u0002#{\u0003\u0002\u0002\u0002%\u0081\u0003\u0002\u0002\u0002'\u0083",
  "\u0003\u0002\u0002\u0002)\u0086\u0003\u0002\u0002\u0002+\u0092\u0003",
  "\u0002\u0002\u0002-\u0095\u0003\u0002\u0002\u0002/\u009b\u0003\u0002",
  "\u0002\u00021\u00a3\u0003\u0002\u0002\u00023\u00a9\u0003\u0002\u0002",
  "\u00025\u00b3\u0003\u0002\u0002\u000278\u0007v\u0002\u000289\u0007t",
  "\u0002\u00029:\u0007w\u0002\u0002:;\u0007g\u0002\u0002;\u0004\u0003",
  "\u0002\u0002\u0002<=\u0007h\u0002\u0002=>\u0007c\u0002\u0002>?\u0007",
  "n\u0002\u0002?@\u0007u\u0002\u0002@A\u0007g\u0002\u0002A\u0006\u0003",
  "\u0002\u0002\u0002BC\u0007p\u0002\u0002CD\u0007w\u0002\u0002DE\u0007",
  "n\u0002\u0002EF\u0007n\u0002\u0002F\b\u0003\u0002\u0002\u0002GH\u0007",
  "}\u0002\u0002H\n\u0003\u0002\u0002\u0002IJ\u0007.\u0002\u0002J\f\u0003",
  "\u0002\u0002\u0002KL\u0007\u007f\u0002\u0002L\u000e\u0003\u0002\u0002",
  "\u0002MN\u0007<\u0002\u0002N\u0010\u0003\u0002\u0002\u0002OP\u0007]",
  "\u0002\u0002P\u0012\u0003\u0002\u0002\u0002QR\u0007_\u0002\u0002R\u0014",
  "\u0003\u0002\u0002\u0002ST\u0007<\u0002\u0002TU\u0007<\u0002\u0002U",
  "\u0016\u0003\u0002\u0002\u0002VW\u0007/\u0002\u0002W\u0018\u0003\u0002",
  "\u0002\u0002XY\u0007K\u0002\u0002YZ\u0007p\u0002\u0002Z[\u0007h\u0002",
  "\u0002[\\\u0007k\u0002\u0002\\]\u0007p\u0002\u0002]^\u0007k\u0002\u0002",
  "^_\u0007v\u0002\u0002_`\u0007{\u0002\u0002`\u001a\u0003\u0002\u0002",
  "\u0002ab\u0007P\u0002\u0002bc\u0007c\u0002\u0002cd\u0007P\u0002\u0002",
  "d\u001c\u0003\u0002\u0002\u0002ei\t\u0002\u0002\u0002fh\t\u0003\u0002",
  "\u0002gf\u0003\u0002\u0002\u0002hk\u0003\u0002\u0002\u0002ig\u0003\u0002",
  "\u0002\u0002ij\u0003\u0002\u0002\u0002j\u001e\u0003\u0002\u0002\u0002",
  "ki\u0003\u0002\u0002\u0002lq\u0007$\u0002\u0002mp\u0005!\u0011\u0002",
  "np\u0005'\u0014\u0002om\u0003\u0002\u0002\u0002on\u0003\u0002\u0002",
  "\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qr\u0003\u0002",
  "\u0002\u0002rt\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002tu\u0007",
  "$\u0002\u0002u \u0003\u0002\u0002\u0002vy\u0007^\u0002\u0002wz\t\u0004",
  "\u0002\u0002xz\u0005#\u0012\u0002yw\u0003\u0002\u0002\u0002yx\u0003",
  '\u0002\u0002\u0002z"\u0003\u0002\u0002\u0002{|\u0007w\u0002\u0002|',
  "}\u0005%\u0013\u0002}~\u0005%\u0013\u0002~\u007f\u0005%\u0013\u0002",
  "\u007f\u0080\u0005%\u0013\u0002\u0080$\u0003\u0002\u0002\u0002\u0081",
  "\u0082\t\u0005\u0002\u0002\u0082&\u0003\u0002\u0002\u0002\u0083\u0084",
  "\n\u0006\u0002\u0002\u0084(\u0003\u0002\u0002\u0002\u0085\u0087\u0007",
  "/\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003",
  "\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0089\u0005",
  "+\u0016\u0002\u0089*\u0003\u0002\u0002\u0002\u008a\u0093\u00072\u0002",
  "\u0002\u008b\u008f\t\u0007\u0002\u0002\u008c\u008e\t\b\u0002\u0002\u008d",
  "\u008c\u0003\u0002\u0002\u0002\u008e\u0091\u0003\u0002\u0002\u0002\u008f",
  "\u008d\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090",
  "\u0093\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0092",
  "\u008a\u0003\u0002\u0002\u0002\u0092\u008b\u0003\u0002\u0002\u0002\u0093",
  ",\u0003\u0002\u0002\u0002\u0094\u0096\u0007/\u0002\u0002\u0095\u0094",
  "\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0097",
  "\u0003\u0002\u0002\u0002\u0097\u0098\u0005+\u0016\u0002\u0098\u0099",
  "\u00051\u0019\u0002\u0099.\u0003\u0002\u0002\u0002\u009a\u009c\u0007",
  "/\u0002\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009b\u009c\u0003",
  "\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009f\u0005",
  "+\u0016\u0002\u009e\u00a0\u00051\u0019\u0002\u009f\u009e\u0003\u0002",
  "\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002",
  "\u0002\u0002\u00a1\u00a2\u00053\u001a\u0002\u00a20\u0003\u0002\u0002",
  "\u0002\u00a3\u00a5\u00070\u0002\u0002\u00a4\u00a6\t\b\u0002\u0002\u00a5",
  "\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7",
  "\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8",
  "2\u0003\u0002\u0002\u0002\u00a9\u00ab\t\t\u0002\u0002\u00aa\u00ac\t",
  "\n\u0002\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003",
  "\u0002\u0002\u0002\u00ac\u00ae\u0003\u0002\u0002\u0002\u00ad\u00af\t",
  "\b\u0002\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af\u00b0\u0003",
  "\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003",
  "\u0002\u0002\u0002\u00b14\u0003\u0002\u0002\u0002\u00b2\u00b4\t\u000b",
  "\u0002\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002",
  "\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002",
  "\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b8\b\u001b",
  "\u0002\u0002\u00b86\u0003\u0002\u0002\u0002\u0011\u0002ioqy\u0086\u008f",
  "\u0092\u0095\u009b\u009f\u00a7\u00ab\u00b0\u00b5\u0003\b\u0002\u0002",
].join("");

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map(
  (ds, index) => new antlr4.dfa.DFA(ds, index)
);

export default class AgtypeLexer extends antlr4.Lexer {
  static grammarFileName = "Agtype.g4";
  static channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
  static modeNames = ["DEFAULT_MODE"];
  static literalNames = [
    null,
    "'true'",
    "'false'",
    "'null'",
    "'{'",
    "','",
    "'}'",
    "':'",
    "'['",
    "']'",
    "'::'",
    "'-'",
    "'Infinity'",
    "'NaN'",
  ];

  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "IDENT",
    "STRING",
    "INTEGER",
    "RegularFloat",
    "ExponentFloat",
    "WS",
  ];

  static ruleNames = [
    "T__0",
    "T__1",
    "T__2",
    "T__3",
    "T__4",
    "T__5",
    "T__6",
    "T__7",
    "T__8",
    "T__9",
    "T__10",
    "T__11",
    "T__12",
    "IDENT",
    "STRING",
    "ESC",
    "UNICODE",
    "HEX",
    "SAFECODEPOINT",
    "INTEGER",
    "INT",
    "RegularFloat",
    "ExponentFloat",
    "DECIMAL",
    "SCIENTIFIC",
    "WS",
  ];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.LexerATNSimulator(
      this,
      atn,
      decisionsToDFA,
      new antlr4.PredictionContextCache()
    );
  }

  get atn() {
    return atn;
  }
}

AgtypeLexer.EOF = antlr4.Token.EOF;
AgtypeLexer.T__0 = 1;
AgtypeLexer.T__1 = 2;
AgtypeLexer.T__2 = 3;
AgtypeLexer.T__3 = 4;
AgtypeLexer.T__4 = 5;
AgtypeLexer.T__5 = 6;
AgtypeLexer.T__6 = 7;
AgtypeLexer.T__7 = 8;
AgtypeLexer.T__8 = 9;
AgtypeLexer.T__9 = 10;
AgtypeLexer.T__10 = 11;
AgtypeLexer.T__11 = 12;
AgtypeLexer.T__12 = 13;
AgtypeLexer.IDENT = 14;
AgtypeLexer.STRING = 15;
AgtypeLexer.INTEGER = 16;
AgtypeLexer.RegularFloat = 17;
AgtypeLexer.ExponentFloat = 18;
AgtypeLexer.WS = 19;
