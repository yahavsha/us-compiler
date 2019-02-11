// Generated from us.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var usListener = require('./usListener').usListener;
var usVisitor = require('./usVisitor').usVisitor;

var grammarFileName = "us.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00037\u012e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0003\u0002\u0003\u0002\u0005\u00023\n\u0002\u0003\u0002",
    "\u0005\u00026\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0007\u0004>\n\u0004\f\u0004\u000e\u0004A\u000b",
    "\u0004\u0003\u0004\u0006\u0004D\n\u0004\r\u0004\u000e\u0004E\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005P\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007X\n\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\ta\n\t\f\t\u000e\t",
    "d\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0007\fp\n\f\f\f\u000e\fs\u000b\f\u0003",
    "\r\u0003\r\u0003\r\u0007\rx\n\r\f\r\u000e\r{\u000b\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u0082\n\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0005\u000f\u0090\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0007\u0010\u0096\n\u0010\f\u0010\u000e\u0010\u0099\u000b\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0007\u0010\u00a1\n\u0010\f\u0010\u000e\u0010\u00a4\u000b\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00a9\n\u0010\u0003\u0010",
    "\u0003\u0010\u0007\u0010\u00ad\n\u0010\f\u0010\u000e\u0010\u00b0\u000b",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00b4\n\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00b9\n\u0011\u0003\u0011\u0003",
    "\u0011\u0005\u0011\u00bd\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00c5\n\u0011\f\u0011",
    "\u000e\u0011\u00c8\u000b\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00d0\n\u0012\f\u0012\u000e",
    "\u0012\u00d3\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0007\u0013\u00da\n\u0013\f\u0013\u000e\u0013\u00dd\u000b",
    "\u0013\u0003\u0014\u0005\u0014\u00e0\n\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u00e5\n\u0014\u0003\u0014\u0007\u0014\u00e8",
    "\n\u0014\f\u0014\u000e\u0014\u00eb\u000b\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u00fd\n\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0005\u0016\u0102\n\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0007\u0017\u010c\n\u0017\f\u0017\u000e\u0017\u010f\u000b\u0017\u0003",
    "\u0017\u0005\u0017\u0112\n\u0017\u0003\u0017\u0003\u0017\u0007\u0017",
    "\u0116\n\u0017\f\u0017\u000e\u0017\u0119\u000b\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0125\n\u0018\f\u0018\u000e",
    "\u0018\u0128\u000b\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u012c\n",
    "\u0018\u0003\u0018\u0002\u0002\u0019\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.\u0002\u0006\u0003",
    "\u000256\u0003\u0002,-\u0003\u0002\t\u000b\u0003\u0002./\u0002\u0145",
    "\u00020\u0003\u0002\u0002\u0002\u00049\u0003\u0002\u0002\u0002\u0006",
    "?\u0003\u0002\u0002\u0002\bO\u0003\u0002\u0002\u0002\nQ\u0003\u0002",
    "\u0002\u0002\fW\u0003\u0002\u0002\u0002\u000eY\u0003\u0002\u0002\u0002",
    "\u0010]\u0003\u0002\u0002\u0002\u0012e\u0003\u0002\u0002\u0002\u0014",
    "j\u0003\u0002\u0002\u0002\u0016l\u0003\u0002\u0002\u0002\u0018t\u0003",
    "\u0002\u0002\u0002\u001a\u0081\u0003\u0002\u0002\u0002\u001c\u008f\u0003",
    "\u0002\u0002\u0002\u001e\u00b3\u0003\u0002\u0002\u0002 \u00b5\u0003",
    "\u0002\u0002\u0002\"\u00cb\u0003\u0002\u0002\u0002$\u00d6\u0003\u0002",
    "\u0002\u0002&\u00df\u0003\u0002\u0002\u0002(\u00fc\u0003\u0002\u0002",
    "\u0002*\u0101\u0003\u0002\u0002\u0002,\u0103\u0003\u0002\u0002\u0002",
    ".\u011c\u0003\u0002\u0002\u000202\u0007\u0003\u0002\u000213\u0005\u0004",
    "\u0003\u000221\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000235\u0003",
    "\u0002\u0002\u000246\u0005\u0006\u0004\u000254\u0003\u0002\u0002\u0002",
    "56\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u000278\u0007\u0004\u0002",
    "\u00028\u0003\u0003\u0002\u0002\u00029:\u0007\b\u0002\u0002:;\u0007",
    "(\u0002\u0002;\u0005\u0003\u0002\u0002\u0002<>\u0005,\u0017\u0002=<",
    "\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002",
    "\u0002?@\u0003\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002A?\u0003\u0002",
    "\u0002\u0002BD\u0005\b\u0005\u0002CB\u0003\u0002\u0002\u0002DE\u0003",
    "\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002",
    "F\u0007\u0003\u0002\u0002\u0002GP\u0005\n\u0006\u0002HP\u0005\u0010",
    "\t\u0002IP\u0005\f\u0007\u0002JP\u0005\u000e\b\u0002KP\u0005\u001e\u0010",
    "\u0002LP\u0005 \u0011\u0002MP\u0005\"\u0012\u0002NP\u0005*\u0016\u0002",
    "OG\u0003\u0002\u0002\u0002OH\u0003\u0002\u0002\u0002OI\u0003\u0002\u0002",
    "\u0002OJ\u0003\u0002\u0002\u0002OK\u0003\u0002\u0002\u0002OL\u0003\u0002",
    "\u0002\u0002OM\u0003\u0002\u0002\u0002ON\u0003\u0002\u0002\u0002P\t",
    "\u0003\u0002\u0002\u0002QR\t\u0002\u0002\u0002R\u000b\u0003\u0002\u0002",
    "\u0002ST\u0007\f\u0002\u0002TX\u00074\u0002\u0002UV\u0007\r\u0002\u0002",
    "VX\u0005\u000e\b\u0002WS\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002",
    "\u0002X\r\u0003\u0002\u0002\u0002YZ\u00074\u0002\u0002Z[\u0007\b\u0002",
    "\u0002[\\\u0005\u0010\t\u0002\\\u000f\u0003\u0002\u0002\u0002]b\u0005",
    "\u0016\f\u0002^_\t\u0003\u0002\u0002_a\u0005\u0016\f\u0002`^\u0003\u0002",
    "\u0002\u0002ad\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002bc\u0003",
    "\u0002\u0002\u0002c\u0011\u0003\u0002\u0002\u0002db\u0003\u0002\u0002",
    "\u0002ef\u0007\u000e\u0002\u0002fg\u00074\u0002\u0002gh\u0007\u000f",
    "\u0002\u0002hi\u0005\u0014\u000b\u0002i\u0013\u0003\u0002\u0002\u0002",
    "jk\t\u0004\u0002\u0002k\u0015\u0003\u0002\u0002\u0002lq\u0005\u0018",
    "\r\u0002mn\t\u0005\u0002\u0002np\u0005\u0018\r\u0002om\u0003\u0002\u0002",
    "\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qr\u0003\u0002",
    "\u0002\u0002r\u0017\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002",
    "ty\u0005\u001a\u000e\u0002uv\u00071\u0002\u0002vx\u0005\u001a\u000e",
    "\u0002wu\u0003\u0002\u0002\u0002x{\u0003\u0002\u0002\u0002yw\u0003\u0002",
    "\u0002\u0002yz\u0003\u0002\u0002\u0002z\u0019\u0003\u0002\u0002\u0002",
    "{y\u0003\u0002\u0002\u0002|}\u0007,\u0002\u0002}\u0082\u0005\u001a\u000e",
    "\u0002~\u007f\u0007-\u0002\u0002\u007f\u0082\u0005\u001a\u000e\u0002",
    "\u0080\u0082\u0005\u001c\u000f\u0002\u0081|\u0003\u0002\u0002\u0002",
    "\u0081~\u0003\u0002\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002",
    "\u0082\u001b\u0003\u0002\u0002\u0002\u0083\u0090\u00074\u0002\u0002",
    "\u0084\u0090\u00072\u0002\u0002\u0085\u0090\u00073\u0002\u0002\u0086",
    "\u0090\u0007\u0007\u0002\u0002\u0087\u0090\u0007\u0005\u0002\u0002\u0088",
    "\u0090\u0007\u0006\u0002\u0002\u0089\u008a\u0007*\u0002\u0002\u008a",
    "\u008b\u0005\u0010\t\u0002\u008b\u008c\u0007+\u0002\u0002\u008c\u0090",
    "\u0003\u0002\u0002\u0002\u008d\u0090\u0005\u0012\n\u0002\u008e\u0090",
    "\u0005.\u0018\u0002\u008f\u0083\u0003\u0002\u0002\u0002\u008f\u0084",
    "\u0003\u0002\u0002\u0002\u008f\u0085\u0003\u0002\u0002\u0002\u008f\u0086",
    "\u0003\u0002\u0002\u0002\u008f\u0087\u0003\u0002\u0002\u0002\u008f\u0088",
    "\u0003\u0002\u0002\u0002\u008f\u0089\u0003\u0002\u0002\u0002\u008f\u008d",
    "\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u0090\u001d",
    "\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u0017\u0002\u0002\u0092\u0093",
    "\u0005$\u0013\u0002\u0093\u0097\u0007\u0018\u0002\u0002\u0094\u0096",
    "\u0005\b\u0005\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0096\u0099",
    "\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0003\u0002\u0002\u0002\u0098\u009a\u0003\u0002\u0002\u0002\u0099\u0097",
    "\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0019\u0002\u0002\u009b\u00b4",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0007\u0017\u0002\u0002\u009d\u009e",
    "\u0005$\u0013\u0002\u009e\u00a2\u0007\u0018\u0002\u0002\u009f\u00a1",
    "\u0005\b\u0005\u0002\u00a0\u009f\u0003\u0002\u0002\u0002\u00a1\u00a4",
    "\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3",
    "\u0003\u0002\u0002\u0002\u00a3\u00a5\u0003\u0002\u0002\u0002\u00a4\u00a2",
    "\u0003\u0002\u0002\u0002\u00a5\u00a8\u0007\u0019\u0002\u0002\u00a6\u00a7",
    "\u0007\u001a\u0002\u0002\u00a7\u00a9\u0005\u001e\u0010\u0002\u00a8\u00a6",
    "\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa",
    "\u0003\u0002\u0002\u0002\u00aa\u00ae\u0007\u001a\u0002\u0002\u00ab\u00ad",
    "\u0005\b\u0005\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad\u00b0",
    "\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00ae\u00af",
    "\u0003\u0002\u0002\u0002\u00af\u00b1\u0003\u0002\u0002\u0002\u00b0\u00ae",
    "\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007\u001b\u0002\u0002\u00b2\u00b4",
    "\u0003\u0002\u0002\u0002\u00b3\u0091\u0003\u0002\u0002\u0002\u00b3\u009c",
    "\u0003\u0002\u0002\u0002\u00b4\u001f\u0003\u0002\u0002\u0002\u00b5\u00b6",
    "\u0007\u001c\u0002\u0002\u00b6\u00b8\u0007*\u0002\u0002\u00b7\u00b9",
    "\u0005\u0010\t\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b8\u00b9",
    "\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bc",
    "\u0007)\u0002\u0002\u00bb\u00bd\u0005\u0010\t\u0002\u00bc\u00bb\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00be\u0003",
    "\u0002\u0002\u0002\u00be\u00bf\u0007+\u0002\u0002\u00bf\u00c0\u0007",
    "\u001d\u0002\u0002\u00c0\u00c1\u0007*\u0002\u0002\u00c1\u00c2\u0005",
    "\u0010\t\u0002\u00c2\u00c6\u0007+\u0002\u0002\u00c3\u00c5\u0005\b\u0005",
    "\u0002\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002",
    "\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002",
    "\u0002\u00c7\u00c9\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002",
    "\u0002\u00c9\u00ca\u0007\u001e\u0002\u0002\u00ca!\u0003\u0002\u0002",
    "\u0002\u00cb\u00cc\u0007\u001f\u0002\u0002\u00cc\u00cd\u0005$\u0013",
    "\u0002\u00cd\u00d1\u0007\u0018\u0002\u0002\u00ce\u00d0\u0005\b\u0005",
    "\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002\u00d0\u00d3\u0003\u0002\u0002",
    "\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002",
    "\u0002\u00d2\u00d4\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002",
    "\u0002\u00d4\u00d5\u0007 \u0002\u0002\u00d5#\u0003\u0002\u0002\u0002",
    "\u00d6\u00db\u0005&\u0014\u0002\u00d7\u00d8\u0007\u0014\u0002\u0002",
    "\u00d8\u00da\u0005&\u0014\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002",
    "\u00da\u00dd\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002",
    "\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc%\u0003\u0002\u0002\u0002",
    "\u00dd\u00db\u0003\u0002\u0002\u0002\u00de\u00e0\u0007\u0016\u0002\u0002",
    "\u00df\u00de\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002",
    "\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e9\u0005(\u0015\u0002",
    "\u00e2\u00e4\u0007\u0015\u0002\u0002\u00e3\u00e5\u0007\u0016\u0002\u0002",
    "\u00e4\u00e3\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002",
    "\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e8\u0005(\u0015\u0002",
    "\u00e7\u00e2\u0003\u0002\u0002\u0002\u00e8\u00eb\u0003\u0002\u0002\u0002",
    "\u00e9\u00e7\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002",
    "\u00ea\'\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002",
    "\u00ec\u00ed\u0005\u0010\t\u0002\u00ed\u00ee\u0007\u0010\u0002\u0002",
    "\u00ee\u00ef\u0005\u0010\t\u0002\u00ef\u00fd\u0003\u0002\u0002\u0002",
    "\u00f0\u00f1\u0005\u0010\t\u0002\u00f1\u00f2\u0007\u0011\u0002\u0002",
    "\u00f2\u00f3\u0005\u0010\t\u0002\u00f3\u00fd\u0003\u0002\u0002\u0002",
    "\u00f4\u00f5\u0005\u0010\t\u0002\u00f5\u00f6\u0007\u0012\u0002\u0002",
    "\u00f6\u00f7\u0005\u0010\t\u0002\u00f7\u00fd\u0003\u0002\u0002\u0002",
    "\u00f8\u00f9\u0005\u0010\t\u0002\u00f9\u00fa\u0007\u0013\u0002\u0002",
    "\u00fa\u00fb\u0005\u0010\t\u0002\u00fb\u00fd\u0003\u0002\u0002\u0002",
    "\u00fc\u00ec\u0003\u0002\u0002\u0002\u00fc\u00f0\u0003\u0002\u0002\u0002",
    "\u00fc\u00f4\u0003\u0002\u0002\u0002\u00fc\u00f8\u0003\u0002\u0002\u0002",
    "\u00fd)\u0003\u0002\u0002\u0002\u00fe\u0102\u0007!\u0002\u0002\u00ff",
    "\u0100\u0007!\u0002\u0002\u0100\u0102\u0005\u0010\t\u0002\u0101\u00fe",
    "\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0102+",
    "\u0003\u0002\u0002\u0002\u0103\u0104\u0007\"\u0002\u0002\u0104\u0111",
    "\u00074\u0002\u0002\u0105\u0106\u0007#\u0002\u0002\u0106\u0107\u0007",
    "*\u0002\u0002\u0107\u0108\u00074\u0002\u0002\u0108\u010d\u0003\u0002",
    "\u0002\u0002\u0109\u010a\u0007$\u0002\u0002\u010a\u010c\u00074\u0002",
    "\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010c\u010f\u0003\u0002\u0002",
    "\u0002\u010d\u010b\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002",
    "\u0002\u010e\u0110\u0003\u0002\u0002\u0002\u010f\u010d\u0003\u0002\u0002",
    "\u0002\u0110\u0112\u0007+\u0002\u0002\u0111\u0105\u0003\u0002\u0002",
    "\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112\u0113\u0003\u0002\u0002",
    "\u0002\u0113\u0117\u0007%\u0002\u0002\u0114\u0116\u0005\b\u0005\u0002",
    "\u0115\u0114\u0003\u0002\u0002\u0002\u0116\u0119\u0003\u0002\u0002\u0002",
    "\u0117\u0115\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002",
    "\u0118\u011a\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002",
    "\u011a\u011b\u0007&\u0002\u0002\u011b-\u0003\u0002\u0002\u0002\u011c",
    "\u011d\u0007\'\u0002\u0002\u011d\u012b\u00074\u0002\u0002\u011e\u011f",
    "\u0007#\u0002\u0002\u011f\u0120\u0007*\u0002\u0002\u0120\u0121\u0005",
    "\u0010\t\u0002\u0121\u0126\u0003\u0002\u0002\u0002\u0122\u0123\u0007",
    "$\u0002\u0002\u0123\u0125\u0005\u0010\t\u0002\u0124\u0122\u0003\u0002",
    "\u0002\u0002\u0125\u0128\u0003\u0002\u0002\u0002\u0126\u0124\u0003\u0002",
    "\u0002\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u0129\u0003\u0002",
    "\u0002\u0002\u0128\u0126\u0003\u0002\u0002\u0002\u0129\u012a\u0007+",
    "\u0002\u0002\u012a\u012c\u0003\u0002\u0002\u0002\u012b\u011e\u0003\u0002",
    "\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c/\u0003\u0002",
    "\u0002\u0002!25?EOWbqy\u0081\u008f\u0097\u00a2\u00a8\u00ae\u00b3\u00b8",
    "\u00bc\u00c6\u00d1\u00db\u00df\u00e4\u00e9\u00fc\u0101\u010d\u0111\u0117",
    "\u0126\u012b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'hey'", "'byes'", "'yupyup'", "'nop'", "'...'", 
                     "'is'", "'Words'", "'Number'", "'Answer'", "'sup'", 
                     "'woah'", "'cosplay'", "'as'", "'same'", "'diff'", 
                     "'big'", "'small'", "'also'", "'or'", "'nah'", "'anw'", 
                     "'?'", "'yay!'", "'gosh'", "'ugh!'", "'hides'", "'til'", 
                     "'gotcha!'", "'huh'", "'stop!'", "'gimme'", "'friend'", 
                     "'with'", "','", "':'", "'hihi!'", "'summons'", "'meanie'", 
                     "';'", "'('", "')'", "'+'", "'-'", "'*'", "'/'", "'%'", 
                     "'^'" ];

