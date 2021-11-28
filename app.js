function updateIncrease59(isIncreasing) {
  const numberField59 = document.getElementById("number-field-59");
  numberField59Int = parseInt(numberField59.value);
  if (isIncreasing == true) {
    numberField59.value = parseInt(numberField59Int + 1);
  } else if (numberField59Int > 0) {
    numberField59.value = parseInt(numberField59Int - 1);
  }
}

function updateIncrease1219(isIncreasing) {
  const numberField1219 = document.getElementById("number-Field-1219");
  numberField1219Int = parseInt(numberField1219.value);
  if (isIncreasing == true) {
    numberField1219.value = parseInt(numberField1219Int + 1);
  } else if (numberField1219Int > 0) {
    numberField1219.value = parseInt(numberField1219Int - 1);
  }
}

// increase counter for $59
document
  .getElementById("number-increase-59")
  .addEventListener("click", function () {
    // const numberField59 = document.getElementById("number-field-59");
    // numberField59Int = parseInt(numberField59.value);
    // numberField59.value = parseInt(numberField59Int + 1);

    updateIncrease59(true);
  });

// decrease counter for $59
document
  .getElementById("number-decrease-59")
  .addEventListener("click", function () {
    // const numberField59 = document.getElementById("number-field-59");
    // numberField59Int = parseInt(numberField59.value);
    // numberField59.value = parseInt(numberField59Int - 1);
    updateIncrease59(false);
  });

// increase counter for $1219
document
  .getElementById("number-increase-1219")
  .addEventListener("click", function () {
    // const numberField1219 = document.getElementById("number-Field-1219");
    // numberField1219Int = parseInt(numberField1219.value);
    // numberField1219.value = parseInt(numberField1219Int + 1);
    updateIncrease1219(true);
  });

// decrease counter for $1219
document
  .getElementById("number-decrease-1219")
  .addEventListener("click", function () {
    // const numberField1219 = document.getElementById("number-Field-1219");
    // numberField1219Int = parseInt(numberField1219.value);
    // numberField1219.value = parseInt(numberField1219Int - 1);

    updateIncrease1219(false);
  });
