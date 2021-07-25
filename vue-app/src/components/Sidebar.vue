<template>
  <div>
    <nav class="sidenav">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="https://restcountries.eu/" class="nav-link">
            <i class="fas fa-globe"></i>
            <span class="link-text">API</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="https://www.linkedin.com/in/coletistan/" class="nav-link">
            <i class="fab fa-linkedin"></i>
            <span class="link-text">Linkedin</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="https://github.com/ColeTistan" class="nav-link">
            <i class="fab fa-github"></i>
            <span class="link-text">Github</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="https://www.cctistan.com" class="nav-link">
            <i class="fas fa-user"></i>
            <span class="link-text">Cole Tistan</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
  $primary-color: #4b92db;
  $secondary-color: #ffb81c;
  $light-color: #565a5c;
  $dark-color: #0c2340;
  $white-color: #ffffff;

.sidenav {
  position: fixed;
  background-color: $dark-color;
  transition: width 600ms ease;
  width: 7rem;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.nav-item {
  width: 100%;
}

.nav-item:last-child {
  margin-top: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: darken($white-color, 10%);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: 0.2s all ease-in-out;
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: lighten($dark-color, 10%);
  color: $white-color;
}

.link-text {
  font-size: 1.2rem;
  display: none;
  // margin-left: 1rem;
  letter-spacing: 2px;
}

.nav-link i {
  font-size: 2.5rem;
  width: 3rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}

/* Small screens */
@media only screen and (max-width: 600px) {
  .sidenav {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .logo {
    display: none;
  }

  .nav-list {
    flex-direction: row;
  }

  .nav-link {
    justify-content: center;
  }
}

/* Large screens */
@media only screen and (min-width: 600px) {
  .sidenav {
    top: 0;
    width: 5.5rem;
    height: 100vh;
  }

  .sidenav:hover {
    width: 16rem;
  }

  .sidenav:hover .link-text {
    display: inline;
  }
}

</style>