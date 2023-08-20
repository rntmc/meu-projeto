import { GitHubUser } from "./GitHubUser.js"


//classe que vai conter a logica dos dados
// como os dados serao estruturados
export class Favorites {
  constructor(root) { /*root eh o #app*/
    this.root = document.querySelector(root)
    this.load()
  }

  async add(username) {
    try {

      const userExists = this.entries.find(entry => entry.login === username)

      if(userExists) {
        throw new Error('Usuario ja cadastrado')
      }

      const user = await GitHubUser.search(username) 

      if(user.login === undefined) {
        throw new Error('Usuario nao encontrado!')
      }

      this.entries = [user, ...this.entries] //coloca o novo usuario e traz o array que ja tinha
      this.update()
      this.save()

    } catch (error) {
      alert(error.message)
    }
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  delete(user) {
    // higher-order functions: ex. (map, filter, find, reduce,..)
    const filteredEntries = this.entries.filter(entry => 
      entry.login !== user.login)

      this.entries = filteredEntries
      this.update()
      this.save()
    }
  }


// classe que vai criar a visualizacao e eventos do HTML
export class FavoritesView extends Favorites { /*favoritesView construira a visualizacao */
  constructor(root) {
    super(root) /*O super eh o construtor acima(em Favorites), que criara o this.route */

    this.tbody = this.root.querySelector('table tbody')

    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const {value} = this.root.querySelector('.search input')

      this.add(value)

    }
  }

  update() { /*toda vez que mudar um dado, essa funcao sera chamada */
    this.removeAllTr()
  
    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `imagem de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOK = confirm('Tem certeza que deseja deletar essa linha?')
        if(isOK) {
          this.delete(user)
        }
      }
            
      this.tbody.append(row)
    })

  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img src="http://github.com/rntmc.png" alt="imagem de rntmc">
        <a href="github.com/rntmc">
          <p>Renato Carrino</p>
          <span>rntmc</span>
        </a>
       </td>
      <td class="repositories">
      76
      </td>
      <td class="followers">
        9589
      </td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    });
  }
}