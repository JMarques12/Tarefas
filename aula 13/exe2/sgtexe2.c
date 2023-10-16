#include <stdio.h>

char calcular_direcao_final(char comandos[], int n) {
    char direcao = 'N'; 
	int i; 

    for ( i = 0; i < n; i++) {
        if (comandos[i] == 'E') {
            
            if (direcao == 'N') direcao = 'O';
            else if (direcao == 'L') direcao = 'N';
            else if (direcao == 'S') direcao = 'L';
            else if (direcao == 'O') direcao = 'S';
        } else if (comandos[i] == 'D') {
            
            if (direcao == 'N') direcao = 'L';
            else if (direcao == 'L') direcao = 'S';
            else if (direcao == 'S') direcao = 'O';
            else if (direcao == 'O') direcao = 'N';
        }
    }

    return direcao;
}

int main() {
    FILE *entrada = fopen("esquerda.in", "r");
    FILE *saida = fopen("esquerda.out", "w");

    int n;
    char comandos[1001];

    while (1) {
        fscanf(entrada, "%d", &n);
        if (n == 0) break;

        fscanf(entrada, "%s", comandos);

        
        char direcao_final = calcular_direcao_final(comandos, n);

        
        fprintf(saida, "%c\n", direcao_final);
    }

    fclose(entrada);
    fclose(saida);

    return 0;
}