var symbolicNames = [ null, "START_PROGRAM", "END_PROGRAM", "TRUE", "FALSE", 
                      "NULL", "ASSIGNMENT", "TSTRING", "TNUMBER", "TBOOLEAN", 
                      "VAR_DECL", "VAR_DECL_ASSGN", "VAR_CAST", "VAR_CAST_TO", 
                      "COMPARE_EQUAL", "COMPARE_NOT_EQUAL", "COMPARE_GREATER", 
                      "COMPARE_SMALLER", "LOGICAL_AND", "LOGICAL_OR", "LOGICAL_NOT", 
                      "IF", "CONDITION_SUFFIX", "IF_SUFFIX", "ELSE", "ELSE_SUFFIX", 
                      "FOR", "FOR_TERMINATOR", "FOR_SUFFIX", "WHILE", "WHILE_SUFFIX", 
                      "RETURN", "FUNCTION", "FUNCTION_ARGS", "FUNCTION_ARGS_SEP", 
                      "FUNCTION_DECL_SUFFIX", "FUNCTION_SUFFIX", "FUNCTION_CALL", 
                      "MEANIE_PROGRAM", "SEMICOLON", "LPAREN", "RPAREN", 
                      "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "MOD", "POWER", 
                      "NUMBER", "STRING", "LABEL", "COMMENT", "MULTI_LINE_COMMENT", 
                      "UNKNOWN" ];

