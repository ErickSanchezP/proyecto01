function Section ({saludo}) {
    return (
        <div class=" row">
            <div class="col p-4">
                <h3>{saludo}</h3>
                <p class="p-4">Bienvenidos a Dolce Vita Ristorante, un rincón acogedor donde la calidez del hogar se une con los sabores auténticos de la cocina italiana. En nuestro restaurante, la tranquilidad y la familiaridad son la esencia de cada comida. </p>
                <p class="p-4">Desde nuestas recetas caseras hasta nuestro ambiente acogedor, cada detalle está diseñado para que se sienta como en casa mientras disfruta de platos tradicionales preparados con amor y pasión. </p>
            </div>
            <div class="col">
                <img src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="picsa" />
                </div>           
        </div>
    )
}

export default Section