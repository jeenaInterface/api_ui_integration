import fetch from 'node-fetch';

export async function loginAPI(username: string, password: string): Promise<string> {
    const url = 'https://apmapitest.interfacesys.com/api/Auth/Login'; // Update the URL to the correct endpoint

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'username': username,
            'password': password
        })
    });

    if (response.ok) {
        try {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                console.log('Access token:', data.Data.Token); 
                return data.Data.Token;
                // Assuming the API returns an access token upon successful login
            } else {
                throw new Error('Invalid response format');
            }
        } catch (error) {
            throw new Error('Failed to parse JSON response');
        }
    } else {
        throw new Error('Failed to login');
    }
}
