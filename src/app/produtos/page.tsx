'use client'
import useProdutos from "@/hooks/useProdutos";

const Produtos = () => {
  const { produtos } = useProdutos()
  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.codigo} className="border border-zinc-300 rounded-sm h-40 flex flex-col justify-center items-center w-full px-6 py-2 gap-5 my-4">
          <span>{produto.codigo}</span>
          <h1>{produto.nome}</h1>
          <p>{produto.preco}</p>
        </div>
      ))}
    </div>
   );
}
 
export default Produtos;