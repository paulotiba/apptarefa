export default function Cabecalho(props) {
    return (
        <div className="flex bg-cover h-1/3 hbg-no-repeat bg-img-tarefas">
            <div className={`
              flex flex-1  h-full justify-center items-center
              bg-gradient-to-r
              from-red-600 via-transparent to-orange-600 
            `}>
                {props.children}
            </div>
        </div>
    )
}