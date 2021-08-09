<template>
  <div>
    <Sidebar />
    <main>
      <h2 class="logo">Country Informer</h2>
      <section class="cards-wrapper">
        <Card />
      </section>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Card
  }
}
</script>

<style lang='scss'>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

  $default-font-size: 16px;
  $primary-color: #4b92db;
  $secondary-color: #ffb81c;
  $light-color: #fbfbfb;
  $dark-color: #0c2340;
  $white-color: #ffffff;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Playfair Display', serif;
  }

  ::placeholder {
    color: $dark-color;
  }

  body {
    color: $dark-color;
    background-color: $light-color;
  
    &::-webkit-scrollbar {
      width: 0.50rem;
    }

    &::-webkit-scrollbar-track {
      background: $dark-color;
    }

    &::-webkit-scrollbar-thumb {
      background: $primary-color;
    }
  }

  .logo {
    padding-top: 10px;
    letter-spacing: 3px;
    text-align: center;
    font-size: 32px;
    font-weight: 800;
  }

  main {
    margin-left: 5rem;
    padding: 1rem;

    .cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;

    .form-group {
      padding: 1.5rem;
      
      select {
        outline: none;
        border: none;
        height: 2rem;
        width: 10rem;
        background: $light-color;
        font-size: 1rem;
        letter-spacing: 1px;
      }


      input.search-box {
        font-size: 1rem;
        background: $light-color;
        outline: none;
        height: 2rem;
        width: 15rem;
        text-align: center;
        border-radius: 16px;
        border: none;
        transition: 0.2s all ease-in;
        letter-spacing: 1px;
      }

      
      
      input.search-box:focus {
        box-shadow: 0 3px 10px rgba(0 0 0 / 0.2);
        transition: 0.2s all ease-in;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    main {
      margin: 0;
    }
  }

</style>
