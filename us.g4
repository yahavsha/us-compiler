grammar us;

/*****************************************************************************
 *                               Parser rules
 *****************************************************************************/

/****************** General ******************/
program
   : START_PROGRAM meanie_instruction? code_block? END_PROGRAM
   ;

meanie_instruction:
    ASSIGNMENT MEANIE_PROGRAM
    ;

code_block
   : function_decl* statement+
   ;
   
statement
   : comment
   | declaration
   | condition_block
   | expression
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
   | VAR_DECL_ASSGN? assignment_expression
   ;

/****************** Expressions ******************/

expression
    :   assignment_expression
    ;

assignment_expression
    :   conditional_expression
    |   unary_expression ASSIGNMENT expression
    // |   unaryExpression assignmentOperator assignmentExpression
    // |   DigitSequence // for
    ;

conditional_expression
    :   logical_or_expression //('?' expression ':' conditionalExpression)?
    ;

logical_or_expression
    :   logical_and_expression
    |   logical_or_expression LOGICAL_OR logical_or_expression
    ;

logical_and_expression
    // :   inclusive_or_expression
    :   equality_expression
    |   logical_and_expression LOGICAL_AND logical_and_expression
    ;

// Note: I'm leaving it here in case we want to extend the grammer at later point
// If we do, we should also remove the error of "inclusive_or_expression" above in the "logical_and_expression"
// and replace it with the "equality_expression"
// inclusive_or_expression
//     :   exclusive_or_expression
//     |   inclusive_or_expression '|' inclusive_or_expression
//     ;

// exclusive_or_expression
//     :   and_expression
//     |   exclusive_or_expression '^' exclusive_or_expression
//     ;

// and_expression
//     :   equality_expression
//     |   and_expression '&' and_expression
//     ;

equality_expression
    :   relational_expression
    |   equality_expression COMPARE_EQUAL equality_expression
    |   equality_expression COMPARE_NOT_EQUAL equality_expression
    ;

relational_expression
    // :   shift_expression
    :   additive_expression
    |   relational_expression '<' relational_expression
    |   relational_expression '>' relational_expression
    |   relational_expression '<=' relational_expression
    |   relational_expression '>=' relational_expression
    ;

// Again, I'm leaving it here for future use.
// shift_expression
//     :   additive_expression
//     |   shift_expression '<<' shift_expression
//     |   shift_expression '>>' shift_expression
//     ;

additive_expression
    :   multiplicative_expression
    |   additive_expression PLUS additive_expression
    |   additive_expression MINUS additive_expression
    ;


multiplicative_expression
    :   power_expression
    |   multiplicative_expression MULTIPLY multiplicative_expression
    |   multiplicative_expression DIVIDE multiplicative_expression
    |   multiplicative_expression MOD multiplicative_expression
    ;

power_expression
    : cast_expression
    | power_expression POWER power_expression
    ;
    
cast_expression
    :   unary_expression
    |   VAR_CAST cast_expression VAR_CAST_TO type_specifiers
    ;

unary_expression
    :   postfix_expression
    |   PLUS unary_expression
    |   MINUS unary_expression
    |   UNARY_PLUS unary_expression
    |   UNARY_MINUS unary_expression
    ;

postfix_expression
    :   primary_expression
    |   postfix_expression UNARY_PLUS
    |   postfix_expression UNARY_MINUS
    ;

primary_expression
    : LABEL
    | NUMBER
    | STRING
    | NULL
    | TRUE
    | FALSE
    | LPAREN expression RPAREN
    | function_call
    ;

type_specifiers
    : TSTRING
    | TNUMBER
    | TBOOLEAN
    ;


/****************** Control Flows ******************/

// If-Else
condition_block
    : IF expression CONDITION_SUFFIX statement* IF_SUFFIX
    | IF expression CONDITION_SUFFIX statement* IF_SUFFIX (ELSE condition_block)? ELSE statement* ELSE_SUFFIX
    ;

// For loop
for_block
    : FOR LPAREN expression? SEMICOLON expression? RPAREN FOR_TERMINATOR LPAREN expression RPAREN statement* FOR_SUFFIX
    ;

// While
while_block
    : WHILE expression CONDITION_SUFFIX statement* WHILE_SUFFIX
    ;

/****************** Conditions Definitions ******************/
// conditional_expression
//     : and_chained_conditional_expression (LOGICAL_AND and_chained_conditional_expression)*
//     ;

// and_chained_conditional_expression
//     : single_conditional_expression (LOGICAL_OR single_conditional_expression)*
//     ;

// single_conditional_expression
//     : expression COMPARE_EQUAL expression
//     | expression COMPARE_NOT_EQUAL expression
//     | expression COMPARE_GREATER expression
//     | expression COMPARE_SMALLER expression
//     ;


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
MEANIE_PROGRAM:         'meanie';

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
UNARY_PLUS              : '++';
UNARY_MINUS             : '--';

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