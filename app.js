// increase counter for $59
document
  .getElementById("number-increase-59")
  .addEventListener("click", function () {
    const numberField59 = document.getElementById("number-field-59");
    numberField59Int = parseInt(numberField59.value);
    numberField59.value = parseInt(numberField59Int + 1);
  });

// decrease counter for $59
document
  .getElementById("number-decrease-59")
  .addEventListener("click", function () {
    const numberField59 = document.getElementById("number-field-59");
    numberField59Int = parseInt(numberField59.value);
    numberField59.value = parseInt(numberField59Int - 1);
  });

// increase counter for $1219
document
  .getElementById("number-increase-1219")
  .addEventListener("click", function () {
    const numberField1219 = document.getElementById("number-Field-1219");
    numberField1219Int = parseInt(numberField1219.value);
    numberField1219.value = parseInt(numberField1219Int + 1);
  });
