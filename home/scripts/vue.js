const header = document.querySelector("header");
let isScrolling;
window.addEventListener("scroll", () => {
  window.clearTimeout(isScrolling);

  header.style.opacity = "30%";
  header.style.border = "1px solid transparent";
  header.style.backgrondColor = "transparent";

  header.style.borderImage = "transparent";
  isScrolling = setTimeout(() => {
    header.style.opacity = "100%";

    if (window.scrollY > 50) {
      header.style.backgroundColor = "var(--bg)";
      header.style.border = "1px solid transparent";
      header.style.borderImage =
        "linear-gradient(90deg, #e5e5e51f 0%, #e5e5e58a 30%, #e5e5e51f 60%, #e5e5e58a 100%)";
      header.style.borderImageSlice = 1;
    } else {
      header.style.backgroundColor = "";
      header.style.border = "1px solid transparent";
      header.style.borderImage = "transparent";
    }
  }, 500);
});

const gallery = Vue.createApp({
  data() {
    return {
      urls: [
        "assets/images/image-1.png",
        "assets/images/image-2.png",
        "assets/images/image-3.png",
        "assets/images/image-4.png",
        "assets/images/image-5.png",
      ],
    };
  },
});

gallery.mount("#gallery");

const contact = Vue.createApp({
  data() {
    return {
      fullName: "",
      email: "",
      message: "",
      sent: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", {
        fullName: this.fullName,
        email: this.email,
        message: this.message,
      });
      this.sent = true;
      this.fullName = "";
      this.email = "";
      this.message = "";
    },
  },
});

contact.mount("#contact");
