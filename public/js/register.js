//@@ TODO: Form submit listener, dispatch a fetch call (register the user as a private user)

const registerHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();

    if (username && email && password) {
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify({ 
                username, 
                email, 
                password 
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Succesfully signed up, returning to homepage.')
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

document.querySelector('.form-register').addEventListener('submit', registerHandler);