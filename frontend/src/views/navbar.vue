<template>
      <nav id="navbar" class="navbar has-shadow is-spaced">
  <div class="container">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28">
    </router-link>

    <a class="navbar-item is-hidden-desktop" href="https://github.com/ChrisMichaelPerezSantiago/torrent-client-streaming">
      <span class="icon" style="color: #333;">
        <i class="fab fa-lg fa-github-alt"></i>
      </span>
    </a>

    <div id="navbarBurger" class="navbar-burger burger"  data-target="navMenuIndex">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenuIndex" class="navbar-menu">
    <div class="navbar-start">  
        <a class="navbar-item bd-navbar-item-videos " href="#">
          <span class="icon has-text-success">
            <i class="fas fa-play-circle"></i>
          </span>
          <span>Movies</span>
        </a>
      
        <a class="navbar-item bd-navbar-item-expo " href="#">
          <span class="icon has-text-star">
            <i class="fas fa-star"></i>
          </span>

          <span>TV Shows</span>
        </a>
      

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>
        <div id="moreDropdown" class="navbar-dropdown">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-danger">
                  <i class="fas fa-heart"></i>
                </span>
                <strong>Author(s)</strong>
                <br>
									Brief information about the authors of the project
              </span>
            </a>
              <hr class="navbar-divider">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-primary">
                  <i class="fas fa-about"></i>
                </span>
                <strong>About</strong>
                <br>
                General description of the project
              </span>
            </a>
                    
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <a class="navbar-item is-hidden-touch is-hidden-desktop-only" href="https://github.com/ChrisMichaelPerezSantiago/torrent-client-streaming">
        <span class="icon" style="color: #333;">
          <i class="fab fa-lg fa-github-alt"></i>
        </span>
      </a>

      <div class="navbar-item">
        <div class="field is-grouped is-grouped-multiline">
          <p class="control">
          </p>
          <p class="control">
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>
</template>