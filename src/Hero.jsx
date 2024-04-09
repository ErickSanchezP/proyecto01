function Hero ({platillo}) {
    return (
      <>
        <div class="heropage justify-content-center" >
            <h1 className="display-5 fw-bold text-center">DOLCE VITA RISTORANTE</h1>
            <nav class="d-flex justify-content-around">
                <a class="" href="">INICIO   </a>
                <a class="" href="">MENÚ </a>
                <a class="" href="">RESERVACIÓN  </a>
                <a class="" href="">CONTACTOS    </a>

            </nav>
            <div>            
            <h2 class="display-2 text-center pt-3">Especial de hoy</h2>
            <h2 class="display-3 text-center"> {platillo}</h2>
            </div>

            <button class="btn btn-success p-5 m-3">Descubre más</button>
        </div>
      </>
    ) 

}

export default Hero