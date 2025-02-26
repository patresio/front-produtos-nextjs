import Requisicao from './Requisicao'

export default class ColecaoProduto {
  async listar() {
    return await Requisicao.get('/produtos')
  }
}
