<script></script>

<header>
  <h1>Dynamic International High School</h1>
  <h3 class="motto">
    <span>Motto:</span> &ldquo;There is Dignity in Learning.&rdquo;
  </h3>
  <a href="/register" class="cta">Register Now!</a>
</header>

<style>
  header {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/classroom.jpg");
    position: relative;
  }
  header::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.65);
  }
  h1,
  .motto,
  .cta {
    z-index: 5;
    color: white;
  }
  h1 {
    font-size: 3rem;
    text-align: center;
    text-transform: capitalize;
  }
  .motto {
    font-size: 1.5rem;
    margin-top: 0.75em;
  }
  .motto span {
    font-style: italic;
    font-weight: normal;
  }
  .cta {
    margin-top: 2em;
    background-color: rgb(16, 16, 122);
    border-radius: 3px;
    font-size: 2rem;
    padding: 0.65em 1em;
  }

  @media (min-width: 400px) {
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    header {
      background-size: cover;
    }
    header::after {
      background-color: rgb(0, 0, 0, 0.75);
    }
    h1 {
      font-size: 3.5rem;
    }
    .motto {
      font-size: 1.75rem;
      color: #eee;
    }
    .cta:hover {
      background-color: rgb(17, 17, 94);
    }
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
</style>
