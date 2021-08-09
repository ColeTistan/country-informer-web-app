<template>
  <div class="card" v-for="country of countries" :key="country">  
    <div class="card-content">
      <div class="card-header">
        <p class="country-name">
            {{ country.name }}
        </p>
      </div>
      <div class="card-img">
        <img :src="country.flag" :alt="country.name">  
      </div>
      <div class="country-details">
        <ul>
          <li>Captial: 
            <span>{{country.capital}}</span>
          </li>
          <li>Region: 
            <span>{{country.region}}</span>
          </li>
          <li>Subregion: 
            <span>{{country.subregion}}</span>
          </li>
          <li>Population: 
            <span>{{country.population}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
      return {
        urlBase: 'https://restcountries.eu/rest/v2',
        countries: []
      }
    },
    methods: {
      getAllCountries() {
        axios.get(`${this.urlBase}/all`)
          .then(res => {
            this.countries = res.data
            console.log(this.countries)
          })
        }
      },
    mounted() {
      this.getAllCountries()
    }
  }
</script>

<style lang="scss">
  $default-font-size: 16px;
  $primary-color: #4b92db;
  $secondary-color: #ffb81c;
  $light-color: #fbfbfb;
  $dark-color: #0c2340;
  $white-color: #ffffff;
  $border: 1px solid $dark-color;
  $general-size: 1rem;
  .card {
    border: $border;
    border-radius: $general-size;
    margin: $general-size;
  }

  .card-content {
    padding: $general-size;

    .card-header {
      display: block;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;

      .country-name {
        font-weight: 700;
        text-align: center;
        letter-spacing: 3px;
      }
    }

    .card-img {
      padding: 0.5rem;

      img {
        height: auto;
        width: 15rem;
        object-fit: cover;
      }
    }

    .country-details {
      padding-top: 0.5rem;

      ul li {
        padding: 0.5rem;
        text-align: center;
        letter-spacing: 1px;

        span {
          letter-spacing: 2px;
          font-weight: 600;
        }
      }
    }
  }
</style>