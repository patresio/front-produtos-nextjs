'use client'
import useProdutos from "@/hooks/useProdutos";

const Produtos = () => {
  const { produtos } = useProdutos()
  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.codigo}>
          <h1>{produto.nome}</h1>
          <p>{produto.preco}</p>
        </div>
      ))}
    </div>
   );
}
 
export default Produtos;