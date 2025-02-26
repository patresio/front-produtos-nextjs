import ColecaoProduto from '@/core/ColecaoProduto'
import type Produto from '@/core/model/Produto'
import { useEffect, useState } from 'react'

const useProdutos = () => {
  const repo = new ColecaoProduto()

  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    ;(async () => {
      listarProdutos()
    })()
    //TODO: adicionar dependências
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function listarProdutos() {
    const resultado = await repo.listar()
    setProdutos(resultado)
  }
  return {
    produtos,
    listarProdutos
  }
}

export default useProdutos
