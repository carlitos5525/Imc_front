import { Usuario } from "./usuario.model";

export interface Imc{
    id?: number;
    altura: number;
    peso: number;
    imc_resultado?: number;
    classificacao_imc?: string;
    usuarioId: number;
    usuario?: Usuario

}