var ruleNames =  [ "program", "meanie_instruction", "code_block", "statement", 
                   "comment", "declaration", "assignment", "expression", 
                   "casting", "type_specifiers", "multiplying_expression", 
                   "pow_expression", "signed_atom", "atom", "condition_block", 
                   "for_block", "while_block", "conditional_expression", 
                   "and_chained_conditional_expression", "single_conditional_expression", 
                   "return_statement", "function_decl", "function_call" ];

function usParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

usParser.prototype = Object.create(antlr4.Parser.prototype);
usParser.prototype.constructor = usParser;

Object.defineProperty(usParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

usParser.EOF = antlr4.Token.EOF;
usParser.START_PROGRAM = 1;
usParser.END_PROGRAM = 2;
usParser.TRUE = 3;
usParser.FALSE = 4;
usParser.NULL = 5;
usParser.ASSIGNMENT = 6;
usParser.TSTRING = 7;
usParser.TNUMBER = 8;
usParser.TBOOLEAN = 9;
usParser.VAR_DECL = 10;
usParser.VAR_DECL_ASSGN = 11;
usParser.VAR_CAST = 12;
usParser.VAR_CAST_TO = 13;
usParser.COMPARE_EQUAL = 14;
usParser.COMPARE_NOT_EQUAL = 15;
usParser.COMPARE_GREATER = 16;
usParser.COMPARE_SMALLER = 17;
usParser.LOGICAL_AND = 18;
usParser.LOGICAL_OR = 19;
usParser.LOGICAL_NOT = 20;
usParser.IF = 21;
usParser.CONDITION_SUFFIX = 22;
usParser.IF_SUFFIX = 23;
usParser.ELSE = 24;
usParser.ELSE_SUFFIX = 25;
usParser.FOR = 26;
usParser.FOR_TERMINATOR = 27;
usParser.FOR_SUFFIX = 28;
usParser.WHILE = 29;
usParser.WHILE_SUFFIX = 30;
usParser.RETURN = 31;
usParser.FUNCTION = 32;
usParser.FUNCTION_ARGS = 33;
usParser.FUNCTION_ARGS_SEP = 34;
usParser.FUNCTION_DECL_SUFFIX = 35;
usParser.FUNCTION_SUFFIX = 36;
usParser.FUNCTION_CALL = 37;
usParser.MEANIE_PROGRAM = 38;
usParser.SEMICOLON = 39;
usParser.LPAREN = 40;
usParser.RPAREN = 41;
usParser.PLUS = 42;
usParser.MINUS = 43;
usParser.MULTIPLY = 44;
usParser.DIVIDE = 45;
usParser.MOD = 46;
usParser.POWER = 47;
usParser.NUMBER = 48;
usParser.STRING = 49;
usParser.LABEL = 50;
usParser.COMMENT = 51;
usParser.MULTI_LINE_COMMENT = 52;
usParser.UNKNOWN = 53;

usParser.RULE_program = 0;
usParser.RULE_meanie_instruction = 1;
usParser.RULE_code_block = 2;
usParser.RULE_statement = 3;
usParser.RULE_comment = 4;
usParser.RULE_declaration = 5;
usParser.RULE_assignment = 6;
usParser.RULE_expression = 7;
usParser.RULE_casting = 8;
usParser.RULE_type_specifiers = 9;
usParser.RULE_multiplying_expression = 10;
usParser.RULE_pow_expression = 11;
usParser.RULE_signed_atom = 12;
usParser.RULE_atom = 13;
usParser.RULE_condition_block = 14;
usParser.RULE_for_block = 15;
usParser.RULE_while_block = 16;
usParser.RULE_conditional_expression = 17;
usParser.RULE_and_chained_conditional_expression = 18;
usParser.RULE_single_conditional_expression = 19;
usParser.RULE_return_statement = 20;
usParser.RULE_function_decl = 21;
usParser.RULE_function_call = 22;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.START_PROGRAM = function() {
    return this.getToken(usParser.START_PROGRAM, 0);
};

ProgramContext.prototype.END_PROGRAM = function() {
    return this.getToken(usParser.END_PROGRAM, 0);
};

ProgramContext.prototype.meanie_instruction = function() {
    return this.getTypedRuleContext(Meanie_instructionContext,0);
};

ProgramContext.prototype.code_block = function() {
    return this.getTypedRuleContext(Code_blockContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.ProgramContext = ProgramContext;

usParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, usParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.match(usParser.START_PROGRAM);
        this.state = 48;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===usParser.ASSIGNMENT) {
            this.state = 47;
            this.meanie_instruction();
        }

        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << usParser.TRUE) | (1 << usParser.FALSE) | (1 << usParser.NULL) | (1 << usParser.VAR_DECL) | (1 << usParser.VAR_DECL_ASSGN) | (1 << usParser.VAR_CAST) | (1 << usParser.IF) | (1 << usParser.FOR) | (1 << usParser.WHILE) | (1 << usParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (usParser.FUNCTION - 32)) | (1 << (usParser.FUNCTION_CALL - 32)) | (1 << (usParser.LPAREN - 32)) | (1 << (usParser.PLUS - 32)) | (1 << (usParser.MINUS - 32)) | (1 << (usParser.NUMBER - 32)) | (1 << (usParser.STRING - 32)) | (1 << (usParser.LABEL - 32)) | (1 << (usParser.COMMENT - 32)) | (1 << (usParser.MULTI_LINE_COMMENT - 32)))) !== 0)) {
            this.state = 50;
            this.code_block();
        }

        this.state = 53;
        this.match(usParser.END_PROGRAM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Meanie_instructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_meanie_instruction;
    return this;
}

