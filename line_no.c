/*Show contents of file with line no. */
#include<stdio.h>
#include<stdlib.h>
int main()
{
	FILE *fp;
	char content;
	char path[100];
	int count=1;
	printf("\nInput the path of file: \a");
	scanf("%s",path);
	fp=fopen(path,"r");
	if(fp==NULL)
	{
		perror("Error");
		exit(1);
	}
	do
	{
		content=fgetc(fp);
		if(feof(fp))
			break;
		putchar(content);

		if(content=='\n')
		{
			printf("\n%d",count);
			count++;
		}
	}while(1);
	fclose(fp);
	return 0;
}
