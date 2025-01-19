// Form configuration
const formConfig = {
    bedrooms: {
        min: 8,
        max: 20,
        label: (num) => num === 20 ? '20+' : num.toString()
    },
    capacity: {
        min: 10,
        max: 30,
        label: (num) => num === 30 ? '30+' : num.toString()
    }
};

// Initialize form elements
function initializeForm() {
    // Populate bedrooms dropdown
    const bedroomsSelect = document.getElementById('bedrooms');
    for (let i = formConfig.bedrooms.min; i <= formConfig.bedrooms.max; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = formConfig.bedrooms.label(i);
        bedroomsSelect.appendChild(option);
    }

    // Populate capacity dropdown
    const capacitySelect = document.getElementById('capacity');
    for (let i = formConfig.capacity.min; i <= formConfig.capacity.max; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = formConfig.capacity.label(i);
        capacitySelect.appendChild(option);
    }

    // Add form submission handler
    const form = document.getElementById('venueForm');
    form.addEventListener('submit', handleSubmit);
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        url: document.getElementById('venue-url').value,
        bedrooms: document.getElementById('bedrooms').value,
        capacity: document.getElementById('capacity').value,
        notes: document.getElementById('notes').value
    };

    // For now, just log the data to console
    console.log('Venue Data:', formData);
    
    // Here you could add code to:
    // - Save to localStorage
    // - Send to a server
    // - Update a table on the page
    // etc.
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initializeForm); 