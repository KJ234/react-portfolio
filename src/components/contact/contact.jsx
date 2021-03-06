import "./contact.css";

function Contact() {
  return (
    <section class="contact" id="contact">
      <h1 class="heading">contact me</h1>

      <div class="row">
        <form action="">
          <input type="text" class="box" placeholder="first name" />
          <input type="text" class="box" placeholder="last name" />
          <input type="email" class="box" placeholder="your email" />
          <input type="text" class="box" placeholder="your project" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="box message"
            placeholder="message"
          ></textarea>
          <input type="submit" value="message" class="btn" />
        </form>

        <div class="content">
          <div class="icons">
            <h3>
              <i class="fas fa-map-marker-alt"></i> address
            </h3>
            <p>Birmingham, UK</p>
          </div>
          <div class="icons">
            <h3>
              <i class="fas fa-envelope"></i> email
            </h3>
            <p>komaljaved308@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
