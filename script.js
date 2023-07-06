document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var customerName = document.getElementById("customer-name").value;
    var checkInDate = document.getElementById("check-in-date").value;
    var totalDays = parseInt(document.getElementById("total-days").value);
    var totalPersons = parseInt(document.getElementById("total-persons").value);
    var roomType = document.querySelector(
      'input[name="room-type"]:checked'
    ).value;
    var amenities = Array.from(
      document.querySelectorAll('#amenities input[type="checkbox"]:checked')
    ).map(function (checkbox) {
      return checkbox.value;
    });
    var advanceAmount = parseInt(
      document.getElementById("advance-amount").value
    );

    // Calculate total room cost
    var roomRate = roomType === "deluxe" ? 2500 : 4000;
    var totalRoomCost = roomRate * totalDays;

    // Calculate total amenities cost
    var amenitiesCost = 0;
    amenities.forEach(function (amenity) {
      if (amenity === "ac") {
        amenitiesCost += 1000;
      } else if (amenity === "locker") {
        amenitiesCost += 300;
      }
    });
    var totalAmenitiesCost = amenitiesCost * totalDays;

    // line cahnge
    // Calculate additional charges for extra persons
    var additionalCharges =
      totalPersons > 2 ? 1000 * (totalPersons - 2) * totalDays : 0;

    // Calculate total cost
    var totalCost = totalRoomCost + totalAmenitiesCost + additionalCharges;

    // Calculate balance amount
    var balance = totalCost - advanceAmount;

    // Display customer information
    document.getElementById("customer-name-output").textContent = customerName;
    document.getElementById("check-in-date-output").textContent = checkInDate;
    document.getElementById("total-days-output").textContent = totalDays;
    document.getElementById("total-persons-output").textContent = totalPersons;

    // Display room information
    document.getElementById("room-type-output").textContent =
      roomType.charAt(0).toUpperCase() + roomType.slice(1);

    // Display amenities information
    document.getElementById("amenities-output").textContent =
      amenities.join(", ");

    // Display booking information
    document.getElementById("advance-amount-output").textContent =
      advanceAmount;
    document.getElementById("total-room-cost-output").textContent =
      totalRoomCost;
    document.getElementById("total-amenities-cost-output").textContent =
      totalAmenitiesCost;
    document.getElementById("total-cost-output").textContent = totalCost;
    document.getElementById("additional-charges-output").textContent =
      additionalCharges;
    document.getElementById("balance-output").textContent = balance;

    // Show the booking details section
    document.getElementById("booking-details").classList.remove("hidden");
  });
