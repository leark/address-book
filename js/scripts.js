// Create an Address Book application that allows a user to add new contacts by filling out a form. List all contact names on the homepage. Users should be able to click a name to view the contact's details (such as their address, phone number, email address, and more).

$(document).ready(function () {
  $('form#newAddress').submit(function (event) {
    event.preventDefault();

    const name = $('#name').val();
    const birthday = $('#birthday').val();
    const street = $('#street').val();
    const city = $('city').val();
    const state = $('state').val();
    const zip = $('zip').val();
    const phoneNumber = $('#phoneNumber').val();
    const email = $('#email').val();
    const relationship = $('input:radio[name=relationship]:checked').val();
    const favColor = $('color').val();
    $('.nameC').append(name);
    $('#output').append('<p>' + street + '</p>');
    $('#output').append('<p>' + city + '</p>');

    $('#address').show();
  });
});

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

// $(document).ready(function () {
//   $('#formOne').submit(function () {
//     $('.person1').append('blah blah');
//     $('.person2').append('blah blah');
//     $('.animal').append('blah blah');
//     $('.exclamation').append('blah blah');
//     $('.verb').append('blah blah');
//     $('.noun').append('blah blah');

//     $('#address').show();
//   });
// });
