<script>
  const currentDate = new Date().toDateString();
  console.log(currentDate);
</script>

<section>
  <h1>Admission Form</h1>

  <form on:submit|preventDefault>
    <div>
      <label for="">Full Name</label>
      <input type="text" placeholder="John M. Doe" />
    </div>

    <div>
      <label for="">Date of Birth</label>
      <input type="date" />
    </div>

    <div>
      <label for="">Place of Birth</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Home Address</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Last School Attended</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Reasons for Transfer</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Class to be Enrolled</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Religion</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Phisical Disablity</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Mother's Name</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Mother's Address</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Mother's Occupation</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Mother's Telephone</label>
      <input type="tel" />
    </div>

    <div>
      <label for="">Father's Name</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Father's Address</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Father's Occupation</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Father's Telephone</label>
      <input type="tel" />
    </div>

    <div>
      <label for="">Guardian's Name</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Guardian's Address</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Guardian's Occupation</label>
      <input type="text" />
    </div>

    <div>
      <label for="">Guardian's Telephone</label>
      <input type="tel" />
    </div>

    <div>
      <label for="">Date Registered</label>
      <input type="date" />
    </div>

    <div>
      <p class="fee">Admission Fee: <span>Le, 500,000</span></p>
      <button type="button">Register</button>
    </div>
  </form>
</section>

<style>
  section{
    padding: 1em 0;
  }
  h1 {
    font-size: 2.5rem;
    padding: 0.5em;
    text-align: center;
  }
  form {
    width: 90%;
    margin: auto;
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
  label {
    color: #444;
    font-size: 1.75rem;
    display: block;
    margin-bottom: 0.1em;
  }
  input {
    width: 100%;
    font-size: 1.75rem;
    padding: 0.5em;
    border: 1px solid #aaa;
    border-radius: 3px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  input:focus {
    outline: 0;
    border: 1px solid black;
  }
  form div:last-child {
    text-align: center;
    margin-top: 1em;
  }
  .fee{
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 0.5em;
  }
  .fee span{
    font-weight: bold;
  }
  button {
    font-size: 1.75rem;
    padding: 0.65em 1.5em;
    color: white;
    background-color: rgb(16, 16, 122);
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  @media (min-width: 576px) {
    form {
      width: 80%;
    }
  }
  @media (min-width: 576px) {
    form {
      width: 70%;
    }
  }
  @media (min-width: 768px) {
    button:hover {
      background-color: rgb(31, 31, 148);
    }
  }
</style>
