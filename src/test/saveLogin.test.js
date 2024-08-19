import { login } from '../js/api/auth/login.js';
import { save } from '../js/storage/index.js';

jest.mock('../js/storage/index.js', () => ({
  save: jest.fn(),
}));

jest.mock('../js/api/headers.js', () => ({
  headers: jest.fn(() => ({})),
}));

jest.mock('../js/api/constants.js', () => ({
  apiPath: 'http://example.com',
}));

describe('login', () => {
  it('should store the token when provided with valid credentials', async () => {
    const mockToken = 'mockedToken';
    const mockProfile = { accessToken: mockToken };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProfile),
      })
    );

    await login('test@stud.noroff.no', 'password123');

    expect(save).toHaveBeenCalledWith('token', mockToken);

    expect(save).toHaveBeenCalledWith('profile', {});
  });

  it('should throw an error when provided with invalid credentials', async () => {
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