Meanie_instructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Meanie_instructionContext.prototype.constructor = Meanie_instructionContext;

Meanie_instructionContext.prototype.ASSIGNMENT = function() {
    return this.getToken(usParser.ASSIGNMENT, 0);
};

Meanie_instructionContext.prototype.MEANIE_PROGRAM = function() {
    return this.getToken(usParser.MEANIE_PROGRAM, 0);
};

Meanie_instructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterMeanie_instruction(this);
	}
};

Meanie_instructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitMeanie_instruction(this);
	}
};

Meanie_instructionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitMeanie_instruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Meanie_instructionContext = Meanie_instructionContext;

usParser.prototype.meanie_instruction = function() {

    var localctx = new Meanie_instructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, usParser.RULE_meanie_instruction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.match(usParser.ASSIGNMENT);
        this.state = 56;
        this.match(usParser.MEANIE_PROGRAM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Code_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_code_block;
    return this;
}

Code_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Code_blockContext.prototype.constructor = Code_blockContext;

Code_blockContext.prototype.function_decl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Function_declContext);
    } else {
        return this.getTypedRuleContext(Function_declContext,i);
    }
};

Code_blockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Code_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterCode_block(this);
	}
};

Code_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitCode_block(this);
	}
};

Code_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitCode_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Code_blockContext = Code_blockContext;

usParser.prototype.code_block = function() {

    var localctx = new Code_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, usParser.RULE_code_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===usParser.FUNCTION) {
            this.state = 58;
            this.function_decl();
            this.state = 63;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 65; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 64;
            this.statement();
            this.state = 67; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << usParser.TRUE) | (1 << usParser.FALSE) | (1 << usParser.NULL) | (1 << usParser.VAR_DECL) | (1 << usParser.VAR_DECL_ASSGN) | (1 << usParser.VAR_CAST) | (1 << usParser.IF) | (1 << usParser.FOR) | (1 << usParser.WHILE) | (1 << usParser.RETURN))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (usParser.FUNCTION_CALL - 37)) | (1 << (usParser.LPAREN - 37)) | (1 << (usParser.PLUS - 37)) | (1 << (usParser.MINUS - 37)) | (1 << (usParser.NUMBER - 37)) | (1 << (usParser.STRING - 37)) | (1 << (usParser.LABEL - 37)) | (1 << (usParser.COMMENT - 37)) | (1 << (usParser.MULTI_LINE_COMMENT - 37)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
};

StatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

StatementContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

StatementContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

StatementContext.prototype.condition_block = function() {
    return this.getTypedRuleContext(Condition_blockContext,0);
};

StatementContext.prototype.for_block = function() {
    return this.getTypedRuleContext(For_blockContext,0);
};

StatementContext.prototype.while_block = function() {
    return this.getTypedRuleContext(While_blockContext,0);
};

StatementContext.prototype.return_statement = function() {
    return this.getTypedRuleContext(Return_statementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.StatementContext = StatementContext;

usParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, usParser.RULE_statement);
    try {
        this.state = 77;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 69;
            this.comment();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 70;
            this.expression();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 71;
            this.declaration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 72;
            this.assignment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 73;
            this.condition_block();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 74;
            this.for_block();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 75;
            this.while_block();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 76;
            this.return_statement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.COMMENT = function() {
    return this.getToken(usParser.COMMENT, 0);
};

CommentContext.prototype.MULTI_LINE_COMMENT = function() {
    return this.getToken(usParser.MULTI_LINE_COMMENT, 0);
};

CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitComment(this);
	}
};

CommentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitComment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.CommentContext = CommentContext;

usParser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, usParser.RULE_comment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        _la = this._input.LA(1);
        if(!(_la===usParser.COMMENT || _la===usParser.MULTI_LINE_COMMENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.VAR_DECL = function() {
    return this.getToken(usParser.VAR_DECL, 0);
};

DeclarationContext.prototype.LABEL = function() {
    return this.getToken(usParser.LABEL, 0);
};

DeclarationContext.prototype.VAR_DECL_ASSGN = function() {
    return this.getToken(usParser.VAR_DECL_ASSGN, 0);
};

DeclarationContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitDeclaration(this);
	}
};

DeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.DeclarationContext = DeclarationContext;

usParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, usParser.RULE_declaration);
    try {
        this.state = 85;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case usParser.VAR_DECL:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.match(usParser.VAR_DECL);
            this.state = 82;
            this.match(usParser.LABEL);
            break;
        case usParser.VAR_DECL_ASSGN:
            this.enterOuterAlt(localctx, 2);
            this.state = 83;
            this.match(usParser.VAR_DECL_ASSGN);
            this.state = 84;
            this.assignment();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.LABEL = function() {
    return this.getToken(usParser.LABEL, 0);
};

AssignmentContext.prototype.ASSIGNMENT = function() {
    return this.getToken(usParser.ASSIGNMENT, 0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitAssignment(this);
	}
};

AssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.AssignmentContext = AssignmentContext;

usParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, usParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.match(usParser.LABEL);
        this.state = 88;
        this.match(usParser.ASSIGNMENT);
        this.state = 89;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.multiplying_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Multiplying_expressionContext);
    } else {
        return this.getTypedRuleContext(Multiplying_expressionContext,i);
    }
};

ExpressionContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.PLUS);
    } else {
        return this.getToken(usParser.PLUS, i);
    }
};


ExpressionContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.MINUS);
    } else {
        return this.getToken(usParser.MINUS, i);
    }
};


ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.ExpressionContext = ExpressionContext;

usParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, usParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.multiplying_expression();
        this.state = 96;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 92;
                _la = this._input.LA(1);
                if(!(_la===usParser.PLUS || _la===usParser.MINUS)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 93;
                this.multiplying_expression(); 
            }
            this.state = 98;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CastingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_casting;
    return this;
}

CastingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CastingContext.prototype.constructor = CastingContext;

CastingContext.prototype.VAR_CAST = function() {
    return this.getToken(usParser.VAR_CAST, 0);
};

CastingContext.prototype.LABEL = function() {
    return this.getToken(usParser.LABEL, 0);
};

CastingContext.prototype.VAR_CAST_TO = function() {
    return this.getToken(usParser.VAR_CAST_TO, 0);
};

CastingContext.prototype.type_specifiers = function() {
    return this.getTypedRuleContext(Type_specifiersContext,0);
};

CastingContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterCasting(this);
	}
};

CastingContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitCasting(this);
	}
};

CastingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitCasting(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.CastingContext = CastingContext;

usParser.prototype.casting = function() {

    var localctx = new CastingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, usParser.RULE_casting);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(usParser.VAR_CAST);
        this.state = 100;
        this.match(usParser.LABEL);
        this.state = 101;
        this.match(usParser.VAR_CAST_TO);
        this.state = 102;
        this.type_specifiers();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Type_specifiersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_type_specifiers;
    return this;
}

Type_specifiersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_specifiersContext.prototype.constructor = Type_specifiersContext;

Type_specifiersContext.prototype.TSTRING = function() {
    return this.getToken(usParser.TSTRING, 0);
};

Type_specifiersContext.prototype.TNUMBER = function() {
    return this.getToken(usParser.TNUMBER, 0);
};

Type_specifiersContext.prototype.TBOOLEAN = function() {
    return this.getToken(usParser.TBOOLEAN, 0);
};

Type_specifiersContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterType_specifiers(this);
	}
};

Type_specifiersContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitType_specifiers(this);
	}
};

Type_specifiersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitType_specifiers(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Type_specifiersContext = Type_specifiersContext;

usParser.prototype.type_specifiers = function() {

    var localctx = new Type_specifiersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, usParser.RULE_type_specifiers);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << usParser.TSTRING) | (1 << usParser.TNUMBER) | (1 << usParser.TBOOLEAN))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Multiplying_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_multiplying_expression;
    return this;
}

Multiplying_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Multiplying_expressionContext.prototype.constructor = Multiplying_expressionContext;

Multiplying_expressionContext.prototype.pow_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Pow_expressionContext);
    } else {
        return this.getTypedRuleContext(Pow_expressionContext,i);
    }
};

Multiplying_expressionContext.prototype.MULTIPLY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.MULTIPLY);
    } else {
        return this.getToken(usParser.MULTIPLY, i);
    }
};


Multiplying_expressionContext.prototype.DIVIDE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.DIVIDE);
    } else {
        return this.getToken(usParser.DIVIDE, i);
    }
};


Multiplying_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterMultiplying_expression(this);
	}
};

Multiplying_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitMultiplying_expression(this);
	}
};

Multiplying_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitMultiplying_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Multiplying_expressionContext = Multiplying_expressionContext;

usParser.prototype.multiplying_expression = function() {

    var localctx = new Multiplying_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, usParser.RULE_multiplying_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.pow_expression();
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===usParser.MULTIPLY || _la===usParser.DIVIDE) {
            this.state = 107;
            _la = this._input.LA(1);
            if(!(_la===usParser.MULTIPLY || _la===usParser.DIVIDE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 108;
            this.pow_expression();
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Pow_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_pow_expression;
    return this;
}

Pow_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Pow_expressionContext.prototype.constructor = Pow_expressionContext;

Pow_expressionContext.prototype.signed_atom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Signed_atomContext);
    } else {
        return this.getTypedRuleContext(Signed_atomContext,i);
    }
};

Pow_expressionContext.prototype.POWER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.POWER);
    } else {
        return this.getToken(usParser.POWER, i);
    }
};


Pow_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterPow_expression(this);
	}
};

Pow_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitPow_expression(this);
	}
};

Pow_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitPow_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Pow_expressionContext = Pow_expressionContext;

usParser.prototype.pow_expression = function() {

    var localctx = new Pow_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, usParser.RULE_pow_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.signed_atom();
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===usParser.POWER) {
            this.state = 115;
            this.match(usParser.POWER);
            this.state = 116;
            this.signed_atom();
            this.state = 121;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Signed_atomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_signed_atom;
    return this;
}

Signed_atomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Signed_atomContext.prototype.constructor = Signed_atomContext;

Signed_atomContext.prototype.PLUS = function() {
    return this.getToken(usParser.PLUS, 0);
};

Signed_atomContext.prototype.signed_atom = function() {
    return this.getTypedRuleContext(Signed_atomContext,0);
};

Signed_atomContext.prototype.MINUS = function() {
    return this.getToken(usParser.MINUS, 0);
};

Signed_atomContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

Signed_atomContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterSigned_atom(this);
	}
};

Signed_atomContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitSigned_atom(this);
	}
};

Signed_atomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitSigned_atom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Signed_atomContext = Signed_atomContext;

