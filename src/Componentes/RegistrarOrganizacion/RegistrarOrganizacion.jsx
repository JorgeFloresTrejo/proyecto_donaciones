import React from "react";
import { useState } from "react";

function RegistrarOrganizacion(){

    
    const [iniciarFormulario, setIniciarFormulario] = useState({  
        nombre: "",
        correo: "",
        direccion: "",
        contra: ""
    })

    const[datos, setDatos] = useState(iniciarFormulario);

    function Registrar(){

    }
    function manejarFormulario({target: {name, value}}){
        setDatos({...datos, [name]: value})
    }

    return(
        <>
        <div>
            <h2>Registre su organización</h2>

            <form onSubmit={Registrar}>
                <div>
                    <label htmlFor="nombre">Nombre :</label>
                    <input type="text" id="nombre" name="nombre" value={datos.nombre} placeholder="Ingrese el nombre de su organización" onChange={manejarFormulario}/>
                </div>
                <div>
                    <label htmlFor="correo">Correo :</label>
                    <input type="email" id="correo" placeholder="Ingrese el correo de su organización"/>
                </div>
                <div>
                    <label htmlFor="direccion">Direccion:</label>
                    <input type="text" id="direccion" placeholder="Ingrese su direccion"/>
                </div>
                <div>
                    <label htmlFor="contra">Contraseña:</label>
                    <input type="text" id="contra" placeholder="Ingrese su contraseña"/>
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
        </>
    )
}

export default RegistrarOrganizacion


// // SPDX-License-Identifier: MIT
// pragma solidity 0.8.18;

// contract donaciones{

// address public propietario;

//    constructor()payable {
//        propietario = msg.sender;
//    }

//    receive() external payable {}
   
//    struct Organizacion{
//        string nombre;
//        address direccion;
//        bool estado;
//    }


//    event estadoEnvio(bool);
//    event registrar(
//        string,
//        address,
//        bool
//    );

//      mapping (address => Organizacion) public organizaciones;
  
//   function registrarOrganizacion(string memory _nombre, address _direccion) public {
//         Organizacion memory organizacion = organizaciones[_direccion];
//         require(organizacion.estado != true, "Esta direccion ya esta registrada");
//        organizaciones[_direccion] = Organizacion(_nombre, _direccion, true);
//        emit registrar(_nombre, _direccion, true);
//   }

//   function realizarDonacion(address payable _direccion) public payable {
//         Organizacion storage organizacion = organizaciones[_direccion];
//         //   Validaciones
//         require(organizacion.direccion == _direccion, "Organizacion no registrada");
//         require(msg.value > 0, "Cantidad no valida");
//         require(organizacion.direccion == propietario, "El propietario no puede mandar transancciones");
         
//         bool resultado = _direccion.send(1 ether);
//         emit estadoEnvio(resultado);   
//         require(resultado == true, "El envio ha sido exitoso");
//   }

// }

// contract recibirEth{
//     event log(uint256 monto, uint256 gas);

//     receive() external payable{
//         emit log(address(this).balance, gasleft());  
//     }
// }