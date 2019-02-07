grammar us;

/*****************************************************************************
 *                               Parser rules
 *****************************************************************************/

/****************** General ******************/
program
   : START_PROGRAM code_block? END_PROGRAM
   ;


code_block
   : function_decl* statement+
   ;
   
statement
   : comment
   | expression
   | declaration
   | assignment
   | condition_block
   | for_block
   | while_block
   | return_statement
   ;


comment
   : COMMENT
   | MULTI_LINE_COMMENT
   ;

/****************** Variables decl ******************/
declaration
   : VAR_DECL LABEL
   | VAR_DECL_ASSGN assignment
   ;

assignment
   : LABEL ASSIGNMENT expression
   ;

/****************** Expressions ******************/
expression
   :
   multiplying_expression ((PLUS | MINUS) multiplying_expression)*
   ;

casting
    : VAR_CAST LABEL VAR_CAST_TO type_specifiers
    ;

type_specifiers
    : TSTRING
    | TNUMBER
    | TBOOLEAN
    ;

multiplying_expression
    : pow_expression ((MULTIPLY | DIVIDE) pow_expression)*
    ;


pow_expression
    : signed_atom (POWER signed_atom)*
    ;

signed_atom
    : PLUS signed_atom
    | MINUS signed_atom
    | atom
    ;

atom
    : LABEL
    | NUMBER
    | STRING
    | NULL
    | TRUE
    | FALSE
    | LPAREN expression RPAREN
    | casting
    | function_call
    ;

/****************** Control Flows ******************/

// If-Else
condition_block
    : IF conditional_expression CONDITION_SUFFIX statement* IF_SUFFIX
    | IF conditional_expression CONDITION_SUFFIX statement* IF_SUFFIX (ELSE condition_block)? ELSE statement* ELSE_SUFFIX
    ;

// For loop
for_block
    : FOR LPAREN expression? SEMICOLON expression? RPAREN FOR_TERMINATOR LPAREN expression RPAREN statement* FOR_SUFFIX
    ;

// While
while_block
    : WHILE conditional_expression CONDITION_SUFFIX statement* WHILE_SUFFIX
    ;

/****************** Conditions Definitions ******************/
conditional_expression
    : and_chained_conditional_expression (LOGICAL_AND and_chained_conditional_expression)*
    ;

and_chained_conditional_expression
    : LOGICAL_NOT? single_conditional_expression (LOGICAL_OR LOGICAL_NOT? single_conditional_expression)*
    ;

single_conditional_expression
    : expression COMPARE_EQUAL expression
    | expression COMPARE_NOT_EQUAL expression
    | expression COMPARE_GREATER expression
    | expression COMPARE_SMALLER expression
    ;


/****************** Functions ******************/
return_statement:
        RETURN              // < stopping w/o returning anything, like "return;"
    |   RETURN expression   // < returning a value, like "return chocolates;"
    ;

function_decl:
    FUNCTION LABEL ((FUNCTION_ARGS LPAREN LABEL) (FUNCTION_ARGS_SEP LABEL)* RPAREN)? FUNCTION_DECL_SUFFIX statement* FUNCTION_SUFFIX
    ;

function_call:
    FUNCTION_CALL LABEL ((FUNCTION_ARGS LPAREN expression) (FUNCTION_ARGS_SEP expression)* RPAREN)?
    ;

/*****************************************************************************
 *                               Lexer rules
 *****************************************************************************/

/*************** Simple Tokens ****************/

// Keywords
START_PROGRAM:          'hey';
END_PROGRAM:            'byes';
TRUE:                   'yupyup';
FALSE:                  'nop';
NULL:                   '...';
ASSIGNMENT:             'is';
TSTRING:                'Words';
TNUMBER:                'Number';
TBOOLEAN:               'Answer';
VAR_DECL:               'sup';
VAR_DECL_ASSGN:         'woah';
VAR_CAST:               'cosplay';
VAR_CAST_TO:            'as';
COMPARE_EQUAL:          'same';
COMPARE_NOT_EQUAL:      'diff';
COMPARE_GREATER:        'big';
COMPARE_SMALLER:        'small';
LOGICAL_AND:            'also';
LOGICAL_OR:             'or';
LOGICAL_NOT:            'nah';
IF:                     'anw';
CONDITION_SUFFIX:       '?';
IF_SUFFIX:              'yay!';
ELSE:                   'gosh';
ELSE_SUFFIX:            'ugh!';
FOR:                    'hides';
FOR_TERMINATOR:         'til';
FOR_SUFFIX:             'gotcha!';
WHILE:                  'huh';
WHILE_SUFFIX:           'stop!';
RETURN:                 'gimme';
FUNCTION:               'friend';
FUNCTION_ARGS:          'with';
FUNCTION_ARGS_SEP:      ',';
FUNCTION_DECL_SUFFIX:   ':';
FUNCTION_SUFFIX:        'hihi!';
FUNCTION_CALL:          'summons';

// Other identifiers
SEMICOLON               : ';';
LPAREN                  : '(';
RPAREN                  : ')';
PLUS                    : '+';
MINUS                   : '-';
MULTIPLY                : '*';
DIVIDE                  : '/';
MOD                     : '%';
POWER                   : '^';

// General values
NUMBER
    :   '0' ([xX] [0-9a-fA-F]+         ([lL]  | [eE] [+-]? [0-9]+)?
    |        [oO] [0-7]+                [lL]?
    |        [bB] [01]+                 [lL]?)
    | ([0-9]+ '.' [0-9]* | '.' [0-9]+)         ([eE] [+-]? [0-9]+)?       [jJ]?  [mk]?
    |  [0-9]+                          ([lL]  | [eE] [+-]? [0-9]+ [jJ]? | [jJ])? [mk]?
    ;

STRING
    : ([uUbB]? [rR]? | [rR]? [uUbB]?)
    ( '\''     ('\\' (([ \t]+ ('\r'? '\n')?)|.) | ~[\\\r\n'])*  '\''
    | '"'      ('\\' (([ \t]+ ('\r'? '\n')?)|.) | ~[\\\r\n"])*  '"'
    | '"""'    ('\\' .                          | ~'\\'     )*? '"""'
    | '\'\'\'' ('\\' .                          | ~'\\'     )*? '\'\'\''
    )
    ;
    

LABEL
    : [a-zA-Z_\p{Emoji}] [a-zA-Z0-9_\p{Emoji}]*
    ;

// Comments
COMMENT:                'shh shh...' ~[\r\n]* -> skip;
MULTI_LINE_COMMENT:     'BARRIER!' (.)*? 'RELEASE!' -> skip;

UNKNOWN: . -> skip;
