import { Fragment } from "react"

function Menu () {
return (
    <>
    
        {/* <div class="bg-image" style="background-image: url ('https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        height:0px display:none">
            

        </div> */}
        <div class="h-100" >
        <h2 id="tituloMenu"class="text-center h-30">Menú</h2>
        </div>
        <div class="row justify-content-around">
        <div class="col-md-4"><h3>PASTAS</h3>
            <ul>
                <li>Spaguetti</li>
                <li>Penne</li>
                <li>Linguine</li>
                <li>Fettuccine</li>
            </ul>
        
        </div>
        <div class="col-md-4"><h3>PIZZA</h3>
            <ul>
                <li>Margarita</li>
                <li>Marinara</li>
                <li>Napoletana</li>
                <li>Diavola</li>
            </ul>
        </div>
        <div class="col-md-4"><h3>POSTRES Y AGUAS</h3>
            <ul>
                <li>Tiramisú</li>
                <li>Zapote</li>
                <li>Gaseosa</li>
                <li>Cannoli</li>
            </ul>

        </div>
        </div>
    </>
)
}

export default Menu