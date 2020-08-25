%{
#include<iostream>
#include<stdio.h>
using namespace std;
extern "C" void yyerror(char const *s);
extern "C" int yyparse();
extern "C" int yylex();
%}

%union{
int intval;
float floatval;
}

%start program

%token <intval> INT_LITERAL
%token <floatval> FLOAT_LITERAL
%token SEMI
%type <floatval> exp
%type <floatval> statement
%left PLUS MINUS
%left MULT DIV

%%
program:
       |program statement{cout << "Result: " <<$2 <<endl;};

statement:
	 exp SEMI

exp:
   INT_LITERAL { $$ = $1; }
   |FLOAT_LITERAL { $$ = $1; }
   |exp PLUS exp  { $$ = $1 + $3; }
   |exp MINUS exp { $$ = $1 - $3; }
   |exp MULT exp { $$ = $1 * $3; }
   |exp DIV exp { $$ = $1 / $3; }
   ;
%%
int main(int argc, char **argv)
{
      if(argc < 2)
      {
      cout << "\nProvide a file name." <<endl;
      exit(1);
      }
      FILE *sourcefile = fopen(argv[1],"r");
      if(!sourcefile)
      {
      cout << "\nCouldn't open source file:" << argv[1] << endl;
      exit(1);
      }
      yyin=sourcefile;
      yyparse();
      }

void yyerror(char const *s)
{
    cerr << s << endl;
}






