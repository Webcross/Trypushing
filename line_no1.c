/*Show contents of a file with line no. */
#include <stdio.h>
int main () {
   FILE *fp;
   int c;
   int count=2;
   char path[50];

   printf("\nInput file path: \a");
   scanf("%s",path);
   fp = fopen(path,"r");
   if(fp == NULL)
   {
      perror("Error");
      return(-1);
   }
   printf("\033[0;32m");
   printf("1");
   printf("\033[0m");
   do {
      c = fgetc(fp);
      if( c==EOF ) {
         break ;
      }
      printf("%c", c);
      if(c=='\n')
      {
	      printf("\033[0;32m");
	      printf("\n%d",count);
	      count++;
	      printf("\033[0m");
	      
      }
   } while(1);

   fclose(fp);
   return(0);
}
