//Ejemplo 1
class Vaso{
    //características (atributos)
        constructor(volumen, liquido, cantidad){
        this.volumen = volumen;
        this.liquido = liquido;
        this.cantidad = cantidad;
    }
    //comportamiento (métodos)
    llenar(){
        return `Llenaste el vaso con ${this.cantidad} de ${this.liquido}`;
    }

    beber(){
        return `Te bebiste todo el ${this.liquido} del vaso`;
    }

    vaciar(){
        return `Vaciaste el vaso que contenia ${this.cantidad} de ${this.liquido}`;
    }
}

//Primera instancia
let vaso_1 = new Vaso("100", "agua", "60ml");

//Segunda instancia
let vaso_2 = new Vaso("100", "Té", "70ml");

//Tercera instancia
let vaso_3 = new Vaso("150", "jugo de naranja", "100ml");

//Ejemplo 2
class Comida{
    //características (atributos)
    constructor(nombre, color, sabor) {
        this.nombre= nombre;
        this.color = color;
        this.sabor = sabor;
    }
    //comportamiento (métodos)
    comer(){
        return  `elejiste una ${this.nombre} ${this.sabor} para comer`;
    }
}

//Primera instancia
let manzana = new Comida("Manzana", "rojo o verde", "dulce");

//Segunda instancia
let naranja = new Comida("Naranja", "naranja", "dulce")

//Tercera instancia
let banana = new Comida("Banana", "amarillo", "dulce");