usParser.prototype.signed_atom = function() {

    var localctx = new Signed_atomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, usParser.RULE_signed_atom);
    try {
        this.state = 127;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case usParser.PLUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 122;
            this.match(usParser.PLUS);
            this.state = 123;
            this.signed_atom();
            break;
        case usParser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 124;
            this.match(usParser.MINUS);
            this.state = 125;
            this.signed_atom();
            break;
        case usParser.TRUE:
        case usParser.FALSE:
        case usParser.NULL:
        case usParser.VAR_CAST:
        case usParser.FUNCTION_CALL:
        case usParser.LPAREN:
        case usParser.NUMBER:
        case usParser.STRING:
        case usParser.LABEL:
            this.enterOuterAlt(localctx, 3);
            this.state = 126;
            this.atom();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.LABEL = function() {
    return this.getToken(usParser.LABEL, 0);
};

AtomContext.prototype.NUMBER = function() {
    return this.getToken(usParser.NUMBER, 0);
};

AtomContext.prototype.STRING = function() {
    return this.getToken(usParser.STRING, 0);
};

AtomContext.prototype.NULL = function() {
    return this.getToken(usParser.NULL, 0);
};

AtomContext.prototype.TRUE = function() {
    return this.getToken(usParser.TRUE, 0);
};

AtomContext.prototype.FALSE = function() {
    return this.getToken(usParser.FALSE, 0);
};

AtomContext.prototype.LPAREN = function() {
    return this.getToken(usParser.LPAREN, 0);
};

AtomContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AtomContext.prototype.RPAREN = function() {
    return this.getToken(usParser.RPAREN, 0);
};

AtomContext.prototype.casting = function() {
    return this.getTypedRuleContext(CastingContext,0);
};

AtomContext.prototype.function_call = function() {
    return this.getTypedRuleContext(Function_callContext,0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.AtomContext = AtomContext;

usParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, usParser.RULE_atom);
    try {
        this.state = 141;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case usParser.LABEL:
            this.enterOuterAlt(localctx, 1);
            this.state = 129;
            this.match(usParser.LABEL);
            break;
        case usParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 130;
            this.match(usParser.NUMBER);
            break;
        case usParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 131;
            this.match(usParser.STRING);
            break;
        case usParser.NULL:
            this.enterOuterAlt(localctx, 4);
            this.state = 132;
            this.match(usParser.NULL);
            break;
        case usParser.TRUE:
            this.enterOuterAlt(localctx, 5);
            this.state = 133;
            this.match(usParser.TRUE);
            break;
        case usParser.FALSE:
            this.enterOuterAlt(localctx, 6);
            this.state = 134;
            this.match(usParser.FALSE);
            break;
        case usParser.LPAREN:
            this.enterOuterAlt(localctx, 7);
            this.state = 135;
            this.match(usParser.LPAREN);
            this.state = 136;
            this.expression();
            this.state = 137;
            this.match(usParser.RPAREN);
            break;
        case usParser.VAR_CAST:
            this.enterOuterAlt(localctx, 8);
            this.state = 139;
            this.casting();
            break;
        case usParser.FUNCTION_CALL:
            this.enterOuterAlt(localctx, 9);
            this.state = 140;
            this.function_call();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Condition_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_condition_block;
    return this;
}

Condition_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Condition_blockContext.prototype.constructor = Condition_blockContext;

Condition_blockContext.prototype.IF = function() {
    return this.getToken(usParser.IF, 0);
};

Condition_blockContext.prototype.conditional_expression = function() {
    return this.getTypedRuleContext(Conditional_expressionContext,0);
};

Condition_blockContext.prototype.CONDITION_SUFFIX = function() {
    return this.getToken(usParser.CONDITION_SUFFIX, 0);
};

Condition_blockContext.prototype.IF_SUFFIX = function() {
    return this.getToken(usParser.IF_SUFFIX, 0);
};

Condition_blockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Condition_blockContext.prototype.ELSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.ELSE);
    } else {
        return this.getToken(usParser.ELSE, i);
    }
};


Condition_blockContext.prototype.ELSE_SUFFIX = function() {
    return this.getToken(usParser.ELSE_SUFFIX, 0);
};

Condition_blockContext.prototype.condition_block = function() {
    return this.getTypedRuleContext(Condition_blockContext,0);
};

Condition_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterCondition_block(this);
	}
};

Condition_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitCondition_block(this);
	}
};

Condition_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitCondition_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Condition_blockContext = Condition_blockContext;

usParser.prototype.condition_block = function() {

    var localctx = new Condition_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, usParser.RULE_condition_block);
    var _la = 0; // Token type
    try {
        this.state = 177;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 143;
            this.match(usParser.IF);
            this.state = 144;
            this.conditional_expression();
            this.state = 145;
            this.match(usParser.CONDITION_SUFFIX);
            this.state = 149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << usParser.TRUE) | (1 << usParser.FALSE) | (1 << usParser.NULL) | (1 << usParser.VAR_DECL) | (1 << usParser.VAR_DECL_ASSGN) | (1 << usParser.VAR_CAST) | (1 << usParser.IF) | (1 << usParser.FOR) | (1 << usParser.WHILE) | (1 << usParser.RETURN))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (usParser.FUNCTION_CALL - 37)) | (1 << (usParser.LPAREN - 37)) | (1 << (usParser.PLUS - 37)) | (1 << (usParser.MINUS - 37)) | (1 << (usParser.NUMBER - 37)) | (1 << (usParser.STRING - 37)) | (1 << (usParser.LABEL - 37)) | (1 << (usParser.COMMENT - 37)) | (1 << (usParser.MULTI_LINE_COMMENT - 37)))) !== 0)) {
                this.state = 146;
                this.statement();
                this.state = 151;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 152;
            this.match(usParser.IF_SUFFIX);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 154;
            this.match(usParser.IF);
            this.state = 155;
            this.conditional_expression();
            this.state = 156;
            this.match(usParser.CONDITION_SUFFIX);
            this.state = 160;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << usParser.TRUE) | (1 << usParser.FALSE) | (1 << usParser.NULL) | (1 << usParser.VAR_DECL) | (1 << usParser.VAR_DECL_ASSGN) | (1 << usParser.VAR_CAST) | (1 << usParser.IF) | (1 << usParser.FOR) | (1 << usParser.WHILE) | (1 << usParser.RETURN))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (usParser.FUNCTION_CALL - 37)) | (1 << (usParser.LPAREN - 37)) | (1 << (usParser.PLUS - 37)) | (1 << (usParser.MINUS - 37)) | (1 << (usParser.NUMBER - 37)) | (1 << (usParser.STRING - 37)) | (1 << (usParser.LABEL - 37)) | (1 << (usParser.COMMENT - 37)) | (1 << (usParser.MULTI_LINE_COMMENT - 37)))) !== 0)) {
                this.state = 157;
                this.statement();
                this.state = 162;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 163;
            this.match(usParser.IF_SUFFIX);
            this.state = 166;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
            if(la_===1) {
                this.state = 164;
                this.match(usParser.ELSE);
                this.state = 165;
                this.condition_block();

            }
            this.state = 168;
            this.match(usParser.ELSE);
            this.state = 172;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << usParser.TRUE) | (1 << usParser.FALSE) | (1 << usParser.NULL) | (1 << usParser.VAR_DECL) | (1 << usParser.VAR_DECL_ASSGN) | (1 << usParser.VAR_CAST) | (1 << usParser.IF) | (1 << usParser.FOR) | (1 << usParser.WHILE) | (1 << usParser.RETURN))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (usParser.FUNCTION_CALL - 37)) | (1 << (usParser.LPAREN - 37)) | (1 << (usParser.PLUS - 37)) | (1 << (usParser.MINUS - 37)) | (1 << (usParser.NUMBER - 37)) | (1 << (usParser.STRING - 37)) | (1 << (usParser.LABEL - 37)) | (1 << (usParser.COMMENT - 37)) | (1 << (usParser.MULTI_LINE_COMMENT - 37)))) !== 0)) {
                this.state = 169;
                this.statement();
                this.state = 174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 175;
            this.match(usParser.ELSE_SUFFIX);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function For_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_for_block;
    return this;
}

For_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
For_blockContext.prototype.constructor = For_blockContext;

For_blockContext.prototype.FOR = function() {
    return this.getToken(usParser.FOR, 0);
};

For_blockContext.prototype.LPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.LPAREN);
    } else {
        return this.getToken(usParser.LPAREN, i);
    }
};


For_blockContext.prototype.SEMICOLON = function() {
    return this.getToken(usParser.SEMICOLON, 0);
};

For_blockContext.prototype.RPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.RPAREN);
    } else {
        return this.getToken(usParser.RPAREN, i);
    }
};


For_blockContext.prototype.FOR_TERMINATOR = function() {
    return this.getToken(usParser.FOR_TERMINATOR, 0);
};

For_blockContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

For_blockContext.prototype.FOR_SUFFIX = function() {
    return this.getToken(usParser.FOR_SUFFIX, 0);
};

For_blockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

For_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterFor_block(this);
	}
};

For_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitFor_block(this);
	}
};

For_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitFor_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.For_blockContext = For_blockContext;

