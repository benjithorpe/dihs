<script>
  let showNav = false;
</script>

<nav>
  <div class="logo">
    <img src="../../assets/school-badge.png" alt="School Badge">
    D.I.H.S
  </div>
  <ul class:showNav>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/events">Events</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/register">Register</a></li>
  </ul>
  <div class="menu" on:click={() => (showNav = !showNav)}>
    <div />
    <div />
    <div />
  </div>
</nav>

<style>
  .logo {
    color: navy;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-style: italic;
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: .25em;
  }
  .logo img{
    width: 3em;
    height: auto;
  }
  nav {
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 2em;
  }
  ul {
    list-style-type: none;
    text-align: center;
    position: absolute;
    top: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    border-bottom: 1px solid #ddd;
    line-height: 2;
    overflow: hidden;
    transition: height 0.2s ease-in-out;
    background-color: white;
    z-index: 10;
  }
  li a {
    font-size: 1.65rem;
    display: block;
  }
  .menu {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .showNav {
    height: 17em;
  }
  .menu div {
    width: 2.75em;
    border: 2px solid black;
  }

  @media (min-width: 400px) {
  }
  @media (min-width: 576px) {
    .menu {
      display: none;
    }
    nav {
      border-bottom: 1px solid #ddd;
    }
    ul {
      display: flex;
      gap: 2em;
      position: static;
      height: max-content;
      border: none;
    }
  }
  @media (min-width: 768px) {
    nav {
      padding: 0 2.5em;
    }
  }
  @media (min-width: 992px) {
    nav {
      padding: 0 5em;
    }
  }
  @media (min-width: 1200px) {
  }
</style>
