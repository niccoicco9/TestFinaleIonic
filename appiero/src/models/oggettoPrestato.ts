export class OggettoPrestato {
    nome: string;            // Che cosa è
    aChi: string;  
    quando: string;
    fotografia: any;
    ritornato: boolean;     // Se true è ritornato mentre se false è ancora in prestito    
    
    constructor(nome: string, 
                aChi: string,
                quando: string,
                fotografia: any,
                ritornato: boolean) {
        this.nome = nome;
        this.aChi = aChi;
        this.quando = quando;
        this.fotografia = fotografia;
        this.ritornato = ritornato;
    }
}