usParser.prototype.for_block = function() {

    var localctx = new For_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, usParser.RULE_for_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(usParser.FOR);
        this.state = 180;
        this.match(usParser.LPAREN);
        this.state = 182;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << usParser.TRUE) | (1 << usParser.FALSE) | (1 << usParser.NULL) | (1 << usParser.VAR_CAST))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (usParser.FUNCTION_CALL - 37)) | (1 << (usParser.LPAREN - 37)) | (1 << (usParser.PLUS - 37)) | (1 << (usParser.MINUS - 37)) | (1 << (usParser.NUMBER - 37)) | (1 << (usParser.STRING - 37)) | (1 << (usParser.LABEL - 37)))) !== 0)) {
            this.state = 181;
            this.expression();
        }

        this.state = 184;
        this.match(usParser.SEMICOLON);
        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << usParser.TRUE) | (1 << usParser.FALSE) | (1 << usParser.NULL) | (1 << usParser.VAR_CAST))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (usParser.FUNCTION_CALL - 37)) | (1 << (usParser.LPAREN - 37)) | (1 << (usParser.PLUS - 37)) | (1 << (usParser.MINUS - 37)) | (1 << (usParser.NUMBER - 37)) | (1 << (usParser.STRING - 37)) | (1 << (usParser.LABEL - 37)))) !== 0)) {
            this.state = 185;
            this.expression();
        }

        this.state = 188;
        this.match(usParser.RPAREN);
        this.state = 189;
        this.match(usParser.FOR_TERMINATOR);
        this.state = 190;
        this.match(usParser.LPAREN);
        this.state = 191;
        this.expression();
        this.state = 192;
        this.match(usParser.RPAREN);
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << usParser.TRUE) | (1 << usParser.FALSE) | (1 << usParser.NULL) | (1 << usParser.VAR_DECL) | (1 << usParser.VAR_DECL_ASSGN) | (1 << usParser.VAR_CAST) | (1 << usParser.IF) | (1 << usParser.FOR) | (1 << usParser.WHILE) | (1 << usParser.RETURN))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (usParser.FUNCTION_CALL - 37)) | (1 << (usParser.LPAREN - 37)) | (1 << (usParser.PLUS - 37)) | (1 << (usParser.MINUS - 37)) | (1 << (usParser.NUMBER - 37)) | (1 << (usParser.STRING - 37)) | (1 << (usParser.LABEL - 37)) | (1 << (usParser.COMMENT - 37)) | (1 << (usParser.MULTI_LINE_COMMENT - 37)))) !== 0)) {
            this.state = 193;
            this.statement();
            this.state = 198;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 199;
        this.match(usParser.FOR_SUFFIX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function While_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_while_block;
    return this;
}

While_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_blockContext.prototype.constructor = While_blockContext;

While_blockContext.prototype.WHILE = function() {
    return this.getToken(usParser.WHILE, 0);
};

While_blockContext.prototype.conditional_expression = function() {
    return this.getTypedRuleContext(Conditional_expressionContext,0);
};

While_blockContext.prototype.CONDITION_SUFFIX = function() {
    return this.getToken(usParser.CONDITION_SUFFIX, 0);
};

While_blockContext.prototype.WHILE_SUFFIX = function() {
    return this.getToken(usParser.WHILE_SUFFIX, 0);
};

While_blockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

While_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterWhile_block(this);
	}
};

While_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitWhile_block(this);
	}
};

While_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitWhile_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.While_blockContext = While_blockContext;

usParser.prototype.while_block = function() {

    var localctx = new While_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, usParser.RULE_while_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(usParser.WHILE);
        this.state = 202;
        this.conditional_expression();
        this.state = 203;
        this.match(usParser.CONDITION_SUFFIX);
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << usParser.TRUE) | (1 << usParser.FALSE) | (1 << usParser.NULL) | (1 << usParser.VAR_DECL) | (1 << usParser.VAR_DECL_ASSGN) | (1 << usParser.VAR_CAST) | (1 << usParser.IF) | (1 << usParser.FOR) | (1 << usParser.WHILE) | (1 << usParser.RETURN))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (usParser.FUNCTION_CALL - 37)) | (1 << (usParser.LPAREN - 37)) | (1 << (usParser.PLUS - 37)) | (1 << (usParser.MINUS - 37)) | (1 << (usParser.NUMBER - 37)) | (1 << (usParser.STRING - 37)) | (1 << (usParser.LABEL - 37)) | (1 << (usParser.COMMENT - 37)) | (1 << (usParser.MULTI_LINE_COMMENT - 37)))) !== 0)) {
            this.state = 204;
            this.statement();
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 210;
        this.match(usParser.WHILE_SUFFIX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Conditional_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_conditional_expression;
    return this;
}

Conditional_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Conditional_expressionContext.prototype.constructor = Conditional_expressionContext;

Conditional_expressionContext.prototype.and_chained_conditional_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(And_chained_conditional_expressionContext);
    } else {
        return this.getTypedRuleContext(And_chained_conditional_expressionContext,i);
    }
};

Conditional_expressionContext.prototype.LOGICAL_AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.LOGICAL_AND);
    } else {
        return this.getToken(usParser.LOGICAL_AND, i);
    }
};


Conditional_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterConditional_expression(this);
	}
};

Conditional_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitConditional_expression(this);
	}
};

Conditional_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitConditional_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Conditional_expressionContext = Conditional_expressionContext;

usParser.prototype.conditional_expression = function() {

    var localctx = new Conditional_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, usParser.RULE_conditional_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.and_chained_conditional_expression();
        this.state = 217;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===usParser.LOGICAL_AND) {
            this.state = 213;
            this.match(usParser.LOGICAL_AND);
            this.state = 214;
            this.and_chained_conditional_expression();
            this.state = 219;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function And_chained_conditional_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_and_chained_conditional_expression;
    return this;
}

And_chained_conditional_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
And_chained_conditional_expressionContext.prototype.constructor = And_chained_conditional_expressionContext;

And_chained_conditional_expressionContext.prototype.single_conditional_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Single_conditional_expressionContext);
    } else {
        return this.getTypedRuleContext(Single_conditional_expressionContext,i);
    }
};

And_chained_conditional_expressionContext.prototype.LOGICAL_NOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.LOGICAL_NOT);
    } else {
        return this.getToken(usParser.LOGICAL_NOT, i);
    }
};


And_chained_conditional_expressionContext.prototype.LOGICAL_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.LOGICAL_OR);
    } else {
        return this.getToken(usParser.LOGICAL_OR, i);
    }
};


And_chained_conditional_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterAnd_chained_conditional_expression(this);
	}
};

And_chained_conditional_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitAnd_chained_conditional_expression(this);
	}
};

And_chained_conditional_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitAnd_chained_conditional_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.And_chained_conditional_expressionContext = And_chained_conditional_expressionContext;

usParser.prototype.and_chained_conditional_expression = function() {

    var localctx = new And_chained_conditional_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, usParser.RULE_and_chained_conditional_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===usParser.LOGICAL_NOT) {
            this.state = 220;
            this.match(usParser.LOGICAL_NOT);
        }

        this.state = 223;
        this.single_conditional_expression();
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===usParser.LOGICAL_OR) {
            this.state = 224;
            this.match(usParser.LOGICAL_OR);
            this.state = 226;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===usParser.LOGICAL_NOT) {
                this.state = 225;
                this.match(usParser.LOGICAL_NOT);
            }

            this.state = 228;
            this.single_conditional_expression();
            this.state = 233;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Single_conditional_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_single_conditional_expression;
    return this;
}

Single_conditional_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Single_conditional_expressionContext.prototype.constructor = Single_conditional_expressionContext;

