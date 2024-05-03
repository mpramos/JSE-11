class MoldeGalleta{
    constructor(tipo,sabor,tieneChispasChocolate){
        this.tipo=tipo,
        this.sabor=sabor,
        this.tieneChispasChocolate=tieneChispasChocolate
    }
    get getTipo(){
        return this.tipo

    }
    set setTipo(nuevoTipo){
        this.tipo=nuevoTipo
    }
    get getSabor(){
        return this.sabor
    }
    set setSabor(nuevoSabor){
         this.nuevoSabor=nuevoSabor
    }
    get getTieneChispasChocolate(){
        return this.tieneChispasChocolate
    }
    set setTieneChispasChocolate(nuevoChispasChocolate){
         this.tieneChispasChocolate=nuevoChispasChocolate
    }

    comer(){
        console.log(`Estas comiendo una galleta de ${this.sabor} ${this.tipo}`);
    }
    describir(){
        let infoChispasChocolate= this.tieneChispasChocolate? 'Contiene chispas de chocolate':'No contiene chispas de chocolate'
        console.log(`Esta es una galleta de ${this.sabor} ${this.tipo} ${infoChispasChocolate}`);
    }

}
const galleta1= new MoldeGalleta('chispas de chocolate','dulce',true)
galleta1.setTipo='Chips Ahoy'
console.log(galleta1.getTipo)
console.log(galleta1.getSabor)
console.log(galleta1.getTieneChispasChocolate)
galleta1.describir()
galleta1.comer()
const galleta2= new MoldeGalleta('avena','nuez',false)
console.log(galleta1)
galleta2.describir()
galleta2.comer()
console.log(galleta2);
