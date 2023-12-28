const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyBY75zBgtS_nhdE-40jea8zgAUPGDvNJrM";

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
}

form.addEventListener("submit", searchAddressHandler);
