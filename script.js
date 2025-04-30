async function getJoke() {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = "Loading...";
  
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
    const data = await response.json();
    jokeElement.textContent = data.joke || "No joke found! Try again.";
  } catch {
    jokeElement.textContent = "Failed to fetch joke. Check your connection!";
  }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

function copyJoke() {
    const joke = document.getElementById("joke").textContent;
    navigator.clipboard.writeText(joke)
      .then(() => alert("Joke copied! 📋"))
      .catch(() => alert("Failed to copy 😢"));
  }

getJoke();