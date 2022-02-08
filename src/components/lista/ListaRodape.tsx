import ListaTarefas from "../../model/ListaTarefas";

interface ListaRodapeProps {
  tarefas: ListaTarefas;
  mudou: (tarefas: ListaTarefas) => void;
}

export default function ListaRodape(props: ListaRodapeProps) {
  const { tarefas, mudou } = props;
  function renderizarQtdeDeitens() {
    return (
      <>
        <span className="hidden text-gray-300 lg:inline">
          {tarefas.quantidade}
          {tarefas.quantidade === 0
            ? " Nenhuma Tarefa Encontrada"
            : tarefas.quantidade === 1
            ? " Tarefa Encontrada"
            : " Tarefas Encontradas"}
        </span>
        <span></span>
      </>
    );
  }
  function renderizarBotoesFiltro() {
    return <div></div>;
  }
  function renderizarExcluirConcluidas() {
    return <div></div>;
  }

  return (
    <li className="flex p-5">
      {renderizarQtdeDeitens()}
      {renderizarBotoesFiltro()}
      {renderizarExcluirConcluidas()}
    </li>
  );
}
