const reviewForm = document.getElementById("reviewForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const submittedComment = document.getElementById("submittedComment");
const commentText = document.getElementById("commentText");

reviewForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment").value;

  // Update submitted comment section
  commentText.textContent = `Rating: ${'★'.repeat(rating)}\n${comment}\n- ${name}`;
  submittedComment.classList.remove("hidden");

  // Simulate sending data to a server
  setTimeout(function() {
    reviewForm.reset();
    confirmationMessage.classList.remove("hidden");
    setTimeout(function() {
      confirmationMessage.classList.add("hidden");
    }, 3000);
  }, 1000);
});