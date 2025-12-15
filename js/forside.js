<script>
  document.querySelectorAll('.dropdown').forEach(dropdown ={" "}
  {dropdown.addEventListener("click", () => {
    const content = dropdown.nextElementSibling;
    const arrow = dropdown.querySelector(".arrow");

    if (!content || !content.classList.contains("dropdown-content")) return;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("active");
      arrow.style.transform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("active");
      arrow.style.transform = "rotate(180deg)";
    }
  })}
  )
</script>;

alert("clicked");
