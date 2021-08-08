<template>
  <div class="card">
    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA Flag">    
    <div class="card-content">
      <div class="card-header">
        <p class="country-name">
            United States of America
        </p>
        <p class="country-alpha-code">
            (USA)
        </p>
      </div>
      <div class="country-details">
        <ul>
          <li>Captial: Washington D.C.</li>
          <li>National Language: English</li>
          <li>Region: Americas</li>
          <li>Currency: United States dollar ($)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
  
  .card {
    border: $border;
    border-radius: 0 0 16px 16px;
    margin: 1rem;
      
    img {
      height: 12rem;
      width: auto;
      object-fit: cover;
      width: auto;
    }
  }

  .card-content {
    padding: 1rem;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;
    }

    .country-details {
      padding-top: 0.5rem;

      ul li {
        padding: 0.5rem;
        text-align: center;
      }
    }
  }
</style>