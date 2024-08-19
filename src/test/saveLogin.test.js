import { login } from '../js/api/auth/login.js';
import { save } from '../js/storage/index.js'; // Endret importen til index.js, som mockes nedenfor

jest.mock('../js/storage/index.js', () => ({
  save: jest.fn(), // Mock save-funksjonen
}));

jest.mock('../js/api/headers.js', () => ({
  headers: jest.fn(() => ({})), // Mock headers-funksjonen
}));

jest.mock('../js/api/constants.js', () => ({
  apiPath: 'http://example.com', // Mock apiPath-konstanten
}));

describe('login', () => {
  it('should store the token when provided with valid credentials', async () => {
    const mockToken = 'mockedToken';
    const mockProfile = { accessToken: mockToken };

    // Mock fetch API response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProfile),
      })
    );

    await login('test@stud.noroff.no', 'password123');

    // Sjekker om save-funksjonen ble kalt med tokenet
    expect(save).toHaveBeenCalledWith('token', mockToken);

    // Sjekker om save-funksjonen ble kalt med profil uten accessToken
    expect(save).toHaveBeenCalledWith('profile', {});
  });

  it('should throw an error when provided with invalid credentials', async () => {
    // Mock fetch API response for invalid credentials
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Unauthorized',
      })
    );

    await expect(login('wrong@example.com', 'wrongpassword')).rejects.toThrow(
      'Unauthorized'
    );
  });
});
