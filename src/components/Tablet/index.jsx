import React from "react";
import PropTypes from "prop-types";
import { RowAndColumns } from "../RowAndColumns";


const dataMovie = [
    {
    id: 1 ,
    titulo: "Reto al destino",
    calificacion: 20,
    premios: 15,
    duracion: 120
    },
    {
        id: 2 ,
        titulo: "La caida del halcon negro",
        calificacion: 10,
        premios: 18,
        duracion: 240 
    }
]


export const Tablet = () =>{
    return(
        <>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
										</tr>
									</thead>
                                    {dataMovie.map((row,index)=>{
                                        return <RowAndColumns {...row} key={index}/>
                                    })}
                                    
								</table>
							</div>
						</div>
					</div>            

        <h2>LLegamos al final</h2>


        </>
    )
}
Tablet.propTypes = {
    title: PropTypes.string.isRequired,
    icono: PropTypes.string.isRequired,
    cifra: PropTypes.number.isRequired,
}
Tablet.defaultProps ={
    color: "border-left-primary",
}
