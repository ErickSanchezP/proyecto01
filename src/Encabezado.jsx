import { Fragment } from "react"

function Encabezado ({saludo}) {
    return (
      <Fragment>
        <nav class="navbar bg-body-tertiary navbar-expand-md navbar-light bg-light px-4">
  <div class="container-fluid">
    <span class="navbar-text">
       {saludo}
    </span>
  </div>
</nav>
      </Fragment>
    ) 

}

export default Encabezado 