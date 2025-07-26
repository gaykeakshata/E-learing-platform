function updateProgress() {
  const progressBar = document.getElementById("courseProgress");
  if (progressBar.value < 100) {
    progressBar.value += 20;
  } else {
    alert("Course already completed!");
  }
}
