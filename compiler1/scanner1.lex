/*Declaration*/
%{
#include<stdio.h>
extern int yylex();
%}

/*Rules*/
%%
[0-9]+[.][0-9]+  printf("FLOAT: %s\t", yytext);
[0-9]+         printf("INT: %s\t", yytext);
"+"            printf("PLUS\t");
"-"            printf("MINUS\t");
"*"            printf("Multiply\t");
"/"            printf("DIVIDE\t");
";"            printf("SEMICOLON\t");
.              ;


%%

/*code*/

void main1()
{
yylex();
}
