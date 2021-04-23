<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand ml-3" href="#">
          <img src="./../../assets/img/logo.svg" width="180" alt="emprestabemelhorlogo" />
        </a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
          <li class="nav-item active">
            <a class="nav-link mr-3" href="#"
              ><h5>Home</h5> <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="#"><h5>A Empresta</h5></a>
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="#"><h5>Sobre</h5></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Procurar"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Pesquisar
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<style scoped>

li > a:hover{
    color: #002E6E;
    font-weight: bold;
    text-decoration: underline;
}

</style>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>

