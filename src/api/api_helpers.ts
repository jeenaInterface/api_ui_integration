import fetch from 'node-fetch';

export async function loginAPI(username: string, password: string): Promise<string> {
    const response = await fetch(process.env.BASEURLCOPSADMINLITE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if (response.ok) {
        const data = await response.json();
        return data.token; // Assuming the API returns a token upon successful login
    } else {
        throw new Error('Failed to login');
    }
}

