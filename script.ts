const form: HTMLFormElement = document.getElementById('rating-card') as HTMLFormElement;
const thxCard: HTMLDivElement = document.getElementById('thx-card') as HTMLDivElement;

// Handle the click event of the radios within the form
document.querySelectorAll('.card__rating').forEach(
    rating => rating.addEventListener('click', (e) => {
        const selectedRating = e.currentTarget as HTMLInputElement;//document.querySelector('.card__rating:checked') as HTMLInputElement;
    
        // Remove the 'active' modifier from the currently active element, if any
        document.querySelector('.card__rating-label--active')?.classList.remove('card__rating-label--active');

        // Find the corresponding label from the selected radio
        const label = document.querySelector(`label[for="${selectedRating.id}"]`);
        label?.classList.add('card__rating-label--active');
    })
);

form?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the rating of the user
    const userRating = new FormData(form).get('rating');

    // Toggle the visiblity of the cards
    form.toggleAttribute('hidden', true);
    thxCard.toggleAttribute('hidden', false);

    // Set the selected rating text on the thxCard
    const ratingResultElement = document.getElementById('card-selected-rating') as HTMLParagraphElement;
    if (!ratingResultElement) {
        console.error("Rating result element not found!");
        return;
    }
    ratingResultElement.textContent = `You selected ${userRating} out of 5`;
});