Single_conditional_expressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Single_conditional_expressionContext.prototype.COMPARE_EQUAL = function() {
    return this.getToken(usParser.COMPARE_EQUAL, 0);
};

Single_conditional_expressionContext.prototype.COMPARE_NOT_EQUAL = function() {
    return this.getToken(usParser.COMPARE_NOT_EQUAL, 0);
};

Single_conditional_expressionContext.prototype.COMPARE_GREATER = function() {
    return this.getToken(usParser.COMPARE_GREATER, 0);
};

Single_conditional_expressionContext.prototype.COMPARE_SMALLER = function() {
    return this.getToken(usParser.COMPARE_SMALLER, 0);
};

Single_conditional_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterSingle_conditional_expression(this);
	}
};

Single_conditional_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitSingle_conditional_expression(this);
	}
};

Single_conditional_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitSingle_conditional_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Single_conditional_expressionContext = Single_conditional_expressionContext;

usParser.prototype.single_conditional_expression = function() {

    var localctx = new Single_conditional_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, usParser.RULE_single_conditional_expression);
    try {
        this.state = 250;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 234;
            this.expression();
            this.state = 235;
            this.match(usParser.COMPARE_EQUAL);
            this.state = 236;
            this.expression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 238;
            this.expression();
            this.state = 239;
            this.match(usParser.COMPARE_NOT_EQUAL);
            this.state = 240;
            this.expression();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 242;
            this.expression();
            this.state = 243;
            this.match(usParser.COMPARE_GREATER);
            this.state = 244;
            this.expression();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 246;
            this.expression();
            this.state = 247;
            this.match(usParser.COMPARE_SMALLER);
            this.state = 248;
            this.expression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Return_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_return_statement;
    return this;
}

Return_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_statementContext.prototype.constructor = Return_statementContext;

Return_statementContext.prototype.RETURN = function() {
    return this.getToken(usParser.RETURN, 0);
};

Return_statementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Return_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterReturn_statement(this);
	}
};

Return_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitReturn_statement(this);
	}
};

Return_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitReturn_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Return_statementContext = Return_statementContext;

usParser.prototype.return_statement = function() {

    var localctx = new Return_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, usParser.RULE_return_statement);
    try {
        this.state = 255;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 252;
            this.match(usParser.RETURN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 253;
            this.match(usParser.RETURN);
            this.state = 254;
            this.expression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_function_decl;
    return this;
}

Function_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_declContext.prototype.constructor = Function_declContext;

Function_declContext.prototype.FUNCTION = function() {
    return this.getToken(usParser.FUNCTION, 0);
};

Function_declContext.prototype.LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.LABEL);
    } else {
        return this.getToken(usParser.LABEL, i);
    }
};


Function_declContext.prototype.FUNCTION_DECL_SUFFIX = function() {
    return this.getToken(usParser.FUNCTION_DECL_SUFFIX, 0);
};

Function_declContext.prototype.FUNCTION_SUFFIX = function() {
    return this.getToken(usParser.FUNCTION_SUFFIX, 0);
};

Function_declContext.prototype.RPAREN = function() {
    return this.getToken(usParser.RPAREN, 0);
};

Function_declContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Function_declContext.prototype.FUNCTION_ARGS = function() {
    return this.getToken(usParser.FUNCTION_ARGS, 0);
};

Function_declContext.prototype.LPAREN = function() {
    return this.getToken(usParser.LPAREN, 0);
};

Function_declContext.prototype.FUNCTION_ARGS_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.FUNCTION_ARGS_SEP);
    } else {
        return this.getToken(usParser.FUNCTION_ARGS_SEP, i);
    }
};


Function_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterFunction_decl(this);
	}
};

Function_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitFunction_decl(this);
	}
};

Function_declContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitFunction_decl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Function_declContext = Function_declContext;

usParser.prototype.function_decl = function() {

    var localctx = new Function_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, usParser.RULE_function_decl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 257;
        this.match(usParser.FUNCTION);
        this.state = 258;
        this.match(usParser.LABEL);
        this.state = 271;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===usParser.FUNCTION_ARGS) {
            this.state = 259;
            this.match(usParser.FUNCTION_ARGS);
            this.state = 260;
            this.match(usParser.LPAREN);
            this.state = 261;
            this.match(usParser.LABEL);
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===usParser.FUNCTION_ARGS_SEP) {
                this.state = 263;
                this.match(usParser.FUNCTION_ARGS_SEP);
                this.state = 264;
                this.match(usParser.LABEL);
                this.state = 269;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 270;
            this.match(usParser.RPAREN);
        }

        this.state = 273;
        this.match(usParser.FUNCTION_DECL_SUFFIX);
        this.state = 277;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << usParser.TRUE) | (1 << usParser.FALSE) | (1 << usParser.NULL) | (1 << usParser.VAR_DECL) | (1 << usParser.VAR_DECL_ASSGN) | (1 << usParser.VAR_CAST) | (1 << usParser.IF) | (1 << usParser.FOR) | (1 << usParser.WHILE) | (1 << usParser.RETURN))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (usParser.FUNCTION_CALL - 37)) | (1 << (usParser.LPAREN - 37)) | (1 << (usParser.PLUS - 37)) | (1 << (usParser.MINUS - 37)) | (1 << (usParser.NUMBER - 37)) | (1 << (usParser.STRING - 37)) | (1 << (usParser.LABEL - 37)) | (1 << (usParser.COMMENT - 37)) | (1 << (usParser.MULTI_LINE_COMMENT - 37)))) !== 0)) {
            this.state = 274;
            this.statement();
            this.state = 279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 280;
        this.match(usParser.FUNCTION_SUFFIX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usParser.RULE_function_call;
    return this;
}

Function_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_callContext.prototype.constructor = Function_callContext;

Function_callContext.prototype.FUNCTION_CALL = function() {
    return this.getToken(usParser.FUNCTION_CALL, 0);
};

Function_callContext.prototype.LABEL = function() {
    return this.getToken(usParser.LABEL, 0);
};

Function_callContext.prototype.RPAREN = function() {
    return this.getToken(usParser.RPAREN, 0);
};

Function_callContext.prototype.FUNCTION_ARGS = function() {
    return this.getToken(usParser.FUNCTION_ARGS, 0);
};

Function_callContext.prototype.LPAREN = function() {
    return this.getToken(usParser.LPAREN, 0);
};

Function_callContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Function_callContext.prototype.FUNCTION_ARGS_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usParser.FUNCTION_ARGS_SEP);
    } else {
        return this.getToken(usParser.FUNCTION_ARGS_SEP, i);
    }
};


Function_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.enterFunction_call(this);
	}
};

Function_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof usListener ) {
        listener.exitFunction_call(this);
	}
};

Function_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usVisitor ) {
        return visitor.visitFunction_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usParser.Function_callContext = Function_callContext;

usParser.prototype.function_call = function() {

    var localctx = new Function_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, usParser.RULE_function_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        this.match(usParser.FUNCTION_CALL);
        this.state = 283;
        this.match(usParser.LABEL);
        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===usParser.FUNCTION_ARGS) {
            this.state = 284;
            this.match(usParser.FUNCTION_ARGS);
            this.state = 285;
            this.match(usParser.LPAREN);
            this.state = 286;
            this.expression();
            this.state = 292;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===usParser.FUNCTION_ARGS_SEP) {
                this.state = 288;
                this.match(usParser.FUNCTION_ARGS_SEP);
                this.state = 289;
                this.expression();
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 295;
            this.match(usParser.RPAREN);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.usParser = usParser;
