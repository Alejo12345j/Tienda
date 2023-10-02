export default class Tabs{
    constructor(idElemento){
        this.tabs = document.getElementById(idElemento);
        this.nav = this.tabs.querySelector('.tabs');

        // Conprabmos que el elemento que clickeamos tenga clase 
        this.nav.addEventListener('click', (e) => {
            if([...e.target.classList].includes('tabs__button')){
                // Obtenemos la tab que queramos mostar.
                const tab = e.target.dataset.tab;

                // Quitamos la clase active de algunas otras tabs que la tengan
                if(this.tabs.querySelector('.tab--active')){
                    this.tabs.querySelector('.tab--active').classList.remove('tab--active');
                }

                // Quitamos la clase active de algunas otras botones que la tengan
                if(this.tabs.querySelector('.tabs__button--active')){
                    this.tabs.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
                }

                // Agregamos la clase active al tab
                this.tabs.querySelector(`#${tab}`).classList.add('tab--active');
                // agregamos la clase active al boton.
                e.target.classList.add('tabs__button--active');
            }
        });
    }
}