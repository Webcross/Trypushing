/*Declaration*/
%{
#include<stdio.h>
#include"parser.tab.cpp"
extern int yylex();
%}

/*Rules*/
%%
[0-9]+[.][0-9]+ {yylval.floatval=atoi(yytext); return FLOAT_LITERAL;}
[0-9]+          {yylval.intval=atoi(yytext); return INT_LITERAL;}
"+"            {return PLUS;}
"-"            {return MINUS;}
"*"            {return MULT;}
"/"            {return DIV;}
";"            {return SEMI;}
"\n"           printf("\n");
"\t"           printf("\t");
"\b"           printf("\b");
"\f"           printf("\f");
"\a"           printf("\a");



%%

/*code*/

void  main1()
{
yylex();
}
