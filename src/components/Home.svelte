<script>
  import Header from "./Header.svelte";
  const services = [
    {
      title: "Modern Computer Skills",
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nam provident, sed nesciunt aspernatur necessitatibus recusandae.`,
    },
    {
      title: "Another heading here",
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nam provident, sed nesciunt aspernatur necessitatibus recusandae.`,
    },
    {
      title: "Another heading here",
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nam provident, sed nesciunt aspernatur necessitatibus recusandae.`,
    },
    {
      title: "Another heading here",
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nam provident, sed nesciunt aspernatur necessitatibus recusandae.`,
    },
  ];
</script>

<Header />
<section>
  {#each services as service}
    <div>
      <h2>{service.title}</h2>
      <p>{service.summary}</p>
    </div>
  {/each}
</section>

<style>
  section {
    padding: 2em 1em;
    display: grid;
    grid-gap: 1em;
    max-width: 95%;
    margin: auto;
  }
  div {
    text-align: center;
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
    border-radius: 2px;
    padding: 1em;
  }
  h2 {
    font-weight: normal;
    font-size: 1.75rem;
    margin-bottom: 0.75em;
    color: rgb(47, 106, 155);
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
    color: #444;
  }

  @media (min-width: 400px) {
    section {
      max-width: 90%;
    }
  }
  @media (min-width: 576px) {
    div {
      width: max-content;
      margin: auto;
    }
    p {
      font-size: 1.55rem;
      max-width: 50ch;
      margin: auto;
    }
  }
  @media (min-width: 768px) {
    section {
      max-width: 97.5%;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.75em;
    }
    div {
      width: 100%;
    }
    div:hover {
      box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.3);
    }
  }
  @media (min-width: 992px) {
    section {
      max-width: 90%;
    }
  }
  @media (min-width: 1200px) {
  }
</style>
