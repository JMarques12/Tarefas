#include <stdio.h>
#include<locale.h>

FILE *entrada;
char arqentrada[] = "entrada.csv";

int main(){
	char linha[100];
	entrada = fopen(arqentrada,"r");
	while(fgets(linha,100,entrada)!= NULL){
		printf("%s",linha);
	}
	fclose(entrada);
	return 0;
}
