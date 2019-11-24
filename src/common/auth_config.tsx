export const signUpConfig = {
    hiddenDefaults: ['phone_number', 'email'],
    signUpFields: [
        { label: 'Name', key: 'name', displayOrder: 1, required: true, type: 'string', placeholder: 'E.g. Roger S',},
        { label: 'Email', key: 'username', displayOrder: 2, required: true, type: 'email' , placeholder: 'Enter your email',},
        { label: 'Password', key: 'password', displayOrder: 3, required: true, type: 'password' , placeholder: 'Enter your password',},
    ],
}