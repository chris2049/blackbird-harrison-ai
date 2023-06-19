const validatePassword = () =>{
    return (_password.length >= 8 &&
        /[A-Z]/.test(_password) &&
        /[a-z]/.test(_password) &&
        /\d/.test(_password) &&
        /[^A-Za-z0-9]/.test(_password)
        );
}

it('fail if no upprrCase', ()=>{
    expect(validatePassword('pizzaguy1!')).toBe(false)
})