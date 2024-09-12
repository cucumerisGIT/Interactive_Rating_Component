var form = document.getElementById('rating-card');
var thxCard = document.getElementById('thx-card');
// Handle the click event of the radios within the form
document.querySelectorAll('.card__rating').forEach(function (rating) { return rating.addEventListener('click', function (e) {
    var _a;
    var selectedRating = e.currentTarget; //document.querySelector('.card__rating:checked') as HTMLInputElement;
    // Remove the 'active' modifier from the currently active element, if any
    (_a = document.querySelector('.card__rating-label--active')) === null || _a === void 0 ? void 0 : _a.classList.remove('card__rating-label--active');
    // Find the corresponding label from the selected radio
    var label = document.querySelector("label[for=\"".concat(selectedRating.id, "\"]"));
    label === null || label === void 0 ? void 0 : label.classList.add('card__rating-label--active');
}); });
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get the rating of the user
    var userRating = new FormData(form).get('rating');
    // Toggle the visiblity of the cards
    form.toggleAttribute('hidden', true);
    thxCard.toggleAttribute('hidden', false);
    // Set the selected rating text on the thxCard
    var ratingResultElement = document.getElementById('card-selected-rating');
    if (!ratingResultElement) {
        console.error("Rating result element not found!");
        return;
    }
    ratingResultElement.textContent = "You selected ".concat(userRating, " out of 5");
});
