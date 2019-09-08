<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <nuxt-link to="/" tag="li" class="nav-link">
          <a>Cake</a>
        </nuxt-link>
        <nuxt-link to="/about" tag="li" class="nav-link">
          <a>about</a>
        </nuxt-link>
         <nuxt-link to="/inputpd" tag="li" class="nav-link">
          <a>Add</a>
        </nuxt-link>

        <!-- Navbar dropdowns -->
        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-navbar>
  </div>

  <!-- <header class="main-header">
    <nav class="main-nav">
        <ul class="nav-links">
            <nuxt-link to="/" tag="li" class="nav-link"><a>All Posts</a></nuxt-link>
            <nuxt-link to="/about" tag="li" class="nav-link"><a>about</a></nuxt-link>
        </ul>
    </nav>
  </header>-->
</template>

<style scoped>
/* .main-header{
    position :fixed;
    top:0;
    left :0;
    width :100%;
    background :black;
    height: 4.5rem;

}

.main-nav{
    height: 100%;
}

.nav-links{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.nav-link{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 0.3rem;
}

.nav-link.nuxt-link-exact-active {
    border-bottom: 2px solid #06c4d1;
}
*/
.nav-link a {
  display: block;
  text-decoration: none;
  color: white;
}

.nav-link a:hover,
.nav-link a:active,
.nav-link.nav-link-exact-active a {
  color: aqua;
}
</style>