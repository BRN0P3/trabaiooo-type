import type { Tarefa } from './tipo';

export const tarefas: Tarefa[] = [

    {id: 1, titulo: "Estudar matematica", prioridade: "alta", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id: 2, titulo: "Praticar flauta", prioridade: "media", status: "em_andamento", tags: ["estudo"], criadaEm: new Date()},
    {id: 3, titulo: "Revisar tcc", prioridade: "baixa", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id: 4, titulo: "Atualizar firmware do celular", prioridade: "media", status: "em_andamento", tags: ["desenvolvimento"], criadaEm: new Date()},
    {id: 5, titulo: "Escrever poemas", prioridade: "alta", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
]