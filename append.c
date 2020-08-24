/*Append data of one file to  other*/
#include <stdio.h>
int main () {
   FILE *fp,*fs;
   int c;
   char path1[50];
   char path2[50];

   printf("\nInput 1st file path: \a");
   scanf("%s",path1);
   printf("\nInput 2nd file path: \a");
   scanf("%s",path2);
   fp = fopen(path1,"r");
   fs = fopen(path2,"a");
   if((fp == NULL)||(fs==NULL))
   {
      perror("Error");
      return(-1);
   }

   do {
      c = fgetc(fp);
      if(c==EOF )
         break ;
      fputc(c,fs);
   } while(1);

   fclose(fp);
   fclose(fs);
   return(0);
}
