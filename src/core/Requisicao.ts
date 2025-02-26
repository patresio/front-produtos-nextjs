export default class Requisicao {
  static headers: any = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }

  static porta: number = 8080
  static urlBase: string = `http://localhost:${Requisicao.porta}`

  static async requisicaoGenerica(
    metodo: string,
    complementoURL: string,
    dadosBody?: any
  ) {
    const dados = await fetch(Requisicao.urlBase + `${complementoURL}`, {
      method: metodo,
      headers: Requisicao.headers,
      body: JSON.stringify(dadosBody)
    })
    const resultado = await dados.json()
    return resultado
  }

  static async get(complementoURL: string) {
    return await Requisicao.requisicaoGenerica('GET', complementoURL)
  }
}
