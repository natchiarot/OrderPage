document.addEventListener("DOMContentLoaded", function () {
  const mealInfo = document.getElementById("mealInfo");
  const mealYes = document.getElementById("mealYes");

  const extraMealsInfo = document.getElementById("extraMealsInfo");
  const extraMealsYes = document.getElementById("extraMealsYes");

  const storeCardInfo = document.getElementById("storeCardInfo");
  const responseDineIn = document.getElementById("dinein");
  const responsePickup = document.getElementById("pickup");
  const responseDelivery = document.getElementById("delivery");

  const storeCCInfo = document.getElementById("storeCCInfo");
  const responseOnlinePay = document.getElementById("onlinepay");

  mealYes.addEventListener("change", function () {
    if (this.checked) {
      mealInfo.classList.remove("hidden1");
    }
  });

  extraMealsYes.addEventListener("change", function () {
    if (this.checked) {
      extraMealsInfo.classList.remove("hidden2");
    }
  });

  document
    .querySelector('button[name="submitOne"]')
    .addEventListener("click", function (event) {
      event.preventDefault();

      const extraMealQuantity = parseInt(
        document.querySelector("#extraMealQuantity").value,
        10
      );
      const mealContainer = document.getElementById("mealContainer");

      mealContainer.innerHTML = "";

      for (let i = 1; i <= extraMealQuantity; i++) {
        const mealDiv = document.createElement("div");
        mealDiv.className = "meal";
        mealDiv.innerHTML = `
        <div class="header">
          <h3><label for="meal${i}">Extra Meal ${i}:</label></h3></div>
          <div class="space-between">
          <label for="main${i}">Select a main dish</label>
          <select name="main${i}" id="main${i}">
              <option value="null" disabled="disabled" selected="true">Choose an option</option>
              <option value="burger">Pit Stop Burger</option>
              <option value="sliders">Speedway Sliders</option>
              <option value="chili">Checkered Flag Chili</option>
              <option value="hotdog">Racing Red Hot Dog</option>
              <option value="wrap">Victory Lap Vegan Wrap</option>
              <option value="chickentenders">Thundering Chicken Tenders</option>
              <option value="nachos">NASCAR Nachos</option>
              <option value="ribs">Burnout BBQ Ribs</option>
              <option value="wafflefries">Winner's Waffle Fries</option>
          </select>
          <label for="specials${i}">Specials</label>
          <select name="specials${i}" id="specials${i}">
              <option value="null" disabled="disabled" selected="true">Choose an option</option>
              <option value="fishtacos">Fast Track Fish Tacos</option>
              <option value="brunch">Sunday Speedway Brunch</option>
              <option value="nightcapshake">NASCAR Nightcap Shake</option>
              <option value="familyfeast">Family Fuel Up Feast</option>
              <option value="kidsmeal">Kid's Race Day Meal</option>
              <option value="chocolatebanana">Speedy Choco-Banana Bliss</option>
          </select>
      </div>

      <div class="space-between">
      <fieldset>
          <legend>Make it a meal?</legend>
          <div>
              <input type="radio" name="meal${i}" id="mealYes${i}" value="mealYes${i}" required>
              <label for="mealYes${i}">Yes</label>
          </div>
          <div>
              <input type="radio" name="meal${i}" id="mealNo${i}" value="mealNo${i}" required>
              <label for="mealNo${i}">No</label>
          </div>
      </fieldset>
      </div>

      <div id="mealInfo${i}" class="hidden${i}">
      <div class="space-between">
          <h3 class="header">Additional meal information:</h3>
          <fieldset>
              <legend>Choose a side and drink</legend>
              <div>
                  <label for="side${i}">Select a side</label>
                  <select name="side${i}" id="side${i}">
                  <option value="salad">Chequered Ceasar Salad</option>
                  <option value="tatertots">Turbocharged Garlic Knots</option>
                  <option value="sweetpotatofries">Fuel-Injected Sweet Potato Fries</option>
                  <option value="">Speedway Tire Tread Onion Rings</option>
                  <option value="macncheese">Finish Line Mac'n'Cheese</option>
                  </select>
              </div>
              <div>
                  <label for="drink${i}">Select a drink</label>
                  <select name="drink${i}" id="drink${i}">
                      <option value="null" disabled="disabled" selected="true">Choose an option</option>
                      <option value="smoothie">Racing Refuel Smoothie</option>
                      <option value="shake">Speedy Grub Hub Shake</option>
                      <option value="cola">Nitro Cola</option>
                      <option value="rootbeer">Raceway Root Beer</option>
                      <option value="lemonade">Victory Lemonade</option>
                      <option value="grapesoda">G-Force Grape Soda</option>
                      <option value="orangecrush">High-Octane Orange Crush</option>
                      <option value="punch">Pit Crew Punch</option>
                  </select>
              </div>
          </fieldset>
          </div>
      </div>
        `;
        mealContainer.appendChild(mealDiv);

        const mealYesRadio = document.getElementById(`mealYes${i}`);
        const mealNoRadio = document.getElementById(`mealNo${i}`);
        const mealInfoDiv = document.getElementById(`mealInfo${i}`);

        mealYesRadio.addEventListener("change", function () {
          if (this.checked) {
            mealInfoDiv.classList.remove("hidden" + i);
          }
        });

        mealNoRadio.addEventListener("change", function () {
          if (this.checked) {
            mealInfoDiv.classList.add("hidden" + i);
          }
        });
      }
    });

  responseDineIn.addEventListener("change", function () {
    if (this.checked) {
      storeCardInfo.classList.remove("hidden3");
    }
  });

  responsePickup.addEventListener("change", function () {
    if (this.checked) {
      storeCardInfo.classList.remove("hidden3");
    }
  });

  responseOnlinePay.addEventListener("change", function () {
    if (this.checked) {
      storeCCInfo.classList.remove("hidden4");
    }
  });

  responseDelivery.addEventListener("change", function () {
    if (this.checked) {
      deliveryInfo.classList.remove("hidden5");
    }
  });

  document
    .querySelector('button[name="submitTwo"]')
    .addEventListener("click", function (event) {
      event.preventDefault();
      thankYou.classList.remove("hidden6");
      const mainDish = document.getElementById("main").value;
      const specials = document.getElementById("specials").value;

      const extraMealQuantity =
        document.getElementById("extraMealQuantity").value;

      const makeItAMealInput = document.querySelector(
        'input[name="meal"]:checked'
      );
      const makeItAMeal = makeItAMealInput ? makeItAMealInput.value : "N/A";

      const side = document.getElementById("side").value;
      const drink = document.getElementById("drink").value;

      const diningPreferenceInput = document.querySelector(
        'input[name="diningpreference"]:checked'
      );
      const diningPreference = diningPreferenceInput
        ? diningPreferenceInput.value
        : "N/A";

      const payMethodInput = document.querySelector(
        'input[name="paymethod"]:checked'
      );
      const payMethod = payMethodInput ? payMethodInput.value : "N/A";

      const cctype = document.querySelector('input[name="cctype"]:checked');
      const ccname = document.getElementById("ccname").value;
      const ccnumber = document.getElementById("ccnumber").value;
      const ccexpdate = document.getElementById("ccexpdate").value;
      const cccvv = document.getElementById("cccvv").value;
      const address = document.getElementById("address").value;
      const city = document.getElementById("city").value;
      const postalcode = document.getElementById("postalcode").value;
      const custName = document.getElementById("custName").value;

      const meals = [];

      for (let i = 1; i <= extraMealQuantity; i++) {
        const mealNameInput = document.querySelector(`#meal${i}`);
        const mealName = mealNameInput ? mealNameInput.value : "N/A";

        const mainDishMealInput = document.querySelector(`#main${i}`);
        const mainDishMeal = mainDishMealInput
          ? mainDishMealInput.value
          : "N/A";

        const specialsMealInput = document.querySelector(`#specials${i}`);
        const specialsMeal = specialsMealInput
          ? specialsMealInput.value
          : "N/A";

        const makeItAMealMealInput = document.querySelector(
          `input[name="meal${i}"]:checked`
        );
        const makeItAMealMeal = makeItAMealMealInput
          ? makeItAMealMealInput.value
          : "N/A";

        const sideMealInput = document.querySelector(`#side${i}`);
        const sideMeal = sideMealInput ? sideMealInput.value : "N/A";

        const drinkMealInput = document.querySelector(`#drink${i}`);
        const drinkMeal = drinkMealInput ? drinkMealInput.value : "N/A";

        const mealInfo = `
    Main Dish: ${mainDishMeal ? mainDishMeal : "N/A"}
    Specials: ${specialsMeal ? specialsMeal : "N/A"}
    Make it a Meal: ${makeItAMealMeal}
    Side: ${sideMeal ? sideMeal : "N/A"}
    Drink: ${drinkMeal ? drinkMeal : "N/A"}
  `;
        meals.push(mealInfo);
      }

      const orderInfo = `
    Order Information:
    Name: ${custName ? custName : "N/A"}
    Main Dish: ${mainDish ? mainDish : "N/A"}
    Specials: ${specials ? specials : "N/A"}
    Make it a Meal: ${makeItAMeal}
    Side: ${side ? side : "N/A"}
    Drink: ${drink ? drink : "N/A"}
    Dining Preference: ${diningPreference ? diningPreference : "N/A"}
    Payment Method: ${payMethod ? payMethod : "N/A"}
    CC Type: ${cctype ? cctype.value : "N/A"}
    CC Name: ${ccname ? ccname : "N/A"}
    CC Number: ${ccnumber ? ccnumber : "N/A"}
    CC Expiry Date: ${ccexpdate ? ccexpdate : "N/A"}
    CCV: ${cccvv ? cccvv : "N/A"}
    Address: ${address ? address : "N/A"}
    City: ${city ? city : "N/A"}
    Postal Code: ${postalcode ? postalcode : "N/A"}
  `;
      console.log(orderInfo);

      meals.forEach((meal, index) => {
        console.log(`Extra Meal ${index + 1}:`);
        console.log(meal);
      });
    });
});
