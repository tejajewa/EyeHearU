function submitAnswer(answer) {
  console.log("User answered:", answer);
  document.getElementById("thanks").textContent = "Thanks for your response: " + answer